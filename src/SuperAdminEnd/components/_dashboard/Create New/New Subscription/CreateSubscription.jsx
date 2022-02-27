import { Card } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';
import { TextField,Typography } from '@mui/material';
import {useState} from 'react';
import { Stack,Button,CardContent } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { FormControl } from '@mui/material';
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
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




export default function CreateSubscription(props) {
  const theme = useTheme();
  const [values, setValues] = useState({
    name: '',
    amount: ''
});

const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value
    });
};
const [personName, setPersonName] = React.useState([]);

const HandleonChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};
  return (
      
                    <Card>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                                justifyContent='center'
                            >
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9}sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems:'center',
                                        p: 1,
   
                                    }}>

                                        <Typography variant='body2'
                                                    sx={{ml: 1, fontWeight: 'bold'}}>Plan Name</Typography>
                                        <TextField id="outlined-basic" label="Name" variant="outlined"  size='small' value={values.name}/>
                                    </Stack>
                                </Grid>
                               
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={5.3}sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems:'center',
                                        p: 1,
   
                                    }}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Plan Type</Typography>
                                        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth> 
      <InputLabel id="demo-simple-select-label"></InputLabel>                            
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={HandleonChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
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
                                    <Stack direction={"row"} spacing={4.9}>
                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Biling Period</Typography>
                                        <Typography variant='body2'>{values.department}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>

                                    <Stack direction={"row"} spacing={9.9}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Amount</Typography>
                                        <Typography variant='body2'></Typography>{values.email}
                                    </Stack>
                                </Grid>

                               

                               
                                            
                                <Grid item
                                      md={12}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        p: 1,
   
                                    }}>
                                        <Button
                                            color="inherit"
                                            variant="contained"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                        >
                                            Delete 
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
               
   
  )
}
