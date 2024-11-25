import UserAssemblerDB from "../repositories/entitees/assemblers/UserAssembler";
import { postLogin, postLogOut, verifyAndGenerateAccessToken } from "../repositories/users/usersRepository"

export const postLoginService = async (data) => {
    const userDB = new UserAssemblerDB(data).toDAO();
    return await postLogin(userDB)
}
export const postTokenService = async (data) => { 
    return await verifyAndGenerateAccessToken(data)
}
export const postLogOutService = async (data) => { 
    return await postLogOut(data)
}