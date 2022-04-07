import React from "react";
import Grid from "@mui/material/Grid";
import {Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import SaveIcon from '@mui/icons-material/Save';

export default function Help() {
    return (

        <Grid container justifyContent="center" alignItems="center">
            <Grid item md={1}>
            </Grid>
            <Grid item md={10}>
                <Box textAlign="left" marginTop={2} padding={3}>
                    <Grid container spacing="3">
                        <Grid item xs={12} md={12}>
                            <Typography variant='h3'>Get Help</Typography>
                        </Grid>

                        <Grid item xs={12} md={3}><TextField id="outlined-basic" label="PID" variant="outlined" fullWidth /></Grid>
                        <Grid item xs={12} md={9}><TextField id="outlined-basic" label="Project Name" variant="outlined" fullWidth /></Grid>
                        <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth /></Grid>
                        <Grid item xs={12} md={6}><TextField id="outlined-basic" label="UserName" variant="outlined" fullWidth /></Grid>
                        <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Message" variant="outlined" multiline maxRows={4} fullWidth /></Grid>
                        <Grid item xs={12} md={12}><Typography variant="body2">Attach a Document in which detail of your Project is mentioned</Typography></Grid>
                        <Grid item xs={12} md={12}><Button variant="contained" component="label">Attach File
                            <input type="file" hidden size="large" /></Button></Grid>
                    </Grid>
                </Box>
                <Box textAlign="right" marginBottom={3} paddingRight={3}><Button color="secondary" startIcon={<SaveIcon />} variant="contained" size="large">Send Request
                </Button></Box>
            </Grid>
            <Grid item md={1}></Grid>
        </Grid>
    );
}
