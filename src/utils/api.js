import axios from "axios";

const api = axios.create({
    baseURL: "https://yt-api.p.rapidapi.com",
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_HOST
    }

});

export default api;