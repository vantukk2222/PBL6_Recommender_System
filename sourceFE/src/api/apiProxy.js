import axiosClient from "./AxiosConfig";

export const proxyUrl = (url) => {
    // return axiosClient.get(`/proxy-image?url=${encodeURIComponent(url)}`)
    return `https://project-pbl7.vercel.app/proxy-image?url=${encodeURIComponent(url)}`

};