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


function IndustryDetails({LIST}) {
    const [open, setOpen] = React.useState(false);
    const [disabled, setdisabled] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {id} = useParams()
    const listObj = LIST[parseInt(id)];
    const [values, setValues] = useState({
        userId: listObj.id,
        userName: listObj.username,
        email: listObj.email,
        companyName: listObj.companyname,
        services: listObj.services,
    });

    console.log(values);

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
                            sx={{ml:1}}
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
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      ID:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.userId}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}></Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={8.2} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      User Name:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.userName}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}></Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={12.5} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Email:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.email}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}></Grid>
                <Grid item md={6}>
                  <Stack direction={"row"} spacing={4} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Company Name:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.companyName}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={6}></Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={10} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Services:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.services}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}></Grid>
                               
                                
                                
                                
                                
                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        mr:2,
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
                                            Delete Industry
                                        </Button>
                                        <Button color="primary" variant="contained" onClick={()=>setdisabled(!disabled)}>
                      {disabled===true?'Update':'Save Changes'}
                    </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>

                        
                       
                    </Card>
                </form>

            </Page>

        </div>
    );
}

export default IndustryDetails;

