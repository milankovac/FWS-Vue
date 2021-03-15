import Axios from '../axios'
export default{
    getAllproduct(){
       return Axios.get('custom_product');
    }
}