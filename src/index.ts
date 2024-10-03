import express, { Request, Response } from 'express';
import { connection } from './database/db';
import { PoolConnection, QueryError } from 'mysql2';
import cors from 'cors';
import employeesRoutes from './routes/employees';


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use('/api/employees', employeesRoutes);

app.listen(port, () => { 
    console.log('server running on port ' + port );
});