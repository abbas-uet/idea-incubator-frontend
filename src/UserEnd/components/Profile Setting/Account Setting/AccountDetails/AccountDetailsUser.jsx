import React from 'react';
import {
    Paper,
    Grid,
    Avatar,
    Typography,
    Badge,
    Button,
    Box,
    IconButton,
    FormControl,
    InputLabel,
    FilledInput,
    InputAdornment
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
        <Paper elevation={5} sx={{p: 2}}>

            <Grid conainer spacing={2} direction={'row'}>
                <Typography variant="h4" xs={12} md={12} sm={12}>
                    Account Details
                </Typography>

                <Grid item container spacing={2} alignItems={'center'} justifyContent={'space-evenly'}>
                    <Grid item xs={12} md={2} sm={2}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={2}
                            m={1}
                        >
                            <Badge
                                overlap="circular"
                                anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                                badgeContent={
                                    <SmallAvatar>
                                        <EditIcon/>
                                    </SmallAvatar>
                                }
                            >
                                <Avatar sx={{width: 150, height: 150}}>
                                    <PersonIcon sx={{fontSize: "11rem"}}/>
                                </Avatar>
                            </Badge>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} md={7} sm={7} spacing={4}>
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <FormControl fullWidth sx={{m: 1}} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">AdminOptions Name</InputLabel>
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
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <FormControl fullWidth sx={{m: 1}} variant="filled">
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
                        <Grid item xs={5} md={5}>
                            <Typography variant="subtitle2" sx={{ml: 1}}>
                                Account Created by
                            </Typography>
                        </Grid>
                        <Grid item xs={7} md={7}>
                            <Typography variant="button" style={{color: 'gray'}}>
                                Abbas Ali
                            </Typography>
                        </Grid>
                        <Grid item xs={5} md={5}>
                            <Typography variant="subtitle2" sx={{ml: 1}}>
                                Date of Creation
                            </Typography>
                        </Grid>
                        <Grid item xs={7} md={7}>
                            <Typography variant="button" style={{color: 'gray'}}>
                                25/02/2021
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={12} justifyContent='right'>
                        <Box textAlign="right" marginBottom={5} gutterBottom paddingRight={3}>
                            <Button
                                color="secondary"
                                startIcon={<SaveIcon/>}
                                variant="contained"
                                size="large"
                            >
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant="h6" component='div' gutterBottom style={{color: 'gray'}}>
                        Sub Users Details
                    </Typography>
                    <SubUsersList/>
                </Grid>
            </Grid>
        </Paper>
    )
}
