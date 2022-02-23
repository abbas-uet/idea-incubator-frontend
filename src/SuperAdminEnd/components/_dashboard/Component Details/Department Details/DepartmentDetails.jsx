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
  ListItem,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
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
import { Icon } from "@iconify/react/dist/iconify";
import plusFill from "@iconify/icons-eva/plus-fill";
import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { arrayOf } from "prop-types";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const top100Films = [
    { title: 'Sehar Asghar'},
    { title: 'Abbas Ali'},
    { title: 'Bisma Asghar'},
    { title: 'Noor Rani' },
    { title: 'Hassan Ali' },
    { title: "Ayesha Kanwal"},
    { title: 'Rimsha Fayyaz' }]
  

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

function DepartmentDetails({ LIST }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const listObj = LIST[parseInt(id)];
  const [values, setValues] = useState({
    id: listObj.id,
    name: listObj.departmentname,
    noofadmins: listObj.noofadmins,
    selectedAdmin:[]
  });

  console.log(values);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [disabled, setdisabled] = React.useState(true);
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
            <CardHeader sx={{ ml: 1 }} title="Department Details" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <Stack direction={"row"} spacing={9.5} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Department ID:
                    </Typography>
                    <TextField
                    onChange={handleChange}
                      variant="outlined"
                      disabled={disabled}
                      name='id'
                      value={values.id}
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Stack direction={"row"} spacing={6.5} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      Department Name:
                    </Typography>
                    <TextField
                      variant="outlined"
                    onChange={handleChange}
                      disabled={disabled}
                      value={values.name}
                      name='name'
                      size="small"
                      
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Stack direction={"row"} spacing={10}>
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      No of Admins:
                    </Typography>
                    <TextField
                    onChange={handleChange}
                      value={values.noofadmins}
                      name='noofadmins'
                      variant="outlined"
                      disabled={disabled}
                      label='No of Admins'
                      size="small"
                    ></TextField>
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Autocomplete
                    sx={{pl:23,pr:11.5}}
                    multiple
                  
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    name="selectedAdmin"
                    disableCloseOnSelect
                    onChange={handleChange}
                    
                     getOptionDisabled={option=>values.selectedAdmin.length<=values.noofadmins?false:true}
                    disabled={disabled}
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        
                        disabled={disabled}
                        label="Checkboxes"
                       
                      />
                    )}
                  />
                </Grid>
                <Grid item md={6}></Grid>

                <Grid item md={6} xs={12}>
                  <Stack
                    direction={"row"}
                    spacing={4}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      pr: 4,
                    }}
                  >
                    <Button color="primary" variant="contained" onClick={()=>setdisabled(!disabled)}>
                      {disabled===true?'Update':'Save Changes'}
                    </Button>
                    <Button color="error" variant="outlined">
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color={"inherit"}
                      onClick={handleClickOpen}
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
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Contact</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description">
            <Stack direction={"row"} spacing={2} alignItems='center' mr={1}ml={1}mt={4}mb={4}>
              <Typography variant={"subtitle1"}>Admin:</Typography>
              <TextField variant="outlined" label='Enter Name' fullWidth></TextField>
            </Stack>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{m:0.5}}>
          <Button onClick={handleClose} variant={"contained"} color={"inherit"}>
            Contact
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DepartmentDetails;
