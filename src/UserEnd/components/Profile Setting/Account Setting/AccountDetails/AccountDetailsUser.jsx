import React from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    FilledInput,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
import {styled} from '@mui/system';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import SubUsersList from './SubUsersList.jsx';
import {blue} from '@mui/material/colors';
import Page from "../../../../../SuperAdminEnd/components/Page";
import Container from "@mui/material/Container";
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'


const SmallAvatar = styled(Avatar)(({theme}) => ({
    width: 40,
    height: 40,
    border: `2px solid`,
}));
export default function AccountDetailsUser() {
    const [values, setValues] = React.useState({
        showPassword: false,
        editUserName: false,
        editPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickEditUserName = () => {
        setValues({
            ...values,
            editUserName: true,
            editPassword: false,
        });
    };

    const handleMouseEditUserName = (event) => {
        event.preventDefault();

    };
    const handleClickEditPassword = () => {
        setValues({
            ...values,
            editPassword: true,
            editUserName: false,
        });
    };

    const handleMouseEditPassword = (event) => {

        event.preventDefault();
    };
    return (
        <Page title={"Account Payment | Idea Incubator"}>
            <form
                autoComplete="off"
                noValidate
            >
                <Card>
                <CardHeader sx={{ ml: 1 }} title="Account Detail" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                    <Container>

                        <Grid conainer spacing={2} direction={'row'}>

                            <Grid item container spacing={2} alignItems={'center'} justifyContent={'space-evenly'}>
                                <Grid item container xs={12} md={12} sm={12} spacing={2.5} sx={{mt:1.5,}}>
                                    <Grid item xs={12} md={4} sm={12} lg={4}  sx={{mr:2}}>

                                        <FormControl  sx={{m: 1}} fullWidth variant="filled">
                                            <InputLabel htmlFor="filled-adornment-amount" mb-1>User Name</InputLabel>
                                            <FilledInput
                                                id="outlined-adornment-password"
                                                type={'text'}
                                                defaultValue={'abbas123'}
                                                fullWidth
                                                disabled={!values.editUserName}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <PersonIcon sx={{color: values.editUserName ? blue[400] : ''}}/>
                                                    </InputAdornment>
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickEditUserName}
                                                            onMouseDown={handleMouseEditUserName}
                                                            edge="end"
                                                            >
                                                            <EditIcon/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }

                                                label='User Name'
                                                />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={12} lg={4} sx={{ml:2}}>
                                        <FormControl  sx={{m: 1}} fullWidth variant="filled">
                                            <InputLabel htmlFor="filled-adornment-amount">Password</InputLabel>
                                            <FilledInput
                                                id="outlined-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                defaultValue={'abbas123'}
                                                fullWidth
                                                disabled={!values.editPassword}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <LockIcon sx={{color: values.editPassword ? blue[400] : ''}}/>
                                                    </InputAdornment>
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            >
                                                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                        </IconButton>
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickEditPassword}
                                                            onMouseDown={handleMouseEditPassword}
                                                            edge="end"
                                                            >
                                                            <EditIcon/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label='Password'
                                                />
                                        </FormControl>
                                                </Grid>
                                    <Grid item xs={12} md={4.5}>
                                        <Stack direction={'row'} spacing={2}>

                                        <Typography variant="subtitle2" sx={{ml: 1}}>
                                            Account Created by:
                                        </Typography>

                                        <Typography variant="body2" style={{color: 'black'}}>
                                            Abbas Ali
                                        </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack direction={'row'} spacing={5}>
                                        <Typography variant="subtitle2" sx={{ml: 1}}>
                                            Date of Creation:
                                        </Typography>

                                        <Typography variant="body2" style={{color: 'black'}}>
                                            25/02/2021
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={12} justifyContent='right'>
                                    <Box textAlign="right" marginBottom={5} gutterBottom paddingRight={3}>
                                        <Button
                                            color="primary"
                                            startIcon={<SaveIcon/>}
                                            variant="contained"
                                            size="medium"
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <Typography variant="body1" fontWeight={"bold"} component='div' gutterBottom style={{color: 'black'}}>
                                    Sub Users Details
                                </Typography>
                                <SubUsersList/>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Container>
                    </Grid>
                    </CardContent>
                </Card>
            </form>
        </Page>
    )
}
