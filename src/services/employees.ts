import DepartmentAssembler from "../controllers/employees/entitees/assemblers/DepartmentAssemblers"
import EmployeeAssembler from "../controllers/employees/entitees/assemblers/EmployeeAssemblers"
import StateAssembler from "../controllers/employees/entitees/assemblers/StatesAssemblers"
import EmployeeDto from "../controllers/employees/entitees/dto/EmployeeDto"
import { deleteEmployees, getDepartments, getEmployees, getStates, putEmployees, postEmployees, getEmployee} from "../repositories/employees/employeesRepository"
import EmployeeAssemblerDB from "../repositories/entitees/assemblers/EmployeeAssemblers"

export const getDepartmentsService = async () => {
    const departments = await getDepartments()
    return new DepartmentAssembler(departments).toDto()
}

export const getStatesService = async () => {
    const states = await getStates()
    return new StateAssembler(states).toDto()
}
export const getEmployeesService = async () => {
    const employees = await getEmployees()
    return new EmployeeAssembler(employees).toDto()
}
export const getEmployeeService = async (id) => {
    const employee = await getEmployee(id)
    if(employee === null ){return null}
    return new EmployeeAssembler(employee).toDto()
}

export const postEmployeesService = async (data : EmployeeDto) => {
    const employeeDB = new EmployeeAssemblerDB(data).toDAO()
    return await postEmployees(employeeDB)
}

export const deleteEmployeesService = async (data: number) => {
    return await deleteEmployees(data)
}
export const putEmployeeService = async (id :number, data:EmployeeDto,) => { 
    const employeeDB = new EmployeeAssemblerDB(data).toDAO()
    return await putEmployees(employeeDB,id)
}