import axiosClient from "./AxiosConfig";

const apiComment = {
    
    addComment : (data) => { 
        const url = `/comment`; 
        return axiosClient.post(url, data)
    },
    getComments :  (filter) =>{
        let url  = `/comment?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getComment : (id) =>{
        const url = `/comment/${id}`
        return axiosClient.get(url)
    },
    updateComment : (data) =>{
        const url = `/comment/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteComment : (id) =>{
        const url = `/comment/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiComment;