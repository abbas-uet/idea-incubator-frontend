import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import {CreateNewAdmin} from "./New Admin/CreateNewAdmin";
import {CreateNewDepartment} from "./New Department/CreateNewDepartment";
import {Create} from "../../../../ApiServices/create";




function AddNew({open, handleClose, pageName}) {
    const [values, setValues] = useState(pageName==="Admins"?{
        fullname: '',
        email: '',
        password: '',
        id:'',
        username:'',
        confirm: ''
    }:{
        fullname: '',
        email: '',
        password: '',
        id:'',
        username:'',
        confirm: ''
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const create=async ()=>{
        const response=await Create('admin',values);
        if(response.status===200){
            setValues({...values,["fullname"]: '',
                ["email"]: '',
                ["password"]: '',
                ["id"]:'',
                ["username"]:'',
                ["confirm"]: ''});
            handleClose();
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
                {pageName === 'Admins' ? <CreateNewAdmin values={values} handleChange={handleChange}
                setValues={setValues}/> : pageName === 'Departments' ?
                    <CreateNewDepartment/> : ''}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} variant={'outlined'} color={'error'}>Cancel</Button>
                <Button onClick={create} variant={'contained'} color={'primary'} >Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddNew;