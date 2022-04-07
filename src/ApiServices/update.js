import axios from 'axios';

export const UpdateSingleTableData=async (tableName,id,values)=>{
    return await axios.put("http://localhost:5000/" + tableName + "s/update_" + tableName+'/'+id, values)
}


export const UpdateJointTable=async (tableName1,tableName2,id,values)=>{
    return await axios.post("http://localhost:5000/" + tableName1+"_"+ tableName2+ "s/create_" + tableName1+"_"+tableName2, values)
}