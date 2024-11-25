import { Request, Response } from "express";
import { deleteEmployeesService, getDepartmentsService, getEmployeesService, getStatesService, putEmployeeService, postEmployeesService, getEmployeeService } from "../../services/employees";


export const getDepartments = async (req: Request, res: Response): Promise<Response> => {
    try {
        const departments = await getDepartmentsService()
        return res.status(200).json(departments)

    } catch (error) {
        return res.status(500).json({ message: 'Error getting departments' })
    }

}

export const getStates = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const states = await getStatesService()
        return res.status(200).json(states)

    } catch (error) {
        return res.status(500).json({ message: 'Error getting states' })
    }
}

export const getEmployees = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const employees = await getEmployeesService()
        return res.status(200).json(employees)

    } catch (error) {
        return res.status(500).json({ message: 'Error getting employees' })
    }
}
export const getEmployee = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const id = req.params.id;
        const employee = await getEmployeeService(id)
        return res.status(200).json(employee)

    } catch (error) {
        return res.status(500).json({ message: 'Error getting employee' })
    }
}

export const postEmployee = async (req: Request, res: Response): Promise<Response> => { 
    try {
        await postEmployeesService(req.body)
        return res.status(200).json({message : "Employee added successfully"})

    } catch (error) {
        return res.status(500).json({ message: 'Error posting employee' })
    }
}

export const deleteEmployee = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const employeeId = req.params.id;
        await deleteEmployeesService(employeeId)
        return res.status(200).json({message : "Employee delete successfully"})

    } catch (error) {
        return res.status(500).json({ message: 'Error delete employee' })
    }
}

export const putEmployee = async (req: Request, res: Response): Promise<Response> => { 
    try {
        const employeeId = req.params.id;
        await putEmployeeService(employeeId, req.body)
        return res.status(200).json({message : "Employee update successfully"})

    } catch (error) {
        return res.status(500).json({ message: 'Error update employee' })
    }
}