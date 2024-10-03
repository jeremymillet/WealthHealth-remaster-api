import { PoolConnection, QueryError} from "mysql2"
import { connection } from "../../database/db"
import Department from "./dao/department"
import State from "./dao/state"
import Employee from "./dao/employee"

export const getDepatments = ():Promise<Department[]> => { 
    return new Promise((resolve, reject) => {
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        conn.query("SELECT * FROM departments", (error: QueryError | null, result: Department[]) => {
            conn.release()
            if (err || error) {
                reject({message: 'error'})
            }
            else {
                resolve(result)
            }
        })
    })
     })
    
}

export const getStates = ():Promise<State[]> => { 
    return new Promise((resolve, reject) => { 
    connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        conn.query("SELECT * FROM states", (error:QueryError | null, result: any[]) => {
            conn.release()
            if (err || error) {
                reject({message: 'error'})
            }
            else {
                resolve(result)
            }
        })
    })
    })
    
}

export const getEmployees = ():Promise<Employee[]> => { 
    return new Promise((resolve, reject) => { 
    connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        conn.query("SELECT * FROM employees", (error:QueryError | null, result: any[]) => {
            conn.release()
            if (err || error) {
                reject({message: 'error'})
            }
            else {
                resolve(result)
            }
        })
    })
    })
    
}