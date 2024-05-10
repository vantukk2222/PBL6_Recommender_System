import { data } from "autoprefixer";
import apiAuthor from "../api/apiAuthor";

export const getAuthors = async () =>{
    const response = await apiAuthor.getAuthors();
    const data = {
        'page' : {  
            'currentPage' : response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'authors' : response.data.authors
    }
    return data;
}

export const getAuthor = async (id) => {
    if(id == null)
        return 'Id can not null';
    const response = await apiAuthor.getAuthor(id);
    return response.data;
}
export const updateAuthor = async(data ) =>{
    if(id == null)
        return 'Id can not null';
    const response = await apiAuthor.updateAuthor(data);
    return response;
}
export const addAuthor = async(data) => {
    const response = await apiAuthor.addAuthor(data);
    return response;
}
export const deleteAuthor = async (id) => {
    if(id == null)
        return 'Id can not null';
    const response = await apiAuthor.deleteAuthor(id);
    return response;
}