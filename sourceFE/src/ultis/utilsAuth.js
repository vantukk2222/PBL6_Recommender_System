import apiAuth from "../api/apiAuth";
import { jwtDecode } from "jwt-decode";
export const utilsDecodeToken = (token) => {
    const decoded = jwtDecode(token);
    const expTimestamp = decoded.exp;
    const expDate = new Date(expTimestamp * 1000);
    const expFormatted = `${expDate.getHours()}:${expDate.getMinutes()} ${expDate.getDate()}/${expDate.getMonth() + 1
        }/${expDate.getFullYear()}`;
    decoded.exp = expFormatted;
    return decoded;
};

export const register = async (acc = {
    'username': 'user',
    'password': 'P@ssword_123',
    'name': 'Your name',
    'email': 'username@gmail.com'
}) => {
    const response = await apiAuth.register(acc);
    const user = response.data
    return response;

}
export const login = async (acc = {
    "username": "userT",
    "password": "P@ssword_123"
}) => {

    const response = await apiAuth.login(acc);
    return response;

}
export const RegisterValidate = (user) => {
    if (!user.username)
        return "Username is required !";
    if (!user.name)
        return "Name is required !";
    if (!user.email)
        return "Email is required !";
    if (!user.password)
        return "Password is required !";
    if (!user.Confirmpass)
        return "Confirm password is required !";
    if (user.password !== user.Confirmpass)
        return "Confirm password is not match";
}
export const AddAccountValidate = (acc) =>{
    if (!acc.username)
        return "Username is required !";
    if (!acc.name)
        return "Name is required !";
    if (!acc.email)
        return "Email is required !";
    if (!acc.password)
        return "Password is required !";
}