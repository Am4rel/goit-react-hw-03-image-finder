import axios from 'axios';

const API_KEY = "21313402-781cc09b241e8b58cb3e12855";


export default function FetchApi (query, page) {
    return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits)
}