import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    headers: {
        'headerType': 'example header type'
    }
});

export default instance;