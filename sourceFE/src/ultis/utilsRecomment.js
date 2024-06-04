import apiRecomment from "../api/apiRecommender";

export const getRecomment = async (id) => {
    const response = await apiRecomment.getRecomment(id);
    console.log(response);
    return response;
}

