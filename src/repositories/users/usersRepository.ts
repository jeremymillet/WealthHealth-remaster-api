import User from "../entitees/dao/user"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import db from '../../database/db'
import { RunResult } from "sqlite3";

export const postLogin = (data: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        // Récupérer l'utilisateur par email
        db.get('SELECT * FROM users WHERE email = ?', [data.email], async (err, row: User | undefined) => {
            if (err) {
                return reject({ message: 'Error executing query', error: err });
            }

            if (!process.env.AUTH_REFRESH_TOKEN_SECRET) {
                return reject({ message: 'La variable AUTH_REFRESH_TOKEN_SECRET est manquante dans les variables d\'environnement.' });
            }

            if (!row) {
                return reject({ message: 'Email or password incorrect' });
            }

            // Comparer les mots de passe
            const match = await bcrypt.compare(data.password, row.password);
            if (match) {
                // Générer le refresh token
                const refreshToken = jwt.sign(
                    { userId: row.user_id },
                    process.env.AUTH_REFRESH_TOKEN_SECRET || 'defaultSecretKey',
                    { expiresIn: process.env.AUTH_REFRESH_TOKEN_EXPIRY }
                );

                // Mise à jour du refresh token dans la base de données
                db.run('UPDATE users SET refresh_token = ? WHERE user_id = ?', [refreshToken, row.user_id], (updateError) => {
                    if (updateError) {
                        return reject({ message: 'Error updating refresh token', error: updateError });
                    }

                    // Ajouter le refresh token aux résultats renvoyés
                    row.refreshToken = refreshToken;
                    resolve(row); // Résoudre la promesse avec l'utilisateur, incluant le refresh token
                });
            } else {
                return reject({ message: 'Email or password incorrect' });
            }
        });
    });
};
export const verifyAndGenerateAccessToken = async (refreshToken: string): Promise<string> => {
    try {
        // Vérifier si le refresh token existe dans la base
        const user = await db.get('SELECT * FROM users WHERE refresh_token = ?', [refreshToken]);

        if (!user) {
            throw { message: 'Invalid or not found refresh token', statusCode: 403 };
        }

        // Vérifier la validité du refresh token
        if (!process.env.AUTH_REFRESH_TOKEN_SECRET) {
            throw new Error('Missing AUTH_REFRESH_TOKEN_SECRET in environment variables');
        }

        // Décoder et vérifier le refresh token
        const decoded = jwt.verify(refreshToken, process.env.AUTH_REFRESH_TOKEN_SECRET || 'defaultSecretKey') as jwt.JwtPayload;

        if (!decoded?.userId) {
            throw { message: 'Invalid refresh token', statusCode: 403 };
        }

        // Générer un nouvel access token
        const accessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.AUTH_ACCESS_TOKEN_SECRET || 'defaultSecretKey',
            { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY || '1h' }
        );

        return accessToken;
    } catch (error) {
        // Gestion des erreurs
        throw { message: error.message || 'An error occurred', statusCode: error.statusCode || 500 };
    }
};
export const postLogOut = async (refreshToken: string): Promise<string> => {
    try {
        // Supprimer le refresh token de la base de données
        const result: RunResult = await new Promise((resolve, reject) => {
        db.run('UPDATE users SET refresh_token = NULL WHERE refresh_token = ?', [refreshToken], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this);  // `this` correspond à l'objet RunResult
            }
            });
        });
        // Vérifier si une ligne a été affectée
        if (result.changes === 0) {
            throw { message: 'Invalid or not found refresh token', statusCode: 403 };
        }

        return 'Logout successful, refresh token removed';
    } catch (error) {
        // Gestion des erreurs
        throw { message: error.message || 'An error occurred', statusCode: error.statusCode || 500 };
    }
};