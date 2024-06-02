import axiosClient from "./AxiosConfig";

const apiHistory = {

    addHistory: (data) => {
        const url = `/history`;
        return axiosClient.post(url, data)
    },
    getHistorys: (account_ID, filter) => {
        let url = `/history?accountId=${account_ID}&page=${filter.page}&pageSize=${filter.pageSize}`
        // console.log('url',url)
        return axiosClient.get(url)
    },
    getHistory: (id) => {
        const url = `/history/${id}?pageSize=20&sortField=updatedAt&sortOrder=desc`
        return axiosClient.get(url)
    },
    updateHistory: (data) => {
        const url = `/history/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteHistory: (id) => {
        const url = `/history/${id}`;
        return axiosClient.delete(url);
    },
    deleteHistoriesByAccount: (id_account) => {
        const url = `/history/account/${id_account}`;
        return axiosClient.delete(url);
    }


}
export default apiHistory;