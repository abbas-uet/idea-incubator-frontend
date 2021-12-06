import React from "react";
import { Button,Card,Grid,Avatar,List,ListItem,ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { TextField,ListItemAvatar,styled,Badge  } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));
export default function ForMentors() {
  return (
    <Grid container alignItems="center">
      <Card>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
          m={1}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <SmallAvatar>
                <EditIcon />
              </SmallAvatar>
            }
          >
            <Avatar sx={{ width: 200, height: 200 }}>
              <PersonIcon sx={{ fontSize: "11rem" }} />
            </Avatar>
          </Badge>
        </Box>
        <Box textAlign="left" marginTop={2} padding={3}>
          <Grid container spacing="3">
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Headline"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Office Location"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Office Hours"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="About me"
                variant="outlined"
                fullWidth
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
            <List
      sx={{
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
            <Avatar>
            <ImageIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work Experience" secondary="List your work history like contracts or internships" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Education" secondary="1 school on your profile" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Licences and certificate" secondary="Showcase your expertise with your credentials" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Volunteer Experience" secondary="Higlight your passions and how you like to give back" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Skills" secondary="Showcase your strengths as a professional" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Languages" secondary="Show how you can be a fit for a job " />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Organization" secondary="Show your involvement with communities" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Honors and awards" secondary="Feature the recognition you've eraned" />
      </ListItem>
      <ListItem
>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Patents" secondary="Showcase your innovation and expertise" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Publication" secondary="List your published work and get found 7x more" />
      </ListItem>
    </List>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="right" marginBottom={3} paddingRight={3}>
          <Button
            color="secondary"
            startIcon={<SaveIcon />}
            variant="contained"
            size="large"
          >
            Save
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
