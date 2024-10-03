import express, { Request, Response } from 'express';
import { connection } from './database/db';
import { PoolConnection, QueryError } from 'mysql2';
import cors from 'cors';
import employeesRoutes from './routes/employees';


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use('/api/employees', employeesRoutes);




app.get('/employees', (req: Request, res: Response) => { 
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
        conn.query("SELECT * FROM employees", (error, result: any[]) => {
            conn.release()
            if (err || error) {
                res.status(500).send({message:'error'})
            }
            else {
                res.status(200).send(result)
            }
        })
    })
})

app.listen(port, () => { 
    console.log('server running on port ' + port );
});