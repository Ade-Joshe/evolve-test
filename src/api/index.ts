import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/'
});

export default api;