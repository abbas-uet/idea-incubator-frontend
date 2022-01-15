import React from "react";
import "./TalentPoolProfileCard.css";
import {
    Dialog, DialogTitle, IconButton, DialogActions, DialogContent, TextField, Button
} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import TalentPoolProfile from "../TalentPoolProfile/TalentPoolProfile.jsx";

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

function TalentPoolProfileCard(props) {
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
        <>
            <div className="card-container">
                <header className="header_pool">
                    <img className='img_telent' src={'https://raw.githubusercontent.com/ritaxcorreia/react-profile-card/master/src/images/image-rita.png'} alt={props.name} />
                </header>
                <h1 className="bold-text">
                    {props.name}
                </h1>
                <h2 className="normal-text">{props.city}</h2>
                <div className="social-container">

                </div>
                <p className='skill'>Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.</p>

                <p><button className="talent_contact" onClick={handleClickOpen}>Contact Details</button></p>
            </div>
            <Dialog
                open={open}
                fullWidth={true}
                onClose={handleClose}
                scroll={'paper'}
                maxWidth={'md'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Profile Details
                </CustomDialogTitle>
                <DialogContent dividers={true}>
                    <TalentPoolProfile />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined' color='secondary' size="small" sx={{ m: 1 }}>Close</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default TalentPoolProfileCard;