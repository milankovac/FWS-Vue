import Axios from '../axios'
export default{
    getAllproduct(){
       return Axios.get('wp/v2/custom_product');
    }
}