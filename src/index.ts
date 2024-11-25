import express, { Request, Response } from 'express';
import cors from 'cors';
import employeesRoutes from './routes/employees';
import loginRoutes from './routes/users';
import cookieParser from 'cookie-parser';


const app = express();

const port = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:5173', // Adresse de votre frontend
    credentials: true, // Nécessaire pour envoyer les cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/employees', employeesRoutes);
app.use('/api/users',loginRoutes)


app.listen(port, () => { 
    console.log('server running on port ' + port );
});