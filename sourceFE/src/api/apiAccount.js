import axiosClient from "./AxiosConfig";

const apiAccount = {
    
    addAccount : (data) => { 
        const url = `/account`; 
        return axiosClient.post(url, data)
    },
    getAccounts :  (filter) =>{
        let url  = `/account?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getAccount : (id) =>{
        const url = `/account/${id}`
        return axiosClient.get(url)
    },
    updateAccount : (data) =>{
        const url = `/account/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteAccount : (id) =>{
        const url = `/account/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiAccount;