import { deleteEmployees, getDepartments, getEmployees, getStates, putEmployees, postEmployees, getEmployee } from "../repositories/employees/employeesRepository"

export const getDepartmentsService = async () => {
    return await getDepartments()
}

export const getStatesService = async () => {
    return await getStates()
}
export const getEmployeesService = async () => {
    return await getEmployees()
}
export const getEmployeeService = async (id) => {
    return await getEmployee(id)
}

export const postEmployeesService = async (data) => {
    return await postEmployees(data)
}

export const deleteEmployeesService = async (data) => {
    return await deleteEmployees(data)
}
export const putEmployeeService = async (id,data,) => { 
    return await putEmployees(data,id)
}