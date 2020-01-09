import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d74cf.firebaseio.com/'
});

export default instance;