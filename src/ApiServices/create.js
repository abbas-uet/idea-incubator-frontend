import axios from 'axios';

export const Create=async (tableName,values)=>{
    return await axios.post("http://localhost:5000/" + tableName + "s/create_" + tableName, values)
}