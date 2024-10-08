import { getDepartments, getEmployees, getStates, postEmployees } from "../repositories/employees/employeesRepository"

export const getDepartmentsService = async () => {
    return await getDepartments()
}

export const getStatesService = async () => {
    return await getStates()
}
export const getEmployeesService = async () => {
    return await getEmployees()
}

export const postEmployeesService = async (data) => {
    return await postEmployees(data)
}