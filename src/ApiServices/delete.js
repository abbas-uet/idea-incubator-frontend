import axios from 'axios';


//Deleting All the Data from a Table
export const deleteAll=async(tableName)=>{
    return await axios.delete("http://localhost:5000/" + tableName + "s/delete_all");
}

export const deleteSingle=async(tableName,id)=>{
    return await axios.delete("http://localhost:5000/" + tableName + "s/delete_"+tableName+"/"+id);
}

export const deleteJointTableSingle=async(tableName1,tableName2,values)=>{
    return await axios.delete("http://localhost:5000/" + tableName1 + "_" +tableName2+ "s/delete_"+tableName1+"_"+tableName2,{ data: { values } });
}