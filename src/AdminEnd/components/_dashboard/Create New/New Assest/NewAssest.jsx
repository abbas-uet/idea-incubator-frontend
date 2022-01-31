import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import IconButton from "@mui/material/IconButton";

import { Avatar, Card, Checkbox } from "@mui/material";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));
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
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
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
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return(
  <Grid container alignItems={"center"} justifyContent="center" spacing={3} sx={{mt:2,mb:2}}>
    <Grid item container justifyContent="space-around" alignItems="center">
    <Grid item md={3}>
    
      <Typography variant="body1" fontWeight={"fontWeightBold"}>
        Add Images:
      </Typography>
    </Grid>

    <Grid item md={8}>
          <Stack direction={"row"} spacing={3}>

          <Box sx={{ maxWidth: 280, flexGrow: 1 }}>

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
              <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
                )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
                )}
            Back
          </Button>
        }
        />
        </Box>
        <Stack direction={"column"} spacing={2} justifyContent="center"
  alignItems="center">

        <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="secondary"
                  variant="contained"    
                  aria-label="upload picture"
                  component="span"
                  >
                  <PhotoCamera fontSize="inherit" />
                </IconButton>
              </label>
              <IconButton
                  variant="contained"
                  aria-label="upload picture"
                  component="span"
                  >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
                    </Stack>
                    </Stack>
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
