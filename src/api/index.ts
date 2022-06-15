import axios from 'axios';

const api = axios.create({
    baseURL: `https://${process.env.REACT_APP_ENTERPRISE_TOKEN}.${process.env.REACT_APP_BASE_URL}`
});

export default api;