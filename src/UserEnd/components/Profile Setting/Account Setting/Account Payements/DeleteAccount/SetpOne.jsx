import React from 'react'
import { Button, Grid } from '@mui/material';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import StepOneForm from './StepOneForm.jsx';

export default function SetpOne() {
    const [toggleCancel, settoggleCancel] = React.useState(false);
    return (
        <Grid container spacing={4} justifyContent={'Center'}>
            <Grid item xs={4}>
                <Button variant="outlined" color="error" size='medium' startIcon={<CancelPresentationOutlinedIcon />} onClick={() => settoggleCancel(true)}>
                    Cancel My Subscription
                </Button>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={12} md={12}>
                {
                    toggleCancel && <StepOneForm />
                }
            </Grid>
        </Grid>
    )
}
