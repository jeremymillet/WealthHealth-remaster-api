import { PoolConnection, QueryError} from "mysql2"
import { connection } from "../../database/db"
import Department from "../entitees/dao/department"
import State from "../entitees/dao/state"
import Employee from "../entitees/dao/employee"

export const getDepartments = ():Promise<Department[]> => { 
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
         const query = `
                SELECT 
                    e.id,
                    e.first_name,
                    e.last_name,
                    e.date_of_birth,
                    e.start_date,
                    e.street,
                    e.city,
                    s.label AS state,
                    e.zip_code,
                    d.label AS department,
                    d.id AS department_id,
                    s.id AS state_id
                FROM 
                    employees e
                JOIN 
                    states s ON e.state_id = s.id
                JOIN 
                    departments d ON e.department_id = d.id
            `;
        conn.query(query, (error:QueryError | null, result: any[]) => {
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
export const getEmployee = (id:number):Promise<Employee[]> => { 
    return new Promise((resolve, reject) => { 
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        const query = `
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                e.date_of_birth,
                e.start_date,
                e.street,
                e.city,
                s.label AS state,
                e.zip_code,
                d.label AS department,
                d.id AS department_id,
                s.id AS state_id
            FROM 
                employees e
            JOIN 
                states s ON e.state_id = s.id
            JOIN 
                departments d ON e.department_id = d.id
            WHERE e.id = ?
        `;
        conn.query(query,id,(error:QueryError | null, result: any[]) => {
            conn.release()
            if (err || error) {
                reject({ message: 'error' })
            }
            else {
                resolve(result)
            }
        })
    })
    })
    
}


export const postEmployees = (data:Employee): Promise<Employee[]> => { 
    return new Promise((resolve, reject) => { 
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
         const sql = `
                INSERT INTO employees (
                    first_name,
                    last_name,
                    department_id,
                    state_id,
                    date_of_birth,
                    start_date,
                    city,
                    street,
                    zip_code
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                data.first_Name,
                data.last_Name,
                data.department,
                data.state,
                data.date_of_birth,
                data.start_date,
                data.city,
                data.street,
                data.zip_code
            ];
             console.log("Values being inserted:", values)
        conn.query(sql, values,(error:QueryError | null, result: any) => {
            conn.release()
            if (error || err) {
                console.log(error)
                return reject({ message: 'Error executing query', error });
            }
            else {
                resolve(result);
                console.log("Employee added successfully, result:", result);
            }
        })
    })
    })
    
}

export const deleteEmployees = (data:number): Promise<State[]> => { 
    return new Promise((resolve, reject) => { 
    connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        conn.query("DELETE from Employees WHERE id = ?",data,(error:QueryError | null, result: any[]) => {
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
export const putEmployees = (data:Employee,id:number): Promise<State[]> => { 
    console.log(data)
    return new Promise((resolve, reject) => { 
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
            const query = "UPDATE Employees SET first_name = ?, last_name = ?, department_id = ?, state_id = ?, date_of_birth = ?, start_date = ?, city = ?, zip_code = ?, street = ? WHERE id = ?";
            const values = [data.first_Name, data.last_Name, data.department, data.state, data.date_of_birth, data.start_date, data.city, data.zip_code, data.street, id];
        conn.query(query, values, (error:QueryError | null, result: any[]) => {
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

