import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9b535.firebaseio.com/'
})


export default instance;