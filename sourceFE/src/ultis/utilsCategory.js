import apiCategory from "../api/apiCategory";


export const getCategories = async (filter = {
    'page' : 1,
    'pageSize' : 4,
    'sortField' : 'name',
    'sortOrder':'desc'
}) =>{
    
    const response = await apiCategory.getCategories(filter);
    const data = {
        'page' : {  
            'currentPage' : response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'categories' : response.data.categories
    }
    
    return data;
}

export const getCategory = async (id) => {
    if(id == null)
        return 'Id can not null';
    const response = await apiCategory.getCategory(id);
    return response.data;
}
export const updateCategory = async(data ) =>{
    if(id == null)
        return 'Id can not null';
    const response = await apiCategory.updateCategory(data);
    return response;
}
export const addCategory = async(data) => {
    const response = await apiCategory.addCategory(data);
    return response;
}
export const deleteCategory = async (id) => {
    if(id == null)
        return 'Id can not null';
    const response = await apiCategory.deleteCategory(id);
    return response;
}