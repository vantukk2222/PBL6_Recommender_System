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