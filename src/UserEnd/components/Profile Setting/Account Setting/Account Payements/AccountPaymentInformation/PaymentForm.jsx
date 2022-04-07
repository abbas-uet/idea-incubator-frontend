import React from 'react';
import {Grid, TextField, Typography} from '@mui/material';

const PaymentForm = () => {

    const cardsLogo = [
        "amex",
        "cirrus",
        "diners",
        "dankort",
        "discover",
        "jcb",
        "maestro",
        "mastercard",
        "visa",
        "visaelectron",
    ];

    return <>
        <Grid container spacing={3}>

            <Grid container item={12}>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6">Payment Data</Typography>
                </Grid>
                <Grid container item xs={12} sm={9} justify="space-between">
                    {cardsLogo.map(e => <img key={e} src={`./cards/${e}.png`} alt={e} width="50px" align="bottom" style={{ padding: "0 5px" }} />)}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    label="Credit Card Number"
                    name="ccnumber"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={6} sm={6}>
                <TextField
                    label="Expiration Date"
                    name="ccexp"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={6} sm={6}>
                <TextField
                    label="CVC"
                    name="cvc"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </Grid>
    </>
}

export default PaymentForm;

