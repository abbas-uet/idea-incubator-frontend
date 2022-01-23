import React, {useState} from 'react';
import {Grid, TextField, Typography} from "@mui/material";

function InviteNewUser(props) {
    const [values, setValues] = useState({
        emails: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Grid
            container
            spacing={1}
        >
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    Emails
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="fullName"
                    multiline={true}
                    maxRows={4}
                    minRows={4}
                    color={'grey'}
                    onChange={handleChange}
                    required
                    value={values.fullName}
                    variant="filled"
                />
            </Grid>

        </Grid>
    );
}

export default InviteNewUser;