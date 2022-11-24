import axios from 'axios';
 
const aToken = (token) => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = 'Bearer ${token}'
       return true
   }else {
        return false
   }
}
export default aToken;