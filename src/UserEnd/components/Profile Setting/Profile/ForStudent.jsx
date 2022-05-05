import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from 'react';
import {Avatar, Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';
import userimg from '../../../StaticAssets/userimg.jpg';
import {

  Stack,
  CardActions,
  Card,
  CardHeader,
  CardContent,
  Divider,

} from '@mui/material';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}))
const Input = styled('input')({
  display: 'none',
});
const user = {
  avatar: userimg,
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Sehar Asghar',
  timezone: 'GTM-7'
};

export default function ForStudent() {
  const [values, setValues] = useState({
    firstName: 'Sehar',
    lastName: 'Asghar',
    headline: '',
    email: 'seharasghar39@gmail.com',
    pname: '',
    tools: '',
    description:'',
    location: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
      <Grid container  spacing={2} >
        <Grid item xs={12} md={4}>

      <Card>
        <CardContent>
          <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
          >
            <Avatar
                src={user.avatar}
                sx={{
                  height: 150,
                  mb: 2,
                  width: 150
                }}
            />
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
            >
              {user.name}
            </Typography>
            <Typography
                color="textSecondary"
                variant="body2"
            >
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
                color="textSecondary"
                variant="body2"
            >
              {user.timezone}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>

          <Button color="primary" variant="text" component="label" fullWidth>Upload Picture
            <input type="file" accept={'image/*'} hidden size="large" /></Button>
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={12} md={8}>

        <form
            autoComplete="off"
            noValidate
        >
          <Card>
            <CardHeader
                subheader="The information can be edited"
                title="Profile"
            />
            <Divider />
            <CardContent>
              <Grid
                  container
                  spacing={3}
              >
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={values.firstName}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={values.lastName}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Headline"
                      name="headline"
                      onChange={handleChange}
                      required
                      value={values.headline}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      required
                      value={values.email}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Project Name"
                      name="pname"
                      onChange={handleChange}

                      value={values.pname}
                      variant="outlined"
                  />
                </Grid>

                <Grid
                    item
                    md={6}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Current Location"
                      name="location"
                      onChange={handleChange}
                      required
                      value={values.location}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Technology & Tools"
                      name="tools"
                      multiline
                      rows={3}
                      onChange={handleChange}
                      required
                      value={values.tools}
                      variant="outlined"
                  />
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                >
                  <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={3}
                      onChange={handleChange}
                      required
                      value={values.description}
                      variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={12}><Typography variant="body2">Attach a Document in which detail of your Project is mentioned</Typography></Grid>
                <Grid item xs={12} md={12}><Button color="inherit" variant="contained" component="label">Attach File
                  <input type="file" hidden size="large" /></Button></Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
            >
              <Button
                  color="primary"
                  variant="contained"
              >
                Save details
              </Button>
            </Box>
          </Card>
        </form>
        </Grid>

      </Grid>
  );
}
