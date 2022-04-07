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
const type = ["Animal Welfare", "Arts and Culture", "Children", "Civil Rights and Social Action","Economic Empoowerment","Education","Enivronment","Health","Human Rights","Politics","Science and Technology"];
const month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
const year=[];
for(let i=2022;i>=1922;i--){
  year.push(i);
}

export default function VolunteerExperience() {
  const [values, setValues] = useState({
    organization: "",
    role: "",
    cause:"",
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
                label="Organization"
                name="organization"
                placeholder="Ex: Red Cross"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.organization}
                fullWidth
              />
          </Grid>
          <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Role"
                name="role"
                placeholder="Ex: Fundraising Volunteer"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.role}
                fullWidth
              />
          </Grid>
          <Grid item md={12}>
           
              <Box sx={{ minWidth: 223 }}>
                <FormControl fullWidth size="small" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Cause</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name="cause"
                    value={values.cause}
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

          <Grid item xs={9} sx={{
              display: "flex",
              mb:0,
              p: 1,
            }}>
            <FormControlLabel
            
              control={
                <Checkbox checked={toggleCancel} onChange={handleCancelChange} />
              }
              label="I am currently volunteering in this role"
            ></FormControlLabel>
          </Grid>
          <Grid item md={3}></Grid>
         
          <Grid md={12}>

          <Stack direction={'row'} alignItems={'center'}justifyContent='center' spacing={2} sx={{pb:1}}>
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
            {!toggleCancel && <Stack direction={'row'} alignItems={'center'}justifyContent='center' spacing={2} >
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
       
          </Grid>
                 
         
          <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                placeholder='Ex: I raised funds for our annual charity 5K'
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
