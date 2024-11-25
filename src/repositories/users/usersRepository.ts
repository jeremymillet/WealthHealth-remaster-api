import { PoolConnection, QueryError} from "mysql2"
import { connection } from "../../database/db"
import User from "../entitees/dao/user"
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from "jsonwebtoken";

export const postLogin = (data: User): Promise<User> => {
    return new Promise((resolve, reject) => { 
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
            if (err) {
                return reject({ message: 'Error establishing connection', error: err });
            }

            const query = "SELECT * FROM users WHERE email = ?";
            conn.query(query, [data.email], async (error: QueryError | null, results: any[]) => {
                if (error) {
                    conn.release();
                    return reject({ message: 'Error executing query', error });
                }
                if (!process.env.AUTH_REFRESH_TOKEN_SECRET) {
                    throw new Error('La variable AUTH_REFRESH_TOKEN_SECRET est manquante dans les variables d\'environnement.');
                }

                if (results.length === 0) {
                    conn.release();
                    return reject({ message: 'email or password incorrect' });
                }

                const match = await bcrypt.compare(data.password, results[0].password);
                if (match) {
                    // Générer le refresh token

                    const refreshToken = jwt.sign(
                        { userId: data.user_id },  
                        process.env.AUTH_REFRESH_TOKEN_SECRET || 'defaultSecretKey',
                        { expiresIn: process.env.AUTH_REFRESH_TOKEN_EXPIRY }  
                    );
                    
                    // Mise à jour du refresh token dans la base de données
                    const updateTokenQuery = "UPDATE users SET refresh_token = ? WHERE user_id = ?";
                    conn.query(updateTokenQuery, [refreshToken, results[0].user_id], (updateError) => {
                        conn.release();
                        if (updateError) {
                            return reject({ message: 'Error updating refresh token', error: updateError });
                        }
                        results[0].refreshToken = refreshToken;  // Ajouter le refresh token aux résultats renvoyés
                        resolve(results[0]);
                    });
                } else {
                    conn.release();
                    return reject({ message: 'email or password incorrect' });
                }
            });
        });
    });
};

export const verifyAndGenerateAccessToken = (refreshToken: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
            if (err) {
                return reject({ message: 'Error establishing connection', error: err });
            }

            // Vérifier la présence du refresh token dans la base de données
            const query = 'SELECT * FROM users WHERE refresh_token = ?';
            conn.query(query, [refreshToken], (error: QueryError | null, results: any[]) => {
                conn.release();  // Libérer la connexion après la requête
                if (error || results.length === 0) {
                    console.log("test")
                    return reject({ message: 'Invalid or not found refresh token', statusCode: 403 });
                }
                // Vérifier la validité du refresh token avec jwt.verify
                jwt.verify(refreshToken, process.env.AUTH_REFRESH_TOKEN_SECRET || 'defaultRefreshKey', (err, user) => {
                    if (err) {
                        return reject({ message: 'Invalid refresh token', statusCode: 403 });
                    }

                    // Générer un nouveau access token
                    const accessToken = jwt.sign(
                        { userId: user.userId },  // On extrait l'userId du token
                        process.env.AUTH_ACCESS_TOKEN_SECRET || 'defaultSecretKey',
                        { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY }  // Définir la durée d'expiration de l'access token
                    );

                    resolve(accessToken);  // Retourner le nouveau access token
                });
            });
        });
    });
};

export const postLogOut = (refreshToken: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("test")
        // Mise à jour du refresh_token à NULL dans la base de données
        console.log(refreshToken)
        connection.query('UPDATE users SET refresh_token = NULL WHERE refresh_token = ?', [refreshToken], (error) => {
            console.log(refreshToken)
            if (error) {
                // En cas d'erreur, rejeter la promesse avec un message d'erreur
                console.log(refreshToken)
                return reject({ message: 'Invalid or not found refresh token', statusCode: 500 });
            }

            // Résoudre la promesse si l'opération a réussi
            resolve('Logout successful, refresh token removed');
        });
    });
};