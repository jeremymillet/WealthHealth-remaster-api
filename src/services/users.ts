import { postLogin } from "../repositories/users/usersRepository"

export const postLoginService = async (data) => {
    return await postLogin(data)
}