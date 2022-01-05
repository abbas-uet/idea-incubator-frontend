import React from 'react'
import { Grid, Typography, FormControlLabel, Switch } from '@mui/material'

export default function NotificationSettings() {
    const [CheckBoxes, setCheckBoxes] = React.useState({ email: false, sms: false, inApp: false })
    const handleEmail = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                email: event.target.value
            }
        })
    }
    const handleSMS = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                sms: event.target.value
            }
        })
    }
    const handleInApp = (event) => {
        setCheckBoxes({
            CheckBoxes: {
                ...CheckBoxes,
                inApp: event.target.value
            }
        })
    }
    return (

        <Grid container sx={{ minWidth: 1070 }} spacing={4}>
            <Grid item xs={12} >
                <Typography variant='h5' component='div' >Notification Settings</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component='div' color='secondary' sx={{ marginLeft: 2 }}>Get Notification By Email</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Switch value={CheckBoxes.email} onChange={handleEmail} color='secondary' />} label="Do you want to Get Notifications through Mail?" sx={{ marginLeft: 4 }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component='div' color='secondary' sx={{ marginLeft: 2 }}>Get Notification By SMS</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Switch value={CheckBoxes.email} onChange={handleSMS} color='secondary' />} label="Do you want to Get Notifications through SMS?" sx={{ marginLeft: 4 }} />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h6' component='div' color='secondary' sx={{ marginLeft: 2 }}>Get Notification On Site</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Switch value={CheckBoxes.inApp} onChange={handleInApp} color='secondary' />} label="Do you want to Get Notifications through Website?" sx={{ marginLeft: 4 }} />
            </Grid>
        </Grid>

    )
}
