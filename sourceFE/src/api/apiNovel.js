import { getNovels } from "../ultis/utilsNovel";
import axiosClient from "./AxiosConfig";

const apiNovel = {
    getNovels: (filter) => {
        let url = `/novel?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}`
        return axiosClient.get(url)
    },
    getNovelsByCateID: (filter) => {

        let url_withID = `/novel?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}&categoryId=${filter.categoryId}`
        let url_withoutID = `/novel?page=${filter.page}&pageSize=${filter.pageSize}&sortField=${filter.sortField}&sortOrder=${filter.sortOrder}`
        let url = filter.categoryId != 0 ? url_withID : url_withoutID
        console.log("url: ", url);
        return axiosClient.get(url)
    },
    getNovel: (id) => {
        const url = `/novel/${id}`
        return axiosClient.get(url)
    },
    updateNovel: (data) => {
        const url = `/novel/${data.id}`
        return axiosClient.put(url, data)
    },
    addNovel: (data) => {
        const url = `/novel`;
        return axiosClient.post(url, data)
    },
    deleteNovel: (id) => {
        const url = `/novel/${id}`;
        return axiosClient.delete(url);
    }


}
export default apiNovel;