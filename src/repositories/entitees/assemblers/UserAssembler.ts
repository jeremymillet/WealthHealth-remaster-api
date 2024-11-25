import User from "../dao/user";

class UserAssemblerDB { 
    dto;
    constructor(dto: User[]) {
        this.dto = dto;
    }
    toDAO() {
        return {
            user_id: this.dto.user_id,
            email: this.dto.Email,
            password: this.dto.Password,
            refreshToken: this.dto.RefreshToken,
        };
    }
    
}

export default UserAssemblerDB;