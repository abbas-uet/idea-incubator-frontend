import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useParams} from 'react-router-dom';
import {Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, Typography} from '@mui/material';
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
            <ListItemIcon sx={{mt: 0}}>
                <FiberManualRecordIcon sx={{fontSize: 10}}/>
            </ListItemIcon>
            <ListItemText primary={

                <Typography variant={'subtitle2'}>{title}</Typography>


            } secondary={<Typography variant={'body1'} sx={{
                display: "block",
                width: "910px",
                whiteSpace: "nowrap",
                overflow: "hidden"
            }}>{body}</Typography>}/><Typography sx={{mt: 2}}>{"..."}</Typography>

        </ListItemButton>
    </ListItem>;
}


function AdminDetails({LIST}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {id} = useParams()
    const [values, setValues] = useState({
        userId: "",
        userName: '',
        email: '',
        department: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/admins/view_admin/'+id)
            .then(function (response) {
                setValues({...values,["userId"]:response.data.id,["userName"]:response.data.username})
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
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
                    <Card>
                        <CardHeader
                            sx={{ml: 1}}
                            title="Admin Details"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>UserId:</Typography>
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
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Department:</Typography>
                                        <Typography variant='body2'>{values.department}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>

                                    <Stack direction={"row"} spacing={9.9}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Email:</Typography>
                                        <Typography variant='body2'></Typography>{values.email}
                                    </Stack>
                                </Grid>

                               

                               
                                            
                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
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
                                        >
                                            Delete Admin
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
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
                    </Card>
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
                        <Stack direction={'row'} spacing={1} marginBottom={2}>
                            <Typography variant={'subtitle1'}>Subject:</Typography>
                            <Typography variant={'body1'}> loremmdhufeu wehfuweuif</Typography>
                        </Stack>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant={'subtitle1'}>Body:</Typography>
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

export default AdminDetails;

