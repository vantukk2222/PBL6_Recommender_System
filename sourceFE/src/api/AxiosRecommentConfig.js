import axios from 'axios';

const axiosClientRecommender = axios.create({
    baseURL:'https://4fd8-2405-4802-6044-910-c44c-f18b-1c21-fd45.ngrok-free.app',
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
