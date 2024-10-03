import { getDepatments, getStates } from "../repositories/employees/employeesRepository"

export const getDepatmentsService = async () => {
    return await getDepatments()
}

export const getStatesService = async () => {
    return await getStates()
}