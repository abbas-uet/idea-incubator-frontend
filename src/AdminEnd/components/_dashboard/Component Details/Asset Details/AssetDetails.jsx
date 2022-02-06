import React from "react";
import Page from "../../../Page";
import { useHistory, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  List,
  ListItemAvatar,
  ListItem,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {useTheme} from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import faker from "faker";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { deepOrange, green } from "@mui/material/colors";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { AvatarGroup } from "@mui/lab";

import ListToolBar from "../ListToolBar";
import { update } from "lodash";
const images = [
    {
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const QUERIES_LIST = [...Array(24)].map((_, index) => ({
  id: index,
  title: faker.name.lastName(),
  description: faker.lorem.paragraphs(),
}));
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ListItemRender(id, title, body, handleDialogueOpen) {
    
  return (
    <ListItem key={id} onClick={handleDialogueOpen}>
      <ListItemButton>
        <ListItemIcon>
          <FiberManualRecordIcon sx={{ fontSize: 10 }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Stack direction={"row"} spacing={1}>
              <Typography variant={"subtitle2"}>{title}</Typography>
              <ArrowRightIcon />
              <Typography
                variant={"body1"}
                sx={{
                  display: "block",
                  width: "750px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {body}
              </Typography>
            </Stack>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

function AssetDetails({ LIST }) {
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;


  const [open, setOpen] = React.useState(false);
  const [disabled, setdisabled] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const listObj = LIST[parseInt(id)];
  const [values, setValues] = useState({
    Type: listObj.type,
    Name: listObj.name,
    email: listObj.email,
    subUsers: listObj.subusers,
    projectName: listObj.projectname,
    description: listObj.description,
  });

  console.log(values);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const FILTER_BY_OPTION = [
    { id: "approved", label: "Approved" },
    { id: "pending", label: "Pending" },
    { id: "thisweek", label: "This Week" },
  ];
  const [filter, setFilter] = useState(FILTER_BY_OPTION[0].id);

  return (
    <div>
      <Page>
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader sx={{ ml: 1 }} title="Assest Detail" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
              <Grid item md={12}>
                  <Stack direction={"row"} spacing={9} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Image:
                    </Typography>
                    <Box sx={{maxWidth: 280, flexGrow: 1}}>

                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 200,
                                                    display: 'block',
                                                    maxWidth: 280,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft/>
                                        ) : (
                                            <KeyboardArrowRight/>
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight/>
                                        ) : (
                                            <KeyboardArrowLeft/>
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={9} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Name:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}>
                  <Stack direction={"row"} spacing={9.5} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Type:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={6.3} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Category:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}>
                  <Stack direction={"row"} spacing={6.3} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Location:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={5}>
                  <Stack direction={"row"} spacing={9.8} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Time:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={7}>
                  <Stack direction={"row"} spacing={9.5} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Days:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.Name}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Stack direction={"row"} spacing={4} alignItems={"center"}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Description:
                    </Typography>
                    <TextField
                      variant="outlined"
                      disabled={disabled}
                      label={values.description}
                      multiline
                      minRows={3}
                      sx={{ width: "640px" }}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
              

                <Grid item md={12} xs={12}>
                  <Stack
                    direction={"row"}
                    spacing={4}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr:4,
                    }}
                  >
                    <Button color="error" variant="outlined">
                      Delete
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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description">
            <Stack direction={"row"} spacing={1}>
              <Typography variant={"subtitle1"}>Subject</Typography>
              <Typography variant={"body1"}>
                {" "}
                loremmdhufeu wehfuweuif
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Typography variant={"subtitle1"}>Body</Typography>
              <Typography variant={"body1"}>
                {" "}
                lorem ipdnshfui hfuverhuif vhrufb sdvberub krbguierui ekvberubd
                bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb
                lorem ipdnshfui hfuverhuif vhrufb sdvberub krbguierui ekvberubd
                bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb
                lorem ipdnshfui hfuverhuif vhrufb sdvberub krbguierui ekvberubd
                bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb
              </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={"contained"} color={"inherit"}>
            Reply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AssetDetails;
