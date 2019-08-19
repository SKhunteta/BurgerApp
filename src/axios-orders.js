import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-ad340.firebaseio.com/'
});

export default instance;