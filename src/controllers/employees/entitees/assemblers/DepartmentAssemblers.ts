import Department from "../../../../repositories/employees/dao/department";

class DepartmentAssembler { 
    dao;
    constructor(dao: Department[]) {
        this.dao = dao;
    }
    toDto() {
        return this.dao.map(department => ({
            id: department.id,
            value: department.value,
            label: department.label
        }));
    }
}

export default DepartmentAssembler;