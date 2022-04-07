import React from "react";
import Grid from "@mui/material/Grid";
import {Avatar, Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}))
export default function ForStudent() {
  return (

    <Grid container justify="center" alignItems="center">
      <Grid item md={3} justifyContent='center'>
        <Box display="flex" alignItems="center" marginBottom={12} >
          <Badge overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<SmallAvatar>
              <EditIcon /></SmallAvatar>}
          >
            <Avatar sx={{ width: 200, height: 200 }}>
              <PersonIcon sx={{ fontSize: '50rem' }} />
            </Avatar>
          </Badge>
        </Box>
      </Grid>
      <Grid item md={9}>
        <Box textAlign="left" marginTop={2} padding={3}>
          <Grid container spacing="3">
            <Grid item xs={12} md={3}><TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={3}><TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Headline" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Current Location" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Email" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Project Name" variant="outlined" fullWidth /></Grid>
            <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Technology and tools" variant="outlined" multiline maxRows={4} fullWidth /></Grid>
            <Grid item xs={12} md={12}><TextField id="outlined-multiline-static" label="Project Description" variant="outlined" multiline maxRows={8} fullWidth /></Grid>
            <Grid item xs={12} md={12}><Typography variant="body2">Attach a Document in which detail of your Project is mentioned</Typography></Grid>
            <Grid item xs={12} md={12}><Button variant="contained" component="label">Attach File
              <input type="file" hidden size="large" /></Button></Grid>
          </Grid>
        </Box>
        <Box textAlign="right" marginBottom={3} paddingRight={3}><Button color="secondary" startIcon={<SaveIcon />} variant="contained" size="large">Save
        </Button></Box>
      </Grid>
    </Grid>
  );
}
