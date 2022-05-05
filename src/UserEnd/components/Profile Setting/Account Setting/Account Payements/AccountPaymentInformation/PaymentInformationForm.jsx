import {Button, Card, CardContent, Grid, Typography} from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import React from 'react'
import CardsComponent from './CardsComponent.jsx';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PaymentForm from './PaymentForm.jsx';


const cards = [
    {
        id: 1,
        cardNum: '3425 4232 5324 6432',
    },
    {
        id: 2,
        cardNum: '3425 4232 5324 6432',
    }, {
        id: 3,
        cardNum: '3425 4232 5324 6432',
    }, {
        id: 4,
        cardNum: '3425 4232 5324 6432',
    }, {
        id: 5,
        cardNum: '3425 4232 5324 6432',
    }
];


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


export default function PaymentInformationForm() {
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
    const [cardsArray, setcardsArray] = React.useState(cards);
    const handleRemove = (id) => {
        const newArry = cardsArray.filter((card) => card.id !== id);
        console.log(newArry);
        setcardsArray(newArry);
    }
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={12} container justifyContent="flex-end" >
                    < Button variant='contained' color='inherit' startIcon={<AddCardIcon />} size='large' onClick={handleClickOpen}>
                        Add New Card
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ width: '100%', backgroundColor: '#f8f8f8' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ml:2}}>
                                Payment Methods
                            </Typography>
                            <CardsComponent cardsArray={cardsArray} deleteCard={handleRemove} />
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
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
                    Add New Card
                </CustomDialogTitle>
                <DialogContent dividers={true}>
                    <Grid continer>
                        <PaymentForm />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='primary' size="medium" sx={{ m: 1 }} startIcon={<AddCardIcon />}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
