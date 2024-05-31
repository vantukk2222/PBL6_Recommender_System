import { data } from "autoprefixer";
import apiAuthor from "../api/apiAuthor";

export const getAuthors = async (filter = {
    'page': 1,
    'pageSize': 20,
    'sortField': 'name',
    'sortOrder': 'desc'
}) => {
    const response = await apiAuthor.getAuthors(filter);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'authors': response.data.authors
    }
    return data;
}

export const getAuthor = async (id) => {
    const response = await apiAuthor.getAuthor(id);
    return response.data;
}
export const getAllAuthor = async ()=>{
    const response = await apiAuthor.getAllAuthor();
    return response;
}
export const updateAuthor = async (data) => {
    const response = await apiAuthor.updateAuthor(data);
    return response;
}
export const addAuthor = async (data) => {
    const response = await apiAuthor.addAuthor(data);
    return response;
}
export const deleteAuthor = async (id) => {
    const response = await apiAuthor.deleteAuthor(id);
    return response;
}