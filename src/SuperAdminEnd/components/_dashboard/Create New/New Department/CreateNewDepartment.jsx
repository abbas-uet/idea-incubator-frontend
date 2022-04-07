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
import {getLastId} from "../../../../../ApiServices/getData";


export const CreateNewDepartment = ({values,handleChange,setValues}) => {

    useEffect(async() => {
        const response=await getLastId('department')
        if(response.status===200){
            setValues({...values,["id"]:response.data.id+1});
        }
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
                    Department ID
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="id"
                    onChange={handleChange}
                    color={'grey'}
                    disabled={true}
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
                    Department Name
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="departmentname"
                    onChange={handleChange}
                    required
                    color={'grey'}
                    value={values.departmentname}
                    variant="filled"
                />
            </Grid>
            <Grid
                item
                md={5}
                xs={6}
            >
                <Typography variant={'body1'} marginTop={2}>
                    No of Admins
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    color={'grey'}
                    name="admins"
                    onChange={handleChange}
                    value={values.admins}
                    variant="filled"
                />
            </Grid>
           
           
        </Grid>
    );
};