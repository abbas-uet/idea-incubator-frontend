import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { TextField, ListItemAvatar, styled, Badge, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import FabButton from "../../../../../Mentor IndustryEnd/Profile/FabButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const Input = styled("input")({
  display: "none",
});

function NewTalent({values,setValues}) {
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div>
      <Grid
        container
        alignItems={"center"}
        justifyContent="center"
        spacing={3}
        sx={{ mt: 2, mb: 2 }}
      >
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Add Image:
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar>
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      color="secondary"
                      variant="contained"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera fontSize="inherit" />
                    </IconButton>
                  </label>
                </SmallAvatar>
              }
            >
              <Avatar sx={{ width: 150, height: 150 }}>
                <PersonIcon sx={{ fontSize: "8rem" }} />
              </Avatar>
            </Badge>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography>
              Student Name:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
              name="name"
              onChange={handleChange}
              value={values.name}
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Registration #:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="rollNo"
                onChange={handleChange}
                value={values.rollNo}
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography>
              Gender:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="gender"
                onChange={handleChange}
                value={values.gender}
                label=""
                variant="outlined"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography>
              Department:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="department"
                onChange={handleChange}
                value={values.department}
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography>
              Session:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="session"
                onChange={handleChange}
                value={values.session}
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Email:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="email"
                onChange={handleChange}
                value={values.email}
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Skills:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="skills"
                onChange={handleChange}
                value={values.skills}
                label=""
                variant="outlined"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Languages:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="languages"
                onChange={handleChange}
                value={values.languages}
                label=""
                variant="outlined"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Certifications:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="certifications"
                onChange={handleChange}
                value={values.certifications}
                label=""
                variant="outlined"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item md={3}>
            <Typography >
              Experience:
            </Typography>
          </Grid>

          <Grid item md={8}>
            <TextField
                name="experience"
                onChange={handleChange}
                value={values.experience}
                label=""
                variant="outlined"
                size="small"
                fullWidth
            />
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default NewTalent;
