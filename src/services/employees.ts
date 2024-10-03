import { getDepatments, getEmployees, getStates } from "../repositories/employees/employeesRepository"

export const getDepatmentsService = async () => {
    return await getDepatments()
}

export const getStatesService = async () => {
    return await getStates()
}
export const getEmployeesService = async () => {
    return await getEmployees()
}