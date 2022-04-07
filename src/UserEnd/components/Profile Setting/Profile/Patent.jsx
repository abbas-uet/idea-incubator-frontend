import React from 'react'
import { Grid } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
export default function Patent() {
    const [value, setValue] = React.useState(null);
    const [radio, setradio] = React.useState('Patent issued');
    const handleChangeradio = (event) => {
      setradio(event.target.value);
    };
    const [values, setValues] = useState({
        title: "",
        no: "",
        URL:"",
        description:"",
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
  return (
    <Grid container spacing={3} justifyContent="center">
    <Grid item md={12}>
        <TextField
          id="outlined-basic"
          label="Patent title"
          name="title"
          placeholder="Ex: Techniques for ascribing..."
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={values.title}
          fullWidth
        />
    </Grid>

    <Grid item md={12}>
        <TextField
          id="outlined-basic"
          label="Patent or Application no"
          name="no"
          placeholder="Ex: US 9229900"
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={values.no}
          fullWidth
        />
    </Grid>
    <Grid item md={12} sx={{pb:0}}>
    <FormControl>
      <Typography variant="body1">Status</Typography>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radio}
        onChange={handleChangeradio}
        >
        <FormControlLabel value="Patent issued" control={<Radio />} label="Patent issued" />
        <FormControlLabel value="Patent pending" control={<Radio />} label="Patent pending" />
      </RadioGroup>
    </FormControl>
          </Grid>
    <Grid item md={12}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={radio==='Patent issued'?'Issue date':'Filing date'}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth size='small'/>}
      />
    </LocalizationProvider>
    </Grid>

   


   
 
   
    <Grid item md={12}>
     <TextField
       id="outlined-basic"
       label="Patent URL"
       name="URL"
       variant="outlined"
       size="small"
       onChange={handleChange}
       value={values.URL}
       fullWidth
       />
 </Grid>       
   
    <Grid item md={12}>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          placeholder='Write Something'
          multiline
          fullWidth
          minRows={3}
          size="small"
          name="description"
          onChange={handleChange}
          value={values.description}
        />
    </Grid>
   
  </Grid>
  )
}
