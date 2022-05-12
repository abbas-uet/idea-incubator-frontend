import React, {useState} from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  styled,
  TextField
} from "@mui/material";
import {Box} from "@mui/system";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FabButton from "./FabButton.jsx";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import WorkExperience from "./WorkExperience.jsx";
import Education from "./Education.jsx";
import LicenseorCertificate from "./LicenseorCertificate.jsx";
import VolunteerExperience from "./Volunteer Experience.jsx";
import Skills from "./Skills.jsx";
import Publication from "./Publication.jsx";
import Patent from "./Patent.jsx";
import HonorsAndAwards from "./Honors & Awards.jsx";
import Organization from "./Organization.jsx";
import Language from "./Language.jsx";

import userimg from '../../../StaticAssets/userimg.jpg';
import Typography from "@mui/material/Typography";


const user = {
  avatar: userimg,
  city: 'Sahiwal',
  country: 'Punjab',
  jobTitle: 'Senior Developer',
  name: 'Noor-ul-kamishkah',
  timezone: 'GTM-7'
};

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));




const CustomDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function ForMentors() {
  const [values, setValues] = useState({
    firstName: 'Noor',
    lastName: 'Rani',
    headline: '',
    email: 'noor39@gmail.com',
    officeLocation: 'Lahore',
    officeHours: '',
    aboutme:'',
    location: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [open, setOpen] = React.useState(false);
  const [pagename, setpagename] = React.useState("");
  const scroll = "paper";

  const handleClickOpen = (pageName) => {
    console.log("You clicked on Scroll Dialog");
    setOpen(true);
    setpagename(pageName);
  };

  const handleClose = () => {
    setOpen(false);
    setpagename("");
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
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
                        label="Office Location"
                        name="officeLocation"
                        onChange={handleChange}

                        value={values.officeLocation}
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
                        label="Office Hours"
                        name="officeHours"
                        onChange={handleChange}
                        required
                        value={values.officeHours}
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
                        label="About Me"
                        name="aboutme"
                        multiline
                        rows={3}
                        onChange={handleChange}
                        required
                        value={values.aboutme}
                        variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <List dense={true}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Work Experience"
                            secondary="List your work history like contracts or internships"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton
                              popUpFunction={handleClickOpen}
                              pageName={"Work Experience"}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <WorkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Education"
                            secondary="1 school on your profile"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton
                              popUpFunction={handleClickOpen}
                              pageName={"Education"}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Licences and certificate"
                            secondary="Showcase your expertise with your credentials"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton
                              popUpFunction={handleClickOpen}
                              pageName={"License/Certificate"}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Volunteer Experience"
                            secondary="Higlight your passions and how you like to give back"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton
                              popUpFunction={handleClickOpen}
                              pageName={"VolunteerExperience"}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Skills"
                            secondary="Showcase your strengths as a professional"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton
                              popUpFunction={handleClickOpen}
                              pageName={"Skills"}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Languages"
                            secondary="Show how you can be a fit for a job "
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen} />
                        </ListItemSecondaryAction>
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen}
                                     pageName={"Language"}/>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Organization"
                            secondary="Show your involvement with communities"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen}
                                     pageName={"Organization"} />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Honors and awards"
                            secondary="Feature the recognition you've eraned"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen}
                                     pageName={"Honors & Awards"} />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Patents"
                            secondary="Showcase your innovation and expertise"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen}
                                     pageName={"Patent"} />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Publication"
                            secondary="List your published work and get found 7x more"
                        />
                        <ListItemSecondaryAction sx={{ paddingRight: 5 }}>
                          <FabButton popUpFunction={handleClickOpen}
                                     pageName={"Publication"} />
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Grid>
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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add {pagename}
        </CustomDialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {pagename === "Work Experience" ? (
              <WorkExperience />
            ) : pagename === "Education" ? (
              <Education />
            ) : pagename === "License/Certificate" ? (
              <LicenseorCertificate />
            ) : pagename === "VolunteerExperience" ? (
              <VolunteerExperience />
            ) : pagename === "Skills" ? (
                <Skills />
            ) : pagename === "Language" ? (
                  <Language/>
            ) : pagename === "Organization" ? (
                  <Organization/>
            ) : pagename === "Honors & Awards" ? (
                  <HonorsAndAwards/>
            ) : pagename === "Patent" ? (
                  <Patent />
            ) : pagename === "Publication" ? (
                  <Publication />
            ) : (
              "nothing"
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ m: 1 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
