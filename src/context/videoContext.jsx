import { createContext, useState, useEffect } from "react";
import { categories } from "../constants";
import api from "../utils/api"

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { type, name } = selectedCategory;
        setIsLoading(true);

        if (type === 'menu') return;

        const url = type === 'home' ? '/home' : type === 'trending' ? '/trending' : type === 'category' ? `/search?query=${name}` : '';

        api.get(url).then((response) => {
            setVideos(response.data.data);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });

    }, [selectedCategory]);

    return (
        <VideoContext.Provider value={{ selectedCategory, setSelectedCategory, videos, isLoading, error }}>
            {children}
        </VideoContext.Provider>
    );
};