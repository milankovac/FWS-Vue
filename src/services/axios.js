import Axios from 'axios'

const axios =Axios.create({
    baseURL:'http://localhost/milan_kovace_forwardslash_fe_test/wp-json/',
   
});

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.authorization  = `Bearer ${token}`;
    }

    return config;
});

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Check if expired token error and remove token from localStorage
        console.log(error);
    }
);

export default axios;