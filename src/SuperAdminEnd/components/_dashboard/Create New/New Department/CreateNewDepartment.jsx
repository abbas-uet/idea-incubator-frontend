import {useState} from 'react';
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


export const CreateNewDepartment = (props) => {
    const [values, setValues] = useState({
        id: '',
        name: '',
        no: ''
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
                    Department Name
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="name"
                    onChange={handleChange}
                    required
                    color={'grey'}
                    value={values.name}
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
                    name="no of admins"
                    onChange={handleChange}
                    value={values.no}
                    variant="filled"
                />
            </Grid>
           
           
        </Grid>
    );
};