
import Department from "../entitees/dao/department"
import State from "../entitees/dao/state"
import Employee from "../entitees/dao/employee"
import db from '../../database/db'


export const getDepartments = async (): Promise<Department[]> => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM departments"; // Requête SQL
        db.all(query, (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des départements :', err);
                reject(new Error('Impossible de récupérer les départements.'));
            } else {
                resolve(rows as Department[]);
            }
        });
    });
};
export const getStates = async (): Promise<State[]> => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM states"; // Requête SQL pour récupérer les états
        db.all(query, (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des états :', err);
                reject(new Error('Impossible de récupérer les états.'));
            } else {
                resolve(rows as State[]);
            }
        });
    });
};
export const getEmployees = async (): Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
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
        db.all(query, (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des employés :', err);
                reject(new Error('Impossible de récupérer les employés.'));
            } else {
                resolve(rows as Employee[]);
            }
        });
    });
};
export const getEmployee = async (id: number): Promise<Employee | null> => {
    return new Promise((resolve, reject) => {
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
        db.get(query, id, (err, row) => {
            if (err) {
                console.error('Erreur lors de la récupération de l\'employé :', err);
                reject(new Error('Impossible de récupérer l\'employé.'));
            } else {
                resolve(row as Employee || null);
            }
        });
    });
};

export const postEmployees = async (data: Employee): Promise<void> => {
    return new Promise((resolve, reject) => {
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
            data.department_id,
            data.state_id,
            data.date_of_birth,
            data.start_date,
            data.city,
            data.street,
            data.zip_code,
        ];

        db.run(sql, values, (err) => {
            if (err) {
                console.error('Erreur lors de l\'ajout de l\'employé :', err);
                reject(new Error('Impossible d\'ajouter l\'employé.'));
            } else {
                resolve();
            }
        });
    });
};

export const deleteEmployees = async (id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM employees WHERE id = ?";
        db.run(query, id, (err) => {
            if (err) {
                console.error('Erreur lors de la suppression de l\'employé :', err);
                reject(new Error('Impossible de supprimer l\'employé.'));
            } else {
                resolve();
            }
        });
    });
};
export const putEmployees = async (data: Employee, id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE employees
            SET 
                first_name = ?, 
                last_name = ?, 
                department_id = ?, 
                state_id = ?, 
                date_of_birth = ?, 
                start_date = ?, 
                city = ?, 
                zip_code = ?, 
                street = ?
            WHERE id = ?
        `;
        const values = [
            data.first_Name,
            data.last_Name,
            data.department_id,
            data.state_id,
            data.date_of_birth,
            data.start_date,
            data.city,
            data.zip_code,
            data.street,
            id,
        ];

        db.run(query, values, (err) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de l\'employé :', err);
                reject(new Error('Impossible de mettre à jour l\'employé.'));
            } else {
                resolve();
            }
        });
    });
};
