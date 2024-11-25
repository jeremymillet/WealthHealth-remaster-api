import { Request, Response } from "express"
import { postLoginService, postLogOutService, postTokenService } from "../../services/users"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


export const postLogin = async (req: Request, res: Response) => { 
    try {
        const result = await postLoginService(req.body);
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        if (result) { 
            // Générer l'access token
            const accessToken = jwt.sign(
                { userId: result.user_id },  
                process.env.AUTH_ACCESS_TOKEN_SECRET || 'defaultSecretKey',  
                { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY } 
            );

            // Ajouter le refresh token au cookie (récupéré dans `result.refreshToken`)
            res.cookie('refreshToken', result.refreshToken, {
                httpOnly: true,  // Empêche l'accès au cookie via JavaScript
                secure: true, 
                sameSite: 'none',// Nécessaire pour les requêtes cross-origin
                maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 jours
            });

            return res.status(200).json({
                message: 'Login successful',
                userId: result.user_id,
                accessToken,
            });
        }
    } catch (error) {
        if (error.message === 'email or password incorrect') {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        return res.status(500).json({ message: error.message });
    }
}

export const postToken = async (req: Request, res: Response) => { 
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(400).json({ message: 'Refresh token is required' });
        }
        const accessToken = await postTokenService(refreshToken);
        return res.status(200).json({ accessToken });
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
    
}

export const postLogOut = async (req: Request, res: Response) => { 
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(204);
        const result = await postLogOutService(refreshToken); 
        if (result) {
            res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'strict' });
            res.sendStatus(204);  // Succès sans contenu
        }
    } catch (error) {
        
    }
}

