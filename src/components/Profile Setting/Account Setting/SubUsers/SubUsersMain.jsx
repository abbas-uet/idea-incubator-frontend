import React from 'react'
import SubUsersCardComponent from './SubUsersCardComponent.jsx'
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import { TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CustomDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};
export default function SubUsersMain() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("You clicked on Scroll Dialog");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Grid container spacing={2} direction={'row'}>
                <Grid item xs={12} container justifyContent="flex-end" >
                    < Button variant='contained' color='secondary' startIcon={<AddModeratorOutlinedIcon />} size='large' onClick={handleClickOpen}>
                        Invite Sub Users
                    </Button>
                </Grid>
                <Grid item xs={4} md={4} sm={6}>
                    <SubUsersCardComponent />
                </Grid>
                <Grid item xs={4} md={4} sm={6} >
                    <SubUsersCardComponent />
                </Grid>
                <Grid item xs={4} md={4} sm={6} >
                    <SubUsersCardComponent />
                </Grid>
                <Grid item xs={4} md={4} sm={6} >
                    <SubUsersCardComponent />
                </Grid>
            </Grid>
            <Dialog
                open={open}
                fullWidth={true}
                onClose={handleClose}
                scroll={'paper'}
                maxWidth={'sm'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Invite to Account
                </CustomDialogTitle>
                <DialogContent dividers={true}>

                    <TextField id="outlined-basic" label="Email" variant="outlined" required fullWidth={true} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='secondary' size="small" sx={{ m: 1 }}>Cancel</Button>
                    <Button onClick={handleClose} variant='contained' color='secondary' size="small" sx={{ m: 1 }}>Send Invite</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
