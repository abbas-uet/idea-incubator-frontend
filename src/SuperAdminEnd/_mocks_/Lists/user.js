// utils
import axios from 'axios';
// ----------------------------------------------------------------------

export const getUser=async()=>{
    const response=await axios.get('http://localhost:5000/users/view_users');
    console.log(response.data);
    return await response.data;
}