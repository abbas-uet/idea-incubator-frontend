import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useNavigate, useParams} from 'react-router-dom';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Divider,
    Grid,
    ListItem,
    TextField,
    Typography
} from '@mui/material';

import faker from 'faker';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from "@mui/material/Stack";
import {getTableSingle, getTwoTableSingle} from "../../../../../ApiServices/getData";
import {UpdateSingleTableData} from "../../../../../ApiServices/update";
import {deleteSingle} from "../../../../../ApiServices/delete";
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


function IndustryDetails() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [disabled, setdisabled] = React.useState(true);


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
        services: [],
    });


    const [statusCode, setStatusCode] = useState({cond: false, res1: 0, res2: 0});
    useEffect(async () => {
        const response = await getTwoTableSingle('industry','service', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ['id']:response.data.id,
                ['name']: response.data.name,
                ['email']: response.data.email,
                ['username']: response.data.username,
                ['services']: response.data.IndustryServices,
            });
            setStatusCode({...statusCode, ['cond']: false, ["res1"]: 0, ["res2"]: 0})
            console.log(values.services);
        } else {
            console.log(response.status);
        }
    }, [])


    const handleSave = async () => {
        const data = {
            name: values.name,
            email: values.email,
            username: values.username,
        }
        const response = await UpdateSingleTableData('Industry', id, data);
        if (response.status === 200) {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: 200, ["res2"]: 0})
        } else {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: response.status, ["res2"]: 0})
        }
    }

    const handleDelete = async () => {
        const response = await deleteSingle('Industry', id);
        if (response.status === 200) {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 0,
                ["res2"]: 200
            })
            setTimeout(function () {
                navigate('/admin/dashboard/industry')
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
                            title="Industry Details"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={15.5} alignItems={"center"}>
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
                                            name={'ID'}
                                            label={'ID'}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={8.2} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            User Name:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.username}
                                            size="small"
                                            name={'username'}
                                            label={'User Name'}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={12.5} alignItems={"center"}>
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
                                            size="small"
                                            name={'email'}
                                            label={'Email'}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>
                                <Grid item md={6}>
                                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Company Name:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            disabled={disabled}
                                            value={values.name}
                                            size="small"
                                            name={'name'}
                                            label={'Company Name'}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={6}></Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={10} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Services:
                                        </Typography>
                                        <div>

                                            {values.services.map(e=>{
                                            return(<Chip label={e.name} />);
                                        })}
                                        </div>
                                    </Stack>
                                </Grid>
                                <Grid item md={7}></Grid>


                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        mr: 2,
                                        p: 1,
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
                                            Delete Industry
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
                    <CustomSnackbar message={"Successfully Updated Industry Details"} type={'primary'}/>
                    : statusCode.res1 !== 200 && statusCode.res2 === 0 ?
                        <CustomSnackbar message={"Error While Updating Industry Details"} type={'error'}/>
                        : statusCode.res1 === 0 && statusCode.res2 === 200 ?
                            <CustomSnackbar message={"Successfully Deleted the Industry"} type={'error'}/>
                            : <CustomSnackbar message={"Error While Deleting the Industry"} type={'error'}/>
            )}

        </div>
    );
}

export default IndustryDetails;

