import * as Yup from 'yup';
import React, {useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {Form, FormikProvider, useFormik} from 'formik';
import {Icon} from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {Checkbox, FormControlLabel, IconButton, InputAdornment, Link, Stack, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import axios from "axios";

// ----------------------------------------------------------------------

const allAdmins = [
    "User", "Admin", "SuperAdmin", "Industry", "Mentor"
]


const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;
export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const [role, setRole] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true,
            role: ''
        },
        validationSchema: LoginSchema,
        onSubmit: async () => {
            const table = role.toLowerCase();
            const data = {
                email: formik.values.email.toString(),
                password: formik.values.password.toString()
            }
            const response = await axios.post('http://localhost:5000/' + table + 's/auth_' + table, data)
            if (response.status === 200) {
                role === 'User' ? navigate('/user/' + response.data.userid + '/home', {replace: true}) :
                    role === "Mentor" ? navigate('/mentor/' + response.data.id + '/home', {replace: true}) :
                        role === 'Industry' ? navigate('/industry/' + response.data.id + '/home', {replace: true}) :
                            role === 'Admin' ? navigate('/admin/dashboard/' + response.data.id + '/app', {replace: true}) :
                                navigate('/superadmin/dashboard/' + response.data.id + '/app', {replace: true})
            }else{
                console.log(response);
            }
        }
    });

    const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps} = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Icon icon={showPassword ? eyeFill : eyeOffFill}/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                    <Autocomplete
                        id="checkboxes-tags-demo"
                        options={allAdmins}
                        disableCloseOnSelect
                        value={role}
                        isOptionEqualToValue={(option, value) => option === value}
                        onChange={(event, value) => setRole(value)}
                        getOptionLabel={(option) => option}
                        renderOption={(props, option, {selected}) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{marginRight: 8}}
                                    checked={selected}
                                    key={option}
                                />
                                {option}
                            </li>
                        )}
                        style={{width: 500}}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Select Role"
                            />
                        )}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                    <FormControlLabel
                        control={<Checkbox {...getFieldProps('remember')} checked={values.remember}/>}
                        label="Remember me"
                    />

                    <Link component={RouterLink} variant="subtitle2" to="#">
                        Forgot password?
                    </Link>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Login
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}
