import Axios from '../axios'
export default{
    makeOrder(order,total){
        const user=localStorage.getItem('currentuser');
       return Axios.post('wp/v2/make_order',{"order":order,"total":total,"id":user});
    }
}