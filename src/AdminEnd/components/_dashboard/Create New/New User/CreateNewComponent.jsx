import {useState} from 'react';
import {Grid, TextField, Typography} from '@mui/material';
import {Create} from "../../../../../ApiServices/create";
import {useNavigate} from "react-router-dom";


export const CreateNewComponent = ({values,setValues}) => {
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
            justifyContent={'space-between'}
        >
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    FullName
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="fullname"
                    onChange={handleChange}
                    required
                    color={'grey'}
                    value={values.fullName}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    Gender
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    color={'grey'}
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    Email
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="email"
                    onChange={handleChange}
                    required
                    color={'grey'}
                    value={values.email}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    Password
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    color={'grey'}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={4}>
                    Confirm Password
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    color={'grey'}
                    name="confirm"
                    margin={"normal"}
                    onChange={handleChange}
                    type="password"
                    value={values.confirm}
                    variant="filled"
                />
            </Grid>
        </Grid>

    );
};