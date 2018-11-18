import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2b0a6.firebaseio.com/'
});

export default instance;