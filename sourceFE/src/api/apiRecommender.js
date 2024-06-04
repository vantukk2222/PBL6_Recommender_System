import axios from 'axios';
import axiosClient from './AxiosRecommentConfig';
const apiRecomment = {
    getRecomment: async (user_id) =>{
        let url = `/recommend?user_id=${user_id}`
        return  await axiosClient.get(url);
    },
}

export default apiRecomment;
