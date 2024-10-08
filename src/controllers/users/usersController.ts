import { Request, Response } from "express"
import { postLoginService } from "../../services/users"
import UserAssemblerDB from "../../repositories/entitees/assemblers/UserAssembler"
import jwt from "jsonwebtoken";


export const postLogin = async (req: Request, res: Response) => { 
    try {
        const userDB = new UserAssemblerDB(req.body).toDAO();
        const result = await postLoginService(userDB);
        const { email, password } = userDB;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        if (result) { 
            const token = jwt.sign(
                { userId: result.id },  
                process.env.TOKEN_SECRET || 'defaultSecretKey',  
                { expiresIn: '24h' } 
            );
            return res.status(200).json({
                message: 'Login successful',
                token
            });
        }
    } catch (error) {
        if (error.message === 'email or password incorrect') {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        return res.status(500).json({ message: error.message });
    }
}