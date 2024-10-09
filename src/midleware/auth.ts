import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        console.log(process.env.TOKEN_SECRET);
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId
        req.auth = { userId }
       
    next()
    }
    catch (error) {
        return res.status(401).json({ message: 'test' })
    }
};