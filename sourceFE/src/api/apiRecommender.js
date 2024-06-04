import axios from 'axios';
import axiosClient from './AxiosRecommentConfig';
const apiRecomment = {
    getRecomment: async (user_id) =>{
        let url = `/recommend?user_id=${user_id}`
        return  await axiosClient.get(url);
    },
    getNovelRecomment: async (novelId) =>{
        let url = `/recommend_based_on_novel?novel_id=${novelId}`
        return await axiosClient.get(url);
    }
    // searchNovelByTfIDF: async ()=>{
    //     let url = `search_novel`
    // }
}

export default apiRecomment;
