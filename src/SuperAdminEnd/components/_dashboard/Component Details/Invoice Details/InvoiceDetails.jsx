import React, {useEffect} from "react";
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
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import faker from "faker";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
import axios from "axios";

const QUERIES_LIST = [...Array(24)].map((_, index) => ({
  id: index,
  title: faker.name.lastName(),
  description: faker.lorem.paragraphs(),
}));

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

function InvoiceDetails() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const [values, setValues] = useState({
    userId: '',
    invoiceid:'',
    userName: '',
    email: '',
    billingperson: '',
    duedate: '',
    createdon: ''
  });


    useEffect(() => {
        axios.get('http://localhost:5000/invoices/view_invoice/'+id)
            .then(function (response) {
                setValues({...values,["userId"]:response.data.userId,["userName"]:response.data.username,
                ["createdon"]:response.data.createdon,["duedate"]:response.data.duedate,
                ["invoiceid"]:response.data.invoiceid})
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


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
            <CardContent>
              <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    
                    <Button color="inherit" variant="contained">
                      Download PDF
                    </Button>
                  <Stack direction={'row'}spacing={10}paddingRight={5}>
      <FormControlLabel  labelPlacement="start"control={<Checkbox />} label={<Typography variant="subtitle2">Resend Invoice</Typography>}/>
      <FormControlLabel  labelPlacement="start"control={<Checkbox />} label={<Typography variant="subtitle2">Mark as Paid</Typography>} />
                      </Stack> 
   
                    <Button color="error" variant="outlined" onClick={handleClickOpen}>
                      Cancel Invoice
                    </Button>
                  </Stack>
                </Grid>
                <Grid item md={5}ml={1.5}>
                  <Stack direction={"row"} spacing={7.5}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Name:
                    </Typography>
                    <Typography variant="body2">

                    {values.userId}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={6} ml={1.5}>
                  <Stack direction={"row"} spacing={5}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Invoice #:
                    </Typography>
                    <Typography variant="body2">

                    {values.invoiceid}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={5} ml={1.5}>
                  <Stack direction={"row"} spacing={6}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Phone#:
                    </Typography>
                    <Typography variant="body2">

                    {values.billingperson}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={6} ml={1.5}>
                  <Stack direction={"row"} spacing={8.5}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Date:
                    </Typography>
                    <Typography variant="body2">

                    {values.createdon}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={5}ml={1.5}>
                  <Stack direction={"row"} spacing={9.1}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      City:
                    </Typography>
                    <Typography variant="body2">

                    {values.billingperson}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={6} ml={1.5}>
                  <Stack direction={"row"} spacing={5}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Due Date:
                    </Typography>
                    <Typography variant="body2">
                    {values.duedate}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={12}ml={1.5}>
                  <Stack direction={"row"} spacing={5.5}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Address:
                    </Typography>
                    <Typography variant="body2"> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati dignissimos explicabo,
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={12}ml={1.5}>
                  <Stack direction={"row"} spacing={3}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Description:
                    </Typography>
                    <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus dolore ratione inventore officia aspernatur, ut est vel adipisci perferendis architecto odio asperiores quo distinctio cupiditate maiores consequuntur sed ex facere dolorum quis quam deserunt sapiente. Ad quasi adipisci eum dolores vero nostrum, perferendis iure obcaecati exercitationem, ut libero aperiam.
                    </Typography>
                  </Stack>
                </Grid>
               
                
               
                
               
                
                
               
                      
                <Grid item md={12} xs={12}>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    
                    <Button color="primary" variant="contained">
                      Save 
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
                <DialogTitle id="scroll-dialog-title">Cancel Invoice</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                    >
                        <Grid item md={12}>
                              <Typography variant={'subtitle1'} gutterBottom>Reason:</Typography>
                            </Grid> 
                            <Grid item md={12}>
                            <Typography variant={'body1'}> lorem ipdnshfui hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb</Typography>
                                </Grid> 
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant={'contained'} color={'primary'}>Submit</Button>
                </DialogActions>
            </Dialog>
    </div>
  );
}

export default InvoiceDetails;
