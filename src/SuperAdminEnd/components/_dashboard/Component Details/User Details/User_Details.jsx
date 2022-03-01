import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useParams} from 'react-router-dom';
import {Button, CardContent, CardHeader, Divider, Grid, List, ListItem, Paper, Typography} from '@mui/material';
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
import Stack from "@mui/material/Stack";


import ListToolBar from '../ListToolBar';
import axios from "axios";


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


function SuperAdminUserDetail({pageName, LIST,}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {id} = useParams()
    const [values, setValues] = useState({
        userId: '',
        userName: '',
        email: '',
        Joindate: '',
        managedby: '',
        projectid: '',
    });

    useEffect(() => {
        axios.get('http://localhost:5000/users/view_user/'+id)
            .then(function (response) {
                setValues({...values,["userId"]:response.data.userid,["userName"]:response.data.username,
                    ["Joindate"]:response.data.joindate,["email"]:response.data.email,

                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const FILTER_BY_OPTION = [{id: 'approved', label: 'Approved'},
        {id: 'pending', label: 'Pending'},
        {id: 'thisweek', label: 'This Week'}];
    const [filter, setFilter] = useState(FILTER_BY_OPTION[0].id);

    return (
        <div>
            <Page>
                <form
                    autoComplete="off"
                    noValidate
                >
                    <Paper>
                        <CardHeader
     
                            title="User Details"
                        />
                        <Divider/>
                        <CardContent>
                           
                           <Stack direction={'row'}>

                            <Grid
                                container
                                spacing={3}
                                md={6}
                                >
                              <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>UserID:</Typography>
                                        <Typography variant='body2'>{values.userId}</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={5.3}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>User
                                            Name:</Typography>
                                        <Typography variant='body2'>{values.userName}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={4.9}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>ProjectID:</Typography>
                                        <Typography variant='body2'>{values.projectid}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>

                                    <Stack direction={"row"} spacing={9.9}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Managed By:</Typography>
                                        <Typography variant='body2'></Typography>{values.managedby}
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>Join Date:</Typography>
                                        <Typography variant='body2'>{values.Joindate}</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={5.3}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>
                                            Email:</Typography>
                                        <Typography variant='body2'>{values.email}</Typography>
                                    </Stack>
                                </Grid>
                               


                               
                               
                            </Grid>      
                            <Grid
                               container
                               md={6}
                                spacing={3}
                                >
                              <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>Standard Annual:</Typography>
                                        <Typography variant='body2'>{values.userId}</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={5.3}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>User
                                        </Typography>
                                        <Typography variant='body2'>{values.userName}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={4.9}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>ProjectID:</Typography>
                                        <Typography variant='body2'>{values.projectid}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>

                                    <Stack direction={"row"} spacing={9.9}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Managed By:</Typography>
                                        <Typography variant='body2'></Typography>{values.managedby}
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>Join Date:</Typography>
                                        <Typography variant='body2'>{values.Joindate}</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={5.3}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>
                                            Email:</Typography>
                                        <Typography variant='body2'>{values.email}</Typography>
                                    </Stack>
                                </Grid>
                               


                               
                               
                            </Grid>
                                                </Stack>
                       
                        
                          

                                         
                        </CardContent>

                        <Divider/>
                        <ListToolBar filterSearcBy={filter} onFilterSearchBy={setFilter}
                                     searchByOptionList={FILTER_BY_OPTION}/>
                        <List
                            sx={{width: '100%', bgcolor: 'background.paper', maxHeight: 400, overflow: 'auto', mt: -3}}
                            aria-label="contacts"

                        >
                            {QUERIES_LIST.map(e => ListItemRender(e.id, e.title, e.description, handleClickOpen))}
                        </List>
                        <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={7} sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        pb: 2,
                                        pt:2,
                                    }}>
                                        <Button
                                            color="inherit"
                                            variant="contained"
                                            >
                                            Message User
                                        </Button>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                            >
                                            Delete User
                                        </Button>
                                        
                                    </Stack>
                                </Grid>
                    </Paper>
                </form>

            </Page>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                    >
                        <Stack direction={'row'} spacing={1}>
                            <Typography variant={'subtitle1'}>Subject</Typography>
                            <Typography variant={'body1'}> loremmdhufeu wehfuweuif</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={3}>
                            <Typography variant={'subtitle1'}>Body</Typography>
                            <Typography variant={'body1'}> lorem ipdnshfui hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb</Typography>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant={'contained'} color={'inherit'}>Reply</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SuperAdminUserDetail;

