import React from 'react';
import MenuPopover from "../../MenuPopover";
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tab
} from "@mui/material";
import {Box} from "@mui/system";
import Tabs from "@mui/material/Tabs";
import {TabContext, TabPanel} from "@mui/lab";
import {CreateNewUser} from "./Create New User/CreateNewUser";
import InviteNewUser from "./Create New User/InviteNewUser";

function NewUser({open,handleClose}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth={'md'}
        >
            <DialogTitle id="scroll-dialog-title">Add New User</DialogTitle>
            <DialogContent dividers={true}>
                <Box sx={{width:470}}>
                    <TabContext value={value}>
                    <Tabs
                        centered
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"

                        aria-label="secondary tabs example"
                    >
                        <Tab value="1" label="Invite Users"/>
                        <Tab value="2" label="Create Users"/>
                    </Tabs>
                    <TabPanel value="1"><InviteNewUser/> </TabPanel>
                    <TabPanel value="2"><CreateNewUser/></TabPanel>
            </TabContext>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant={'outlined'} color={'error'}>Cancel</Button>
                <Button onClick={handleClose} variant={'contained'} color={'primary'}>{value==='1'?'Invite':'Create'}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewUser;