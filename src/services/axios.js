import Axios from 'axios'

const axios =Axios.create({
    baseURL:'http://localhost/milan_kovace_forwardslash_fe_test/wp-json/wp/v2/'
});
axios.interceptors.response.use(response=>{
return response;
});

export default axios;