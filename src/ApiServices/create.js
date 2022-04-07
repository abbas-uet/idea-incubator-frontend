import axios from 'axios';

export const Create=async (tableName,values)=>{
    return await axios.post("http://localhost:5000/" + tableName + "s/create_" + tableName, values)
}


export const CreateJointTable=async (tableName1,tableName2,values)=>{
    return await axios.post("http://localhost:5000/" + tableName1+"_"+ tableName2+ "s/create_" + tableName1+"_"+tableName2, values)
}