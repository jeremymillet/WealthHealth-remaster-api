import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getDepartmentsService, getEmployeesService, getStatesService, postEmployeesService } from "../../services/employees";
import DepartmentAssembler from "./entitees/assemblers/DepartmentAssemblers";
import StateAssembler from "./entitees/assemblers/StatesAssemblers";
import EmployeeAssembler from "./entitees/assemblers/EmployeeAssemblers";
import EmployeeAssemblerDB from "../../repositories/entitees/assemblers/EmployeeAssemblers";

export const getDepartments = async (req: Request, res: Response): Promise<Response> => {
    try {
        const departments = await getDepartmentsService()
        return res.status(200).json(new DepartmentAssembler(departments).toDto())

    } catch (error) {
        return res.status(500).json({ message: 'Error getting departments' })
    }

}

export const getStates = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const states = await getStatesService()
        return res.status(200).json(new StateAssembler(states).toDto())

    } catch (error) {
        return res.status(500).json({ message: 'Error getting states' })
    }
}

export const getEmployees = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const employees = await getEmployeesService()
        return res.status(200).json(new EmployeeAssembler(employees).toDto())

    } catch (error) {
        return res.status(500).json({ message: 'Error getting employees' })
    }
}

export const postEmployee = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const employee = req.body
        const employeeDB = new EmployeeAssemblerDB(employee).toDAO()
        await postEmployeesService(employeeDB)
        return res.status(200).json({message : "Employee added successfully"})

    } catch (error) {
        return res.status(500).json({ message: 'Error posting employee' })
    }
}