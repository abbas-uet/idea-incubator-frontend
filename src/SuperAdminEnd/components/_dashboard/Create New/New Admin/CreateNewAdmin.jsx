import {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField, Typography
} from '@mui/material';
import axios from "axios";


export const CreateNewAdmin = ({values,handleChange,setValues}) => {


    useEffect(() => {
        axios.get('http://localhost:5000/admins/getLastId')
            .then(function (response) {
                setValues({...values,["id"]:response.data.id+1});
                console.log(values.id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


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
                    ID
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="ID"
                    onChange={handleChange}
                    disabled={true}
                    required
                    color={'grey'}
                    value={values.id}
                    variant="filled"
                />
            </Grid>
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
                    value={values.fullname}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    UserName
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="username"
                    onChange={handleChange}
                    required
                    color={'grey'}
                    value={values.username}
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