import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useNavigate, useParams} from 'react-router-dom';
import {Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, Typography} from '@mui/material';
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


import {deepOrange} from '@mui/material/colors';
import Stack from "@mui/material/Stack";
import {AvatarGroup} from "@mui/lab";


import ListToolBar from '../ListToolBar';
import {getThreeTableAllById} from "../../../../../ApiServices/getData";
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
            <ListItemIcon sx={{mt:0}}>
                <FiberManualRecordIcon sx={{fontSize: 10}}/>
            </ListItemIcon>
            <ListItemText primary={

                    <Typography variant={'subtitle2'}>{title}</Typography>

               
            } secondary={<Typography variant={'body1'} sx={{
                display: "block",
                width: "910px",
                whiteSpace: "nowrap",
                overflow: "hidden"
            }}>{body}</Typography>}/><Typography sx={{mt:2}}>{"..."}</Typography>
            
        </ListItemButton>
    </ListItem>;
}


function UserDetails() {

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
        userId: '',
        userName: '',
        email: '',
        subUsers: [],
        projectName: '',
    });

    useEffect(async () => {
        const response = await getThreeTableAllById("user", 'idea', "subuser", id);
        if (response.status === 200) {
            setValues({
                ...values, ["userId"]: response.data.userid, ["userName"]: response.data.username,
                ["Joindate"]: response.data.joindate, ["email"]: response.data.email,
                ['subUsers']: response.data.SubUsers,
                ['projectName']: response.data.Idea && response.data.Idea.projectname,
            })
        } else {
            console.log(response.data);
        }
    }, [])


    const [statusCode,setStatusCode]=useState({cond:false,res:0});
    const handleDelete=async ()=>{
        const response = await deleteSingle('user', values.userId);
        if (response.status === 200) {
            setStatusCode({...statusCode,['cond']:true,["res"]:200})
            setTimeout(function(){
                navigate('/admin/dashboard/user')
            }, 1500);
        } else {
            setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
        }
    }

    const handleMessage=()=>{

    }




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
                        sx={{ml:1}}
                            title="User profile"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={12}>
                                <Stack direction={"row"} spacing={9.5}>

                                <Typography variant='body2' sx={{ml:1, fontWeight:'bold'}}>UserId:</Typography>
                                <Typography variant='body2'>{values.userId}</Typography>
                                </Stack>
                                </Grid>
                                
                                <Grid item md={12}>
                                <Stack direction={"row"} spacing={6}>
                                <Typography variant='body2' sx={{ml:1, fontWeight:'bold'}}>User Name:</Typography>
                                <Typography variant='body2'>{values.userName}</Typography>
                                </Stack>
                                </Grid>
                                
                                <Grid item md={12}>
                                <Stack direction={"row"} spacing={10.5}>

                                <Typography variant='body2' sx={{ml:1, fontWeight:'bold'}}>Email:</Typography>
                                <Typography variant='body2'>{values.email}</Typography>
                                </Stack>
                                </Grid>
                               
                                <Grid item md={12}>

                                <Stack direction={"row"} spacing={4}>

                                <Typography variant='body2' sx={{ml:1, fontWeight:'bold'}}>Project Name:</Typography>
                                <Typography variant='body2'>{values.projectName}</Typography>
                                </Stack>
                                </Grid>
                               
                                <Grid
                                    item
                                    md={5}
                                    xs={12}
                                    sx={{ml:1}}
                                >
                                    <Stack direction={"row"} spacing={6}>
                                        <Typography variant={'subtitle2'} sx={{mt: 1}}>
                                            Sub Users:
                                        </Typography>
                                        <AvatarGroup max={4}>
                                            {values.subUsers.map(e=>{
                                                return <Avatar key={e.SubUserid} sx={{bgcolor: deepOrange[500]}} color={'secondary'}>
                                                    {e.fullname[0]}
                                                </Avatar>
                                            })}
                                        </AvatarGroup>

                                    </Stack>

                                </Grid>
                                <Grid item
                                      md={6}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        p: 1,
                                        marginTop:5
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
                                            Delete User
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
            {statusCode.cond&&(
                statusCode.res===200?
                    <CustomSnackbar message={"Successfully Deleted the User"} type={'primary'}/>
                    :
                    <CustomSnackbar message={"Error While Deleting the User"} type={'error'}/>)}
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

export default UserDetails;

