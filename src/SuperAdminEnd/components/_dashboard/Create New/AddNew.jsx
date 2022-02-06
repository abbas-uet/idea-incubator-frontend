import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import NewComponent from "./New User/NewComponent";
import NewAssest from './New Assest/NewAssest';
import NewTalent from "./New Talent/NewTalent";


function DialogContents(pageName) {
    return pageName === 'User' ? <NewComponent pageName={pageName}/> : pageName === 'Ideas' ?
        <NewComponent pageName={pageName}/> : pageName === 'Assets' ? <NewAssest/> :
            pageName === 'Talent' ? <NewTalent/> : pageName === 'Industry' ?
                <NewComponent pageName={pageName}/> :
                pageName === 'Mentors' ? <NewComponent pageName={pageName}/> : ''
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