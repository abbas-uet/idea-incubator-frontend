import React from 'react'
import { Grid } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Publication() {
    const [value, setValue] = React.useState(null);
    const [values, setValues] = useState({
        title: "",
        publisher: "",
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
          label="Title"
          name="title"
          placeholder="Ex: Giving and receving feedback"
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
          label="Publication/Publisher"
          name="publisher"
          placeholder="Ex: Hardvard Business Review"
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={values.publisher}
          fullWidth
        />
    </Grid>
    <Grid item md={12}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Publication date"
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
       label="Publication URL"
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
