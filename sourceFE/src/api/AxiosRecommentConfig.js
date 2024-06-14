import axios from 'axios';

const axiosClientRecommender = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});


axiosClientRecommender.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = '*/*';

        console.log("API Response in axiosRecommender: ", config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClientRecommender.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error)
    }
);

export const setHeaderConfigAxios = (token) => {
    if (token) {
        axiosClientRecommender.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
    } else {
        delete axiosClientRecommender.defaults.headers.common['Authorization'];
    }
};

export default axiosClientRecommender;
