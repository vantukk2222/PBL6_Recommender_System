import apiCategory from "../api/apiCategory";


export const getCategories = async () => {

    const response = await apiCategory.getCategories();
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'categories': response.data.categories
    }

    return data;
}
export const getCategoriesByFilter = async (filter = {
    'page': 1,
    'pageSize': 50,
    'sortField': 'name',
    'sortOrder': 'desc'
}) => {

    const response = await apiCategory.getCategoriesbyFilter(filter);
    const data = {
        'page': {
            'currentPage': response.data.currentPage,
            'totalPages': response.data.totalPages,
        },
        'categories': response.data.categories
    }

    return data;
}



export const getCategory = async (id) => {
    if (id == null)
        return 'Id can not null';
    const response = await apiCategory.getCategory(id);
    return response.data;
}
export const getallCategory = async () => {
    const response = await apiCategory.getAllCategory();
    return response;
}
export const updateCategory = async (data) => {
    if (data.id == null)
        return 'Id can not null';
    const response = await apiCategory.updateCategory(data);
    return response;
}
export const addCategory = async (data) => {
    const response = await apiCategory.addCategory(data);
    return response;
}
export const deleteCategory = async (id) => {
    const response = await apiCategory.deleteCategory(id);
    return response;
}