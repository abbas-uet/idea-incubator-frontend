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
const type = ["Full-Time", "Part-Time", "Freelance", "Self-employed","Contract","Internship"];
const month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
const year=[];
for(let i=2022;i>=1922;i--){
  year.push(i);
}

export default function WorkExperience() {
  const [values, setValues] = useState({
    name: "",
    location: "",
    employeetype:"",
    Companyname:"",
    description:"",
    headline:"",
    Industry:"",
    startM:"",
    startY:"",
    EndM:"",
    EndY:"",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
 
  

 


  const [toggleCancel, settoggleCancel] = React.useState(false);
  const handleCancelChange = (event) => {
    settoggleCancel(event.target.checked);
  };
    
  return (

        <Grid container spacing={3} justifyContent="center">
          <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                name="name"
                placeholder="Ex: Software Enginner"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.name}
                fullWidth
              />
          </Grid>

          <Grid item md={12}>
           
              <Box sx={{ minWidth: 223 }}>
                <FormControl fullWidth size="small" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Employment Type</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name="employeetype"
                    value={values.employeetype}
                    onChange={handleChange}
                    input={<OutlinedInput label="Please Select" />}
                    MenuProps={MenuProps}
                  >
                    {type.map((name) => (
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
                label="Company name"
                name="Companyname"
                placeholder="Ex: Netsol"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.Companyname}
                fullWidth
              />
          </Grid>
          <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Location"
                name="location"
                placeholder="Ex: Lahore,Pakistan"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.location}
                fullWidth
              />
          </Grid>
          <Grid item xs={9} sx={{
              display: "flex",
              mb:0,
              p: 1,
            }}>
            <FormControlLabel
            
              control={
                <Checkbox checked={toggleCancel} onChange={handleCancelChange} />
              }
              label="I am currently working in this role"
            ></FormControlLabel>
          </Grid>
          <Grid item md={3}sx={{mb:0}}></Grid>
         
          <Grid md={12}>

          <Stack direction={'row'} alignItems={'center'}justifyContent='center' spacing={2} sx={{pb:3}}>
            <Typography variant='body2'sx={{ fontWeight: "bold" ,minWidth:50 }}>Start date</Typography>
                <Box sx={{minWidth:220}}>
                <FormControl fullWidth size="small"sx={{minWidth:150}}>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name='startM'
                    value={values.startM}
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
                      name='startY'
                      value={values.startY}
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
                      <Grid item xs={12} md={12}>
            {!toggleCancel && <Stack direction={'row'} alignItems={'center'}justifyContent='center' spacing={2} sx={{pb:1}}>
            <Typography variant='body2'sx={{ fontWeight: "bold" ,minWidth:50 }}>End date</Typography>
                <Box sx={{minWidth:220}}>
                <FormControl fullWidth size="small"sx={{minWidth:150}}>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name='EndM'
                    value={values.EndM}
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
                      name='EndY'
                      value={values.EndY}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                      >
                      {console.log(year)}
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
                      </Stack>}
           {toggleCancel&&<>
           <Grid item md={12}sx={{pb:3}}>
           <TextField
             id="outlined-basic"
             label="Headline"
             name="headline"
             placeholder="Ex: Mentor"
             variant="outlined"
             size="small"
             onChange={handleChange}
             value={values.headline}
             fullWidth
             />
       </Grid>    
       <Grid item md={12}>
           <TextField
             id="outlined-basic"
             label="Industry"
             name="Industry"
             placeholder="Ex: Computer Science"
             variant="outlined"
             size="small"
             onChange={handleChange}
             value={values.industry}
             fullWidth
             />
       </Grid>
             </>
       }
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
