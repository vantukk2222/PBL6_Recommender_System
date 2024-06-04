import axiosClient from "./AxiosConfig";

const apiCategory = {

    addCategory: (data) => {
        const url = `/category`;
        return axiosClient.post(url, data)
    },
    getCategories: () => {
        let url = `/category`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getCategoriesbyFilter: (filter) => {
        let url = `/category?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}`
        if (filter.search)
            url +=
                `&search=${filter.search}`
        return axiosClient.get(url)
    },
    getAllCategory: () => {
        let url = `/category?page=1&pageSize=10000&sortField=name&sortOrder=desc`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getCategory: (id) => {
        const url = `/category/${id}`
        return axiosClient.get(url)
    },
    updateCategory: (data) => {
        const url = `/category/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteCategory: (id) => {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiCategory;