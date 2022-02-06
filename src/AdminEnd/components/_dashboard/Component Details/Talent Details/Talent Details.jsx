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


function TalentDetails({LIST}) {
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
        userId: listObj.id,
        name: listObj.name,
        email: listObj.email,
        regno: listObj.regno,
        skill: listObj.skill,
        session: listObj.session,
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
                            sx={{ml:1}}
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
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Student Name:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={5} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Roll #:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.regno}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={7} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Department:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={3} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Session:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.session}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={11.9} alignItems={"center"}>
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
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={5.2} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Skills:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.skill}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={9}>
                  <Stack direction={"row"} spacing={7.3} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Languages:
                    </Typography>
                    <TextField
                    sx={{pr:0.5}}
                      variant="outlined"
                      fullWidth
                      disabled={disabled}
                      label={values.skill}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={9}>
                  <Stack direction={"row"} spacing={6.3} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Certification:
                    </Typography>
                    <TextField
                    sx={{pr:0.5}}
                      variant="outlined"
                      fullWidth
                      disabled={disabled}
                      label={values.skill}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Stack direction={"row"} spacing={7.1} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Experience:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.skill}
                      multiline
                      minRows={3}
                      sx={{ width: "590px" }}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                                        
                               
                                
                               
                                
                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        p: 1,
                                        mr:2,
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
                                            Delete Talent
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

export default TalentDetails;

