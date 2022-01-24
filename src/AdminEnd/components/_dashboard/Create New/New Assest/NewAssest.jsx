import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import BurstModeIcon from "@mui/icons-material/BurstMode";

import PhotoCamera from "@mui/icons-material/PhotoCamera";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar, Card, Checkbox } from "@mui/material";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const top100Films = [
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Satursday" },
  { title: "Sunday" },
];
const Input = styled("input")({
  display: "none",
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function NewAssest() {
  const [values, setValues] = useState({
    emails: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleIncreaseCounter = () => {
    if (counter >= 0) {
      let c = counter;
      setcounter(++c);
    }
  };
  const handleDecreaseCounter = () => {
    if (counter > 0) {
      let c = counter;
      setcounter(--c);
    }
  };

  const [startTimevalue, setstartTimeValue] = React.useState(null);
  const [endTimevalue, setendTimeValue] = React.useState(null);
  const [counter, setcounter] = React.useState(0);
  const [Datevalue, setDateValue] = React.useState([null, null]);
  return(
  <Grid container alignItems={"center"} justifyContent="center" spacing={3}>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
    
      <Typography variant="body1" fontWeight={"fontWeightBold"}>
        Add Images:
      </Typography>
    </Grid>

    <Grid item container justifyContent="center" md={8}>
<div>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
              <SmallAvatar>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="span"
                  >
                  <PhotoCamera />
                </IconButton>
              </label>
            </SmallAvatar>
          }
          >
          <Avatar variant="rounded" sx={{ width: 150, height: 150 }}>
            <BurstModeIcon sx={{ width: 100, height: 100 }} />
          </Avatar>
        </Badge>
            </div>
    </Grid>
    </Grid>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
      <Typography
    
        variant="body1"
        fontWeight={"fontWeightBold"}
      >
        Add Type:
      </Typography>
    </Grid>

    <Grid item md={8}>
      <TextField name="fullName" label="" variant="outlined" size="small" fullWidth />
    </Grid>
    </Grid>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
      <Typography
        variant="body1"
        fontWeight={"fontWeightBold"}
      >
        Add Category:
      </Typography>
    </Grid>

    <Grid item md={8}>
      <TextField name="fullName" label="" variant="outlined" size="small" fullWidth/>
    </Grid>
    </Grid>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
      <Typography  variant="body1" fontWeight={"fontWeightBold"}>
        Add Timing:
      </Typography>
      </Grid>
      <Grid item md={8}>
      <Stack direction='row' spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Start"
          size="small"
          value={startTimevalue}
          onChange={(newValue) => {
            setstartTimeValue(newValue);
          }}
          renderInput={(params) => (
            <TextField size="small" sx={{ maxWidth: "170px" }} {...params} />
          )}
        />
      </LocalizationProvider>
      <Typography variant="body1" sx={{ pt: 1 }}>
        to
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="End"
          size="small"
          value={endTimevalue}
          onChange={(newValue) => {
            setendTimeValue(newValue);
          }}
          renderInput={(params) => (
            <TextField size="small" sx={{ maxWidth: "140px" }} {...params} />
          )}
        />
      </LocalizationProvider>
      </Stack>
    </Grid>
    </Grid>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
      <Typography
        variant="body1"
        fontWeight={"fontWeightBold"}
      >
        Add Quantity:
      </Typography>
      </Grid>
      <Grid item md={8}>
          <Stack direction='row' spacing={1}>

        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleDecreaseCounter}
          >
          <RemoveCircleOutlineIcon sx={{ mt: 1 }} />
        </IconButton>

        <Typography variant="h6" sx={{ pt: 2 }}>
          {counter}
        </Typography>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
         
          onClick={handleIncreaseCounter}
          >
          <AddCircleOutlineIcon sx={{ mt:1 }} />
        </IconButton>
            </Stack>
      </Grid>
      </Grid>
      <Grid item container justifyContent="space-around" alignItems="center">

      <Grid item md={3}>
      <Typography
        variant="body1"
        fontWeight={"fontWeightBold"}
        >
        Add Days:
      </Typography>
      </Grid>
      <Grid item md={8}>

      <Autocomplete

multiple
id="checkboxes-tags-demo"
size="small"
sx={{ maxWidth: "355px"}}
options={top100Films}
disableCloseOnSelect
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
            <TextField size="small" {...params} label="Select" />
            )}
            />
            </Grid>
            </Grid>
            <Grid item container justifyContent="space-around" alignItems="center">

     <Grid item md={3}>
      <Typography
        variant="body1"
        fontWeight={"fontWeightBold"}
      >
        Add Description:
      </Typography>
</Grid>
<Grid item md={8}>

      <TextField
        size="small"
        fullWidth
        name="fullName"
        multiline={true}
        label="Write Something..."
        maxRows={3}
        minRows={3}
        onChange={handleChange}
        required
        value={values.fullName}
        variant="outlined"
        />
        </Grid>
        </Grid>
    <Grid item container justifyContent="space-around" alignItems="center">

    <Grid item md={3}>

      <Typography
        
        variant="body1"
        fontWeight={"fontWeightBold"}
        >
        Add Location:
      </Typography>
          </Grid>
          <Grid item md={8}>
      <TextField size="small" name="fullName" label="" variant="outlined" fullWidth/>
</Grid>
            </Grid>
  </Grid>);}
