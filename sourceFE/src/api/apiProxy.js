export const proxyUrl = (url) => {
    return `http://localhost:3001/proxy-image?url=${encodeURIComponent(url)}`
};