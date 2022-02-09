import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import {CreateNewAdmin} from "./New Admin/CreateNewAdmin";
import {CreateNewDepartment} from "./New Department/CreateNewDepartment";


function DialogContents(pageName) {
    return pageName === 'Admins' ? <CreateNewAdmin/> : pageName === 'Departments' ?
        <CreateNewDepartment/> : ''
}

function AddNew({open, handleClose, pageName}) {
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
                {DialogContents(pageName)}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} variant={'outlined'} color={'error'}>Cancel</Button>
                <Button onClick={handleClose} variant={'contained'} color={'primary'}>{'Submit'}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddNew;