import axiosClient from "./AxiosConfig";

const apiAuth = {
    register :  (acc) =>{
        let url  = `/auth/register`
        // console.log('url',url)
        return axiosClient.post(url,acc)
    },
    login :  (acc) =>{
        let url  = `/auth/login`
        // console.log('url',url)
        return axiosClient.post(url,acc)
    }


}
export default apiAuth;