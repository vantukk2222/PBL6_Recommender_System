import axiosClient from "./AxiosConfig";

const apiAuthor = {
    getAuthors :  (filter) =>{
        let url  = `/author?page=${filter.page}
        &pageSize=${filter.pageSize}
        &sortField=${filter.sortField}
        &sortOrder=${filter.sortOrder}`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getAuthor : (id) =>{
        const url = `/author/${id}`
        return axiosClient.get(url)
    },
    updateAuthor : (data) =>{
        const url = `/author/${data.id}`
        return axiosClient.put(url, data)
    },
    addAuthor : (data) => { 
        const url = `/author/`; 
        return axiosClient.post(url, data)
    },
    deleteAuthor : (id) =>{
        const url = `/author/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiAuthor;