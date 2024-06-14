import axiosClientRecommender from './AxiosRecommentConfig';

const apiRecomment = {
    getRecomment: async (user_id) => {
        let url = `/recommend?user_id=${user_id}`;
        const response = await axiosClientRecommender.get(url);
        console.log('API Response (getRecomment):', response.data); // Log response data from API
        return response;
    },
    getNovelRecomment: async (novelId) => {
        let url = `/recommend_based_on_novel?novel_id=${novelId}`;
       // console.log('url list novel',url);
        const response = await axiosClientRecommender.get(url);
        console.log('API Response (getNovelRecomment):', response.data); // Log response data from API
        return response;
    },
};

export default apiRecomment;
