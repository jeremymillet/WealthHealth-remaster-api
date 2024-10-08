import User from "../dao/user";

class UserAssemblerDB { 
    dto;
    constructor(dto: User[]) {
        this.dto = dto;
    }
    toDAO() {
        return {
            email: this.dto.Email,
            password : this.dto.Password,
        };
    }
    
}

export default UserAssemblerDB;