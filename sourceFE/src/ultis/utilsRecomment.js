import apiRecomment from "../api/apiRecommender";

export const getRecomment = async (id) => {
    const response = await apiRecomment.getRecomment(id);
    console.log("getRecomment Response:", response.data); // Log full response data
    return response;
};

export const getNovelRecomment = async (id) => {
    const response = await apiRecomment.getNovelRecomment(id);
    console.log("getNovelRecomment Response:", response.data); // Log full response data
    return response;
};
