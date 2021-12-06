import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box} from "@mui/system";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
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
        <Card>
        <Box display="flex" justifyContent="center" alignItems="center" padding={2}  m={1}>
        <Badge overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<SmallAvatar>
        <EditIcon /></SmallAvatar>}
      >
      <Avatar sx={{ width: 200, height: 200}}>
              <PersonIcon sx={{ fontSize: '11rem'}}/>
            </Avatar>
      </Badge>
          </Box>
          <Box textAlign="left" marginTop={2} padding={3}>
            <Grid container spacing="3">
              <Grid item xs={12} md={6}><TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={6}><TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Headline" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Current Location" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Project Name" variant="outlined" fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Project Description" variant="outlined" multiline maxRows={4} fullWidth/></Grid>
              <Grid item xs={12} md={12}><TextField id="outlined-basic" label="Technology and tools" variant="outlined" multiline maxRows={4} fullWidth/></Grid>
              <Grid item xs={12} md={12}><Typography variant="h6">Attach a Document in which detail of your Project is mentioned</Typography></Grid>
              <Grid item xs={12} md={12}><Button variant="contained"component="label">Attach File
               <input type="file" hidden size="large"/></Button></Grid>
            </Grid>
            </Box>
            <Box textAlign="right"marginBottom={3} paddingRight={3}><Button color="secondary" startIcon={<SaveIcon />}variant="contained" size="large">Save
            </Button></Box>
        </Card>
      </Grid>
  );
}
