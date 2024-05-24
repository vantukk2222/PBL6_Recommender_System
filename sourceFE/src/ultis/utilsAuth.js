import apiAuth from "../api/apiAuth";


export const register = async (acc = {
    'username' : 'userT',
    'password' : 'P@ssword_123',
    'email' : 'username@gmail.com'
}) =>{
    const response = await apiAuth.register(acc);
    const user = response.data
    
    if(user.message){
        return result = {
            'message':user.message
        }
    }
    result = {
        "_id": user._id,
        "username": user.username,
        "name": user.name,
        "email": user.email,
        "role": {
            "_id":user.role._id,
            "name": user.role.name
        },
        "createdAt": user.createdAt,
        "updatedAt": user.updatedAt,
        "__v": user.__v
    }
    return data;
}
export const login = async(acc = {
    "username": "userT",
    "password": "P@ssword_123"
}) => {
    
    const response = await apiAuth.login(acc);
    console.log("response "+response.status);
    return response;
    // const res = response.data
    // if(res.message)
    // {
    //     return result= {
    //         'message': res.message
    //     }
    // }
    // return result = {
    //     "status": response.status,
    //     "accessToken" : res.accessToken
    // };
}