import { Request, Response } from "express";
import { getDepatmentsService, getStatesService } from "../../services/employees";
import DepartmentAssembler from "./entitees/assemblers/DepartmentAssemblers";
import StateAssembler from "./entitees/assemblers/StatesAssemblers";

export const getDepartments = async (req: Request, res: Response) => {
    try {
        const departments = await getDepatmentsService()
        return res.status(200).json(new DepartmentAssembler(departments).toDto())

    } catch (error) {
        return res.status(500).json({ message: 'Error getting departments' })
    }

}

export const getStates = async (req: Request, res: Response) => { 
    try {
        const states = await getStatesService()
        return res.status(200).json(new StateAssembler(states).toDto())

    } catch (error) {
        return res.status(500).json({ message: 'Error getting departments' })
    }
}