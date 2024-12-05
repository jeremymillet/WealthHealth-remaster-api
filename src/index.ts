import express, { Request, Response } from 'express';
import cors from 'cors';
import employeesRoutes from './routes/employees';
import loginRoutes from './routes/users';
import cookieParser from 'cookie-parser';


const app = express();

const port = process.env.PORT || 3001;

const allowedOrigins = [
    'https://wealthhealth-remaster.onrender.com',
    'http://localhost:5174',
];
app.use(cors({
    origin: allowedOrigins,
    credentials: true, // Nécessaire pour envoyer les cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/employees', employeesRoutes);
app.use('/api/users',loginRoutes)


app.listen(port, () => { 
    console.log('server running on port ' + port );
});