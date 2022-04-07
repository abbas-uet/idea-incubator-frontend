import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import {CreateNewAdmin} from "./New Admin/CreateNewAdmin";
import {CreateNewDepartment} from "./New Department/CreateNewDepartment";
import {Create} from "../../../../ApiServices/create";
import {useNavigate} from "react-router-dom";
import CustomSnackbar from "../../../../Utils/SnakBar";


function AddNew({open, handleClose, pageName}) {
    const navigate =useNavigate();
    const [statusCode,setStatusCode]=useState({cond:false,res:0});

    const [values, setValues] = useState(pageName==="Admins"?{
        fullname: '',
        email: '',
        password: '',
        id:'',
        username:'',
        confirm: ''
    }:{
        departmentname: '',
        admins: '',
        id:'',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const create=async ()=>{
        if(pageName==='Admins'){
            const response=await Create('admin',values);
            if(response.status===200){
                setStatusCode({...statusCode,['cond']:true,["res"]:200})
                setTimeout(function(){
                    handleClose();
                    navigate('/superadmin/dashboard');
                    navigate('/superadmin/dashboard/admins');
                }, 1500);

            }else{
                setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
            }
        }else{
            const response=await Create('department',values);
            if(response.status===200){
                setStatusCode({...statusCode,['cond']:true,["res"]:200})
                setTimeout(function(){
                    handleClose();
                    navigate('/superadmin/dashboard');
                    navigate('/superadmin/dashboard/departments');
                }, 1500);

            }else{
                setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
            }
        }


    }


    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth={'sm'}
        >
            <DialogTitle id="scroll-dialog-title">{"Add New " + pageName}</DialogTitle>
            <DialogContent dividers={true}>
                {pageName === 'Admins' ? <CreateNewAdmin values={values} handleChange={handleChange}
                setValues={setValues}/> : pageName === 'Departments' ?
                    <CreateNewDepartment values={values} handleChange={handleChange}
                                         setValues={setValues}/> : ''}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} variant={'outlined'} color={'error'}>Cancel</Button>
                <Button onClick={create} variant={'contained'} color={'primary'} >Create</Button>
            </DialogActions>
        </Dialog>
            {statusCode.cond&&pageName==='Admins'&&(
                statusCode.res===200?
                    <CustomSnackbar message={"Successfully Created the Admin"} type={'primary'}/>
                    :
                    <CustomSnackbar message={"Error While Adding the Admin"} type={'error'}/>)}
            {statusCode.cond&&pageName==='Departments'&&(
                statusCode.res===200?
                    <CustomSnackbar message={"Successfully Created the Department"} type={'primary'}/>
                    :
                    <CustomSnackbar message={"Error While Adding the Department"} type={'error'}/>)}
        </>
    );
}

export default AddNew;