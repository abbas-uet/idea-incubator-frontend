import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField} from "@mui/material";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import {styled} from '@mui/material/styles';
import userimg from '../../../StaticAssets/userimg.jpg';
import {getThreeTableAllById} from "../../../../ApiServices/getData";
import {useParams} from "react-router-dom";
import {UpdateSingleTableData} from "../../../../ApiServices/update";
import CustomSnackbar from "../../../../Utils/SnakBar";

const user = {
  avatar: userimg,
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Sehar Asghar',
  timezone: 'GTM-7'
};

export default function ForStudent() {
  const {id} = useParams()

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    email: '',
    projectname: '',
    tools: '',
    description:'',
    location: '',
    ideaId:'',
    profileId:''
  });

  useEffect(async () => {
    const response = await getThreeTableAllById("user","idea","profile", id);
    if (response.status === 200) {
      const namearr=response.data.fullname.split(' ');
      setValues({
        ...values,
        ['firstName']: namearr[0],
        ['lastName']: namearr[1],
        ['headline']: response.data.Idea&& response.data.Idea.headline,
        ['email']: response.data.email,
        ['projectname']: response.data.Idea&& response.data.Idea.projectname,
        ['tools']:  response.data.Idea&& response.data.Idea.technology,
        ['description']: response.data.Idea&& response.data.Idea.description,
        ['location']: response.data.UserProfile&&response.data.UserProfile.location,
        ['profileId']: response.data.UserProfile&&response.data.UserProfile.id,
        ['ideaId']: response.data.ideaId
      });
    } else {
      console.log(response.data);
    }
  }, [])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [statusCode,setStatusCode]=useState({cond:false,res:0});

  const handleSave=async()=>{
    const data={
      fullname:values.firstName+' '+values.lastName,
      email:values.email
    }
    const response=await UpdateSingleTableData('user',id,data);
    if(response.status===200){
      const data1={
        location:values.location,
      }
      const response1=await UpdateSingleTableData('userProfile',values.profileId,data1);
      if(response1.status===200){
        const data2={
          headline:values.headline,
          email:values.email,
          projectname:values.projectname,
          technology: values.tools,
          description:values.description
        }
        const response2=await UpdateSingleTableData('idea',values.ideaId,data2);
        if(response2.status===200){
          setStatusCode({...statusCode,['cond']:true,["res"]:200})
        }

      }
    }else{
      setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
    }
  }



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
                      name="projectname"
                      onChange={handleChange}

                      value={values.projectname}
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
                  onClick={handleSave}
              >
                Save details
              </Button>
            </Box>
          </Card>
        </form>
        </Grid>
        {(statusCode.cond? (statusCode.res===200?
            <CustomSnackbar message={"Successfully Saved the Details"} type={'primary'}/>
            :
            <CustomSnackbar message={"Error While Saving the Details"} type={'error'}/>):'')}

      </Grid>
  );
}
