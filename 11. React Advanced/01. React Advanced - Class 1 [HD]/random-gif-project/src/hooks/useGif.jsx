import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const useGif = (tag) => {
    const [gif, setGif] = useState();
    const [loading, setLoading] = useState('false');
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData() {
        setLoading(true);
        const response = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        // const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // console.log(response);
        const imageSource = response.data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData };
}
