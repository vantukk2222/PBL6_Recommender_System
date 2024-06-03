import axios from 'axios';

export const NovelRecommender = async (id_novel) => {
    let url = `http://localhost:5000/recommend?user_id=${id_novel}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}