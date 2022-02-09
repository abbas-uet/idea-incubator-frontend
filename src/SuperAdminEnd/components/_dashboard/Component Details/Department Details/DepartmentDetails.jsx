import React from 'react';
import Page from "../../../Page";
import {useHistory, useParams} from 'react-router-dom';
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
    List, ListItem
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
import {Icon} from "@iconify/react/dist/iconify";
import plusFill from "@iconify/icons-eva/plus-fill";


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


function DepartmentDetails({LIST}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {id} = useParams()
    const listObj = LIST[parseInt(id)];
    const [values, setValues] = useState({
        id: listObj.id,
        name: listObj.departmentname,
        noofadmins: listObj.noofadmins
    });

    console.log(values);

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
                    <Card>
                        <CardHeader
                            sx={{ml: 1}}
                            title="Idea Details"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9.5}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Id:</Typography>
                                        <Typography variant='body2'>{values.id}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9.5}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Department
                                            Name:</Typography>
                                        <Typography variant='body2'>{values.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={10}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>Admins:</Typography>
                                        <Typography variant='body2'>{values.noofadmins}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={6}></Grid>


                                <Grid item
                                      md={6}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        pr: 4
                                    }}>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color={'inherit'}
                                            onClick={handleClickOpen}
                                            startIcon={<Icon icon={plusFill}
                                            />}
                                        >
                                            Contact
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>


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

export default DepartmentDetails;

