import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import NewComponent from "./New User/NewComponent";
import NewAssest from './New Assest/NewAssest';
import NewTalent from "./New Talent/NewTalent";
import {useNavigate} from "react-router-dom";
import {Create} from "../../../../ApiServices/create";
import CustomSnackbar from "../../../../Utils/SnakBar";


function DialogContents(pageName,values,setValues,refValue,setRefValue) {
    return pageName === 'User' ? <NewComponent refValue={refValue} setRefValue={setRefValue} pageName={pageName} values={values} setValues={setValues}/> :
        pageName === 'Assets' ? <NewAssest values={values} setValues={setValues}/> :
            pageName === 'Talent' ? <NewTalent values={values} setValues={setValues}/> :
                pageName === 'Industry' ?
                <NewComponent refValue={refValue} setRefValue={setRefValue} pageName={pageName} values={values} setValues={setValues}/> :
                pageName === 'Mentors' ? <NewComponent refValue={refValue} setRefValue={setRefValue} pageName={pageName} values={values} setValues={setValues}/> : ''
}

function AddNew({open, handleClose, pageName}) {
    const navigate =useNavigate();
    const [statusCode,setStatusCode]=useState({cond:false,res:0});
    const [refValue, setRefValue] = React.useState('1');

    const [values, setValues] = useState(pageName==="User"||pageName==="Mentor" ||pageName==="Industry"?{
        fullname: '',
        email: '',
        username:'',
        password: '',
        confirm: ''
    }:pageName==="Talent"?{
        name: '',
        rollNo: '',
        department:'',
        session:'',
        email:'',
        skills:'',
        languages:'',
        certifications:'',
        experience:''
    }:{
        name: '',
        type: '',
        category:'',
        description:'',
        days:'',
        quantity:'',
        time_start:null,
        time_end:null,
        location:''
    });

    const create=async ()=>{
        if(pageName==='Assets'){
            let [shour, sminute, ssecond] = values.time_start
                .toLocaleTimeString("en-US")
                .split(/:| /);
            let [ehour, eminute, esecond] = values.time_end
                .toLocaleTimeString("en-US")
                .split(/:| /);
            const data={
                name: values.name,
                type: values.type,
                category:values.category,
                description:values.description,
                days:values.days,
                quantity:values.quantity,
                time_start:shour+":" +sminute+":"+ ssecond,
                time_end:ehour+":" +eminute+":"+ esecond,
                location:values.location
            }
            const response=await Create('asset',data);
            if(response.status===200){
                setStatusCode({...statusCode,['cond']:true,["res"]:200})
                setTimeout(function(){
                    handleClose();
                    navigate('/admin/dashboard');
                    navigate('/admin/dashboard/assets');
                }, 1500);

            }else{
                setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
            }
        }else if(pageName==='Talent'){
            const response=await Create('talent',values);
            if(response.status===200){
                setStatusCode({...statusCode,['cond']:true,["res"]:200})
                setTimeout(function(){
                    handleClose();
                    navigate('/admin/dashboard');
                    navigate('/admin/dashboard/talent');
                }, 1500);

            }else{
                setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
            }
        }
        if(refValue==='2'){
            if(pageName==='User'){
                const data={
                    fullname: values.fullname,
                    email: values.email,
                    username:values.email,
                    password: values.password
                }

                const response=await Create('user',data);
                if(response.status===200){
                    setStatusCode({...statusCode,['cond']:true,["res"]:200})
                    setTimeout(function(){
                        handleClose();
                        navigate('/admin/dashboard');
                        navigate('/admin/dashboard/user');
                    }, 1500);

                }else{
                    setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
                }
            }else if(pageName==='Mentors'){
                const data={
                    fullname: values.fullname,
                    email: values.email,
                    username:values.email,
                    password: values.password
                }
                const response=await Create('mentors',data);
                if(response.status===200){
                    setStatusCode({...statusCode,['cond']:true,["res"]:200})
                    setTimeout(function(){
                        handleClose();
                        navigate('/admin/dashboard');
                        navigate('/admin/dashboard/mentors');
                    }, 1500);

                }else{
                    setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
                }
            }else if(pageName==='Industry'){
                const data={
                    fullname: values.fullname,
                    email: values.email,
                    username:values.email,
                    password: values.password
                }
                const response=await Create('industry',data);
                if(response.status===200){
                    setStatusCode({...statusCode,['cond']:true,["res"]:200})
                    setTimeout(function(){
                        handleClose();
                        navigate('/admin/dashboard');
                        navigate('/admin/dashboard/industry');
                    }, 1500);

                }else{
                    setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
                }
            }
        }else if (refValue==='1'){
            // Invite Logic Here
        }
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth={'sm'}
        >
            <DialogTitle id="scroll-dialog-title">{"Add New " + pageName}</DialogTitle>
            <DialogContent dividers={true}>
                {DialogContents(pageName,values,setValues,refValue,setRefValue)}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} variant={'outlined'} color={'error'}>Cancel</Button>
                <Button onClick={create} variant={'contained'} color={'primary'}>{'Submit'}</Button>
            </DialogActions>
            {refValue==='2'?
                (statusCode.cond?( statusCode.res===200?
                    <CustomSnackbar message={"Successfully Created the "+pageName} type={'primary'}/>
                    :
                    <CustomSnackbar message={"Error While Creating the "+pageName} type={'error'}/>):''):
            (statusCode.cond? (statusCode.res===200?
                <CustomSnackbar message={"Successfully Invited the "+pageName} type={'primary'}/>
                :
                <CustomSnackbar message={"Error While Inviting the "+pageName} type={'error'}/>):'')}
        </Dialog>
    );
}

export default AddNew;