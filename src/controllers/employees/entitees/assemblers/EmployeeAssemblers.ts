import dayjs from "dayjs";
import Employee from "../../../../repositories/entitees/dao/employee";


class EmployeeAssembler { 
    dao;
    constructor(dao: Employee[] | Employee) {
        this.dao = dao;
    }
    toDto() {
        if (Array.isArray(this.dao)){
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
        return {
            id: this.dao.id,
            firstName: this.dao.first_name,
            lastName: this.dao.last_name,
            department: this.dao.department,
            state: this.dao.state,
            dateOfBirth: this.dao.date_of_birth,
            startDate: this.dao.start_date,
            zipCode: this.dao.zip_code,
            street: this.dao.street,
            city: this.dao.city,
            stateId: this.dao.state_id,
            departmentId: this.dao.department_id,
        };
    }
}

export default EmployeeAssembler;