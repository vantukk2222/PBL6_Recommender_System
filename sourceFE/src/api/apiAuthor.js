import { getNovels } from "../ultis/utilsNovel";
import axiosClient from "./AxiosConfig";

const apiAuthor = {
    getAuthors :  () =>{
        let url  = `/author`
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