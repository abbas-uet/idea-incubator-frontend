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

import FabButton from "../../../../../UserEnd/components/Profile Setting/Profile/FabButton";
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

function NewTalent(props) {
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
              name="xyz"
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
              name="xyz"
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
              name="xyz"
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
              name="xyz"
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
              name="xyz"
              label=""
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Certification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
      </Grid>
      </Grid>
    </div>
  );
}

export default NewTalent;
