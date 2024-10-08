import EmployeeDto from "../../../controllers/employees/entitees/dto/EmployeeDto";

class EmployeeAssemblerDB { 
    dto;
    constructor(dto: EmployeeDto[]) {
        this.dto = dto;
    }
    // Méthode pour formater les dates au format MySQL
    formatDateToMySQL(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Méthode pour formater les dates et heures au format MySQL
    formatDateTimeToMySQL(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    toDAO() {
        return {
            first_name: this.dto.FirstName,
            last_name: this.dto.LastName,
            department_id: this.dto.Department,  
            state_id: this.dto.State,            
            date_of_birth: this.formatDateTimeToMySQL(this.dto.DateOfBirth), 
            start_date: this.formatDateTimeToMySQL(this.dto.StartDate),     
            city: this.dto.City,
            street: this.dto.Street,
            zip_code: this.dto.ZipCode
        };
    }
    
}

export default EmployeeAssemblerDB;