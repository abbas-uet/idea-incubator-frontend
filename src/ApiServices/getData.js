import axios from 'axios';

export const getTableData=async (tableName)=>{
    return await axios.get("http://localhost:5000/" + tableName + "s/view_" + tableName+'s')
}

export const getTableSingle=async (tableName,id)=>{
    return await axios.get("http://localhost:5000/"+tableName+"s/view_" + tableName + "/" + id)
}

export const getTwoTableAll = async (tableName1,tableName2) => {
    return await axios.get("http://localhost:5000/"+tableName1+"s/get_all_" + tableName1 + "_" + tableName2+"s")
}
export const getTwoTableSingle = async (tableName1,tableName2,id) => {
    return await axios.get("http://localhost:5000/"+tableName1+"s/view_" + tableName1 + "_" + tableName2+"s/"+id)
}
//Get Last id of the table
export const getLastId = async (tableName) => {
    return await axios.get("http://localhost:5000/"+tableName+"s/getLastId")
}


export const getTableAtrributes=async(tableName,attribute)=>{
    return await axios.get("http://localhost:5000/"+tableName+"s/get_"+tableName+"_"+attribute);
}


export const getThreeTableLimit=async(tableName1,tableName2,tableName3)=>{
    return await axios.get("http://localhost:5000/"+tableName1+"s/get_all_"+tableName1+"_"+tableName2+"s_"+tableName3+"s_limit");
}

export const getThreeTableAll=async(tableName1,tableName2,tableName3)=>{
    return await axios.get("http://localhost:5000/"+tableName1+"s/get_all_"+tableName1+"_"+tableName2+"s_"+tableName3+"s");
}

export const getThreeTableAllById=async(tableName1,tableName2,tableName3,id)=>{
    return await axios.get("http://localhost:5000/"+tableName1+"s/get_all_"+tableName1+"_"+tableName2+"s_"+tableName3+"s/"+id);
}

