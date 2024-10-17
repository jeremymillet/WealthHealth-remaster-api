import dayjs from "dayjs";
import Employee from "../../../../repositories/entitees/dao/employee";


class EmployeeAssembler { 
    dao;
    constructor(dao: Employee[]) {
        this.dao = dao;
    }
    toDto() {
        return this.dao.map(employee => ({
            id: employee.id,
            firstName: employee.first_name,
            lastName: employee.last_name,
            department: employee.department,
            state: employee.state,
            dateOfBirth: employee.date_of_birth,
            startDate: employee.start_date,
            zipCode: employee.zip_code,
            street: employee.street,
            city: employee.city,
            stateId: employee.state_id,
            departmentId: employee.department_id,
        }));
    }
}

export default EmployeeAssembler;