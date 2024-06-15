import axios from 'axios';

const axiosClientRecommender = axios.create({
    baseURL: 'https://88bf-2401-d800-76fd-407a-d502-4615-d82b-699e.ngrok-free.app',
    //  'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "ngrok-skip-browser-warning": "any",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    },
});


axiosClientRecommender.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = '*/*';

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
