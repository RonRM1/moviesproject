import axios from "axios";
import { enviroment } from "../_enviroments/enviromet";

const AuthService = {};

const authApiUrl = enviroment.BASE_API_URL + '/auth';

AuthService.login = async (credentials) =>{
    return await axios.post (authApiUrl + '/login', {
        email: credentials.email,
        password: credentials.password,
    });
};

AuthService.register = async(user) => {
    return
}