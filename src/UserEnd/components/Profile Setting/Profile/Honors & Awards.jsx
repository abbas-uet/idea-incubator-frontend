import React from 'react'
import { Grid } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Stack} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const asso = ["Full-Time", "Part-Time", "Freelance", "Self-employed","Contract","Internship"];
const month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
const year=[];
for(let i=2022;i>=1922;i--){
  year.push(i);
}
export default function HonorsAndAwards() {
    const [values, setValues] = useState({
        title: "",
        issuer: "",
        associate:"",
        description:"",
        Month:"",
        Year:"",
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
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={values.title}
          fullWidth
        />
    </Grid>

    <Grid item md={12}>
     
        <Box sx={{ minWidth: 223 }}>
          <FormControl fullWidth size="small" sx={{ minWidth: 300 }}>
            <InputLabel id="demo-simple-select-label">Associated with</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name="associate"
              value={values.associate}
              onChange={handleChange}
              input={<OutlinedInput label="Please Select" />}
              MenuProps={MenuProps}
            >
              {asso.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
    </Grid>
    <Grid item md={12}>
        <TextField
          id="outlined-basic"
          label="Issuer"
          name="issuer"
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={values.issuer}
          fullWidth
        />
    </Grid>

   
   
    <Grid md={12}>

    <Stack direction={'row'} alignItems={'center'}justifyContent='center' spacing={2} sx={{pb:2,mt:2}}>
      <Typography variant='body2'sx={{ fontWeight: "bold" ,minWidth:50 }}>Issue date</Typography>
          <Box sx={{minWidth:220}}>
          <FormControl fullWidth size="small"sx={{minWidth:150}}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name='Month'
              value={values.Month}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              >
              {month.map((name) => (
                <MenuItem
                key={name}
                value={name}
                
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

          <Box sx={{minWidth:220}}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Year
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                name='Year'
                value={values.Year}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                >
                {year.map((name) => (
                  <MenuItem
                  key={name}
                  value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
                </Stack>
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
