import { PoolConnection, QueryError} from "mysql2"
import { connection } from "../../database/db"
import User from "../entitees/dao/user"
import bcrypt from 'bcrypt';

export const postLogin = (data:User): Promise<User> => { 
    return new Promise((resolve, reject) => { 
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
            if (err) {
                return reject({ message: 'Error establishing connection', error: err });
            }

            const query = "SELECT * FROM users WHERE email = ?";
            conn.query(query, [data.email], async (error: QueryError | null, results: any[]) => {
                conn.release();
                if (error) {
                    return reject({ message: 'Error executing query', error });
                }

                if (results.length === 0) {
                    return reject({ message: 'email or password incorrect' });
                }
                const match = await bcrypt.compare(data.password, results[0].password);
                if (match) {
                    resolve(results[0]);  // Le mot de passe correspond
                } else {
                    return reject({ message: 'email or password incorrect' });
                }
            });
        });
    })
    
}