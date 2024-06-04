import { data } from "autoprefixer";
import apiNovel from "../api/apiNovel";

export const getNovels = async (filter = {
    'page': 1,
    'pageSize': 10,
    'sortField': 'views',
    'sortOrder': 'desc'
}) => {

    const response = await apiNovel.getNovels(filter);
    console.log("search response: ", response);
    const data = {
        'page': {
            'total': response.data.total,
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'novels': response.data.novels
    }

    return data;
}
export const getNovelsByCategoryID = async (filter = {
    'page': 1,
    'pageSize': 10,
    'sortField': 'views',
    'sortOrder': 'desc',
}) => {

    const response = await apiNovel.getNovelsByCateID(filter);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'novels': response.data.novels
    }

    return data;
}

export const getNovel = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiNovel.getNovel(id);
    return response.data;
}
export const getNovelbyListId = async(list=[]) =>{
    const listId = list.map((val)=>val['novel_id'])
    console.log('listId', listId);
    const response = await apiNovel.getNovelbyListId(list)
    return response;
}

export const updateNovel = async (data) => {
    if (data.id == null)
        return 'Id can not null';
    const response = await apiNovel.updateNovel(data);
    return response;
}
export const addNovel = async (data) => {
    const response = await apiNovel.addNovel(data);
    return response;
}
export const deleteNovel = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiNovel.deleteNovel(id);
    return response;
}