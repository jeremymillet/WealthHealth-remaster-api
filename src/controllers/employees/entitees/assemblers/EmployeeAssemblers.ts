import Employee from "../../../../repositories/employees/dao/employee";

class EmployeeAssembler { 
    dao;
    constructor(dao: Employee[]) {
        this.dao = dao;
    }
    toDto() {
        return this.dao.map(employee => ({
            id: employee.id,
            firstName: employee.first_Name,
            lastName: employee.last_Name,
            department: employee.department,
            state: employee.state,
            dateOfBirth: employee.date_of_birth,
            startDate: employee.start_date,
            zipCode: employee.zip_code,
            street: employee.street,
            city: employee.city,
        }));
    }
}

export default EmployeeAssembler;