import axiosClient from "./AxiosConfig";

const apiAccount = {

    addAccount: (data) => {
        const url = `/account`;
        return axiosClient.post(url, data)
    },
    getAccounts: (filter) => {
        let url = `/account?page=${filter.page}
        &pageSize=${filter.pageSize}
        &sortField=${filter.sortField}
        &sortOrder=${filter.sortOrder}
        &search=${filter.search}`
        console.log('url',url)
        return axiosClient.get(url)
    },
    getAccount: (id) => {
        const url = `/account/${id}`
        return axiosClient.get(url)
    },
    updateAccount: (data) => {
        const url = `/account/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteAccount: (id) => {
        const url = `/account/${id}`;
        return axiosClient.delete(url);
    },
    addToFavorite: (id_account, id_novel) => {
        const url = `account/${id_account}/like/${id_novel}`;
        return axiosClient.post(url);
    },


}
export default apiAccount;