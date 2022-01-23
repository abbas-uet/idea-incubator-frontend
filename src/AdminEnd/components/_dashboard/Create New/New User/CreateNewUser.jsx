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



export const CreateNewUser = (props) => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirm: ''
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
                    FullName
                </Typography>

            </Grid>
            <Grid
                item
                md={7}
                xs={6}
            >
                <TextField
                    name="fullName"
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
                    helperText={'week'}
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