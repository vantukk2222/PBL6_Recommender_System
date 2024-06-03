import axiosClient from "./AxiosConfig";

const apiComment = {

    addComment: async (data) => {
        const url = '/comment';
        console.log("data: ", data);
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            if (error.response) {
                return {
                    status: error.response.status,
                    message: error.response.data.message || 'An error occurred',
                };
            } else if (error.request) {
                return {
                    status: 500,
                    message: 'No response from server',
                };
            } else {
                return {
                    status: 500,
                    message: error.message,
                };
            }
        }
    },
    getComments: (filter) => {
        let url = ''
        if (!filter.novelId) url = `/comment?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}&accountId=${filter.accountId}`
        if (!filter.accountId) { url = `/comment?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}&novelId=${filter.novelId}` }
        if (filter.accountId && filter.novelId) {
            url = `/comment?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}&novelId=${filter.novelId}&accountId=${filter.accountId}`
            console.log("url: ", url);
        }
        // let url = `/comment?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}&novelId=${filter.novelId}&accountId=${filter.accountId}`
        return axiosClient.get(url)
    },
    getComment: (id) => {
        const url = `/comment/${id}`
        return axiosClient.get(url)
    },
    updateComment: (data) => {
        const url = `/comment/${data.id}`
        return axiosClient.put(url, data)
    },
    deleteComment: (id) => {
        const url = `/comment/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiComment;