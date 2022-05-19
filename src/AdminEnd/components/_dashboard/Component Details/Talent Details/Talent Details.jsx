import React, {useEffect} from 'react';
import Page from "../../../Page";
import {useHistory, useNavigate, useParams} from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField, Typography,
    List, ListItemAvatar, ListItem
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import faker from 'faker';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import {deepOrange, green} from '@mui/material/colors';
import {useState} from 'react';
import Stack from "@mui/material/Stack";
import {AvatarGroup} from "@mui/lab";


import ListToolBar from '../ListToolBar';
import {getTableSingle} from "../../../../../ApiServices/getData";
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


function TalentDetails() {
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
        name: '',
        email: '',
        rollNo: '',
        department: '',
        languages: '',
        certifications: '',
        experience: '',
        skills: '',
        session: '',
    });

    const [statusCode, setStatusCode] = useState({cond: false, res1: 0, res2: 0});
    useEffect(async () => {
        const response = await getTableSingle('talent', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ['name']: response.data.name,
                ['email']: response.data.email,
                ['rollNo']: response.data.rollNo,
                ['department']: response.data.department,
                ['languages']: response.data.languages,
                ['certifications']: response.data.certifications,
                ['experience']: response.data.experience,
                ['skills']: response.data.skills,
                ['session']: response.data.session,
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
            rollNo: values.rollNo,
            department: values.department,
            languages: values.languages,
            certifications: values.certifications,
            experience: values.experience,
            skills: values.skills,
            session: values.session,
        }
        const response = await UpdateSingleTableData('talent', id, data);
        if (response.status === 200) {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: 200, ["res2"]: 0})
        } else {
            setStatusCode({...statusCode, ['cond']: true, ["res1"]: response.status, ["res2"]: 0})
        }
    }

    const handleDelete = async () => {
        const response = await deleteSingle('talent', id);
        if (response.status === 200) {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 0,
                ["res2"]: 200
            })
            setTimeout(function () {
                navigate('/admin/dashboard/talent')
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
                            title="Talent Detail"

                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={5} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Student Name:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Name'}
                                            value={values.name}
                                            name={'name'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={5} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Roll #:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Roll No'}
                                            value={values.rollNo}
                                            name={'rollNo'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={7} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Department:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Department'}
                                            value={values.department}
                                            name={'department'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Session:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Session'}
                                            value={values.session}
                                            name={'session'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={11.9} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Email:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Email'}
                                            value={values.email}
                                            name={'email'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={5}>
                                    <Stack direction={"row"} spacing={5.2} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Skills:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Skills'}
                                            value={values.skills}
                                            name={'skills'}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={9}>
                                    <Stack direction={"row"} spacing={7.3} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Languages:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            sx={{pr: 0.5}}
                                            variant="outlined"
                                            fullWidth
                                            disabled={disabled}
                                            label={'Languages'}
                                            name={'languages'}
                                            value={values.languages}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={9}>
                                    <Stack direction={"row"} spacing={6.3} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Certification:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            sx={{pr: 0.5}}
                                            variant="outlined"
                                            fullWidth
                                            disabled={disabled}
                                            label={'Certifications'}
                                            name={'certifications'}
                                            value={values.certifications}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={7.1} alignItems={"center"}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Experience:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={disabled}
                                            label={'Experience'}
                                            name={'experience'}
                                            value={values.experience}
                                            multiline
                                            minRows={3}
                                            sx={{width: "590px"}}
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>


                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        p: 1,
                                        mr: 2,
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
                                            Delete Talent
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
                    <CustomSnackbar message={"Successfully Updated Talent Details"} type={'primary'}/>
                    : statusCode.res1 !== 200 && statusCode.res2 === 0 ?
                        <CustomSnackbar message={"Error While Updating Talent Details"} type={'error'}/>
                        : statusCode.res1 === 0 && statusCode.res2 === 200 ?
                            <CustomSnackbar message={"Successfully Deleted the Talent"} type={'error'}/>
                            : <CustomSnackbar message={"Error While Deleting the Talent"} type={'error'}/>
            )}

        </div>
    );
}

export default TalentDetails;

