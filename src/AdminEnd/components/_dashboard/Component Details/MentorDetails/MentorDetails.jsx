import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Card, CardContent, CardHeader, Divider, Grid, ListItem, TextField, Typography} from '@mui/material';

import faker from 'faker';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from "@mui/material/Stack";
import {UpdateSingleTableData} from "../../../../../ApiServices/update";
import {deleteSingle} from "../../../../../ApiServices/delete";
import {getTableSingle} from "../../../../../ApiServices/getData";
import CustomSnackbar from "../../../../../Utils/SnakBar";


const QUERIES_LIST = [...Array(24)].map((_, index) => ({
    id: index,
    title: faker.name.lastName(),
    description: faker.lorem.paragraphs(),
}));


function ListItemRender(id, title, body, handleDialogueOpen) {
    return <ListItem key={id} onClick={handleDialogueOpen}>
        <ListItemButton>
            <ListItemIcon>
                <FiberManualRecordIcon sx={{fontSize: 10}}/>
            </ListItemIcon>
            <ListItemText primary={
                <Stack direction={'row'} spacing={1}>
                    <Typography variant={'subtitle2'}>{title}</Typography>
                    <ArrowRightIcon/>
                    <Typography variant={'body1'} sx={{
                        display: "block",
                        width: "750px",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }}>{body}</Typography>
                </Stack>
            }/>
        </ListItemButton>
    </ListItem>;
}


function MentorDetails() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const {id} = useParams()

    const [values, setValues] = useState({
        id: '',
        username: '',
        email: '',
        name: '',
        field: [],
    });

    const [statusCode, setStatusCode] = useState({cond: false, res1: 0, res2: 0});
    useEffect(async () => {
        const response = await getTableSingle('mentor', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ['id']: response.data.id,
                ['name']: response.data.name,
                ['email']: response.data.email,
                ['username']: response.data.username,
                ['field']: response.data.field,
            });
            setStatusCode({...statusCode, ['cond']: false, ["res1"]: 0, ["res2"]: 0})
        } else {
            console.log(response.status);
        }
    }, [])


    const handleSave = async () => {
        const data = {
            name: values.name,
            email: values.email,
            username: values.username,
            field: values.field
        }
        const response = await UpdateSingleTableData('Mentor', id, data);
        if (response.status === 200) {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: 200, ["res2"]: 0})
        } else {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: response.status, ["res2"]: 0})
        }
    }

    const handleDelete = async () => {
        const response = await deleteSingle('Mentor', id);
        if (response.status === 200) {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 0,
                ["res2"]: 200
            })
            setTimeout(function () {
                navigate('/admin/dashboard/mentors')
            }, 1500);

        } else {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 0,
                ["res2"]: response.status
            })
        }
    }


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const [disabled, setdisabled] = React.useState(true);

    return (
        <div>
            <Page>
                <form
                    autoComplete="off"
                    noValidate
                >
                    <Card>
                        <CardHeader
                            sx={{ml: 1}}
                            title="Mentor Detail"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={10.8} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            ID:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.id}
                                            name={'id'}
                                            label={"ID"}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={7.8} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Name:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.name}
                                            name={'name'}
                                            label={"Name"}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            UserName:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.username}
                                            name={'username'}
                                            label={"User Name"}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={8} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Email:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.email}
                                            name={'email'}
                                            label={"Email"}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={8.5} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Field:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.field}
                                            name={'field'}
                                            label={"Field"}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>


                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={3} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        mr: 2,
                                        p: 1
                                    }}>
                                        <Button
                                            color="inherit"
                                            variant="contained"
                                        >
                                            Message
                                        </Button>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                            onClick={handleDelete}
                                        >
                                            Delete Mentor
                                        </Button>
                                        <Button color="primary" variant="contained"
                                                onClick={() => {
                                                    if (disabled === false) {
                                                        handleSave();
                                                    }
                                                    setdisabled(!disabled);

                                                }}>
                                            {disabled === true ? 'Update' : 'Save Changes'}
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>


                    </Card>
                </form>

            </Page>
            {statusCode.cond && (
                statusCode.res1 === 200 ?
                    <CustomSnackbar message={"Successfully Updated Mentor Details"} type={'primary'}/>
                    : statusCode.res1 !== 200 && statusCode.res2 === 0 ?
                        <CustomSnackbar message={"Error While Updating Mentor Details"} type={'error'}/>
                        : statusCode.res1 === 0 && statusCode.res2 === 200 ?
                            <CustomSnackbar message={"Successfully Deleted the Mentor"} type={'error'}/>
                            : <CustomSnackbar message={"Error While Deleting the Mentor"} type={'error'}/>
            )}

        </div>
    );
}

export default MentorDetails;

