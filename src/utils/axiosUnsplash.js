import axios from "axios";

const axiosUnsplash = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`,
    },
});

export default axiosUnsplash;