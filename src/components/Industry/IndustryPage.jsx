import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper } from "@mui/material";
import Stack from '@mui/material/Stack';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import {
  Grid,
  Badge,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Checkbox,
  CardActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import SearchBar from "../Mentors/SearchBar/SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MentorIndustry from "../Utils/MentorIndustry";

export default function IndustryPage() {
  return (
      <Grid
        container
        spacing={1.5}
        direction={"row"}
      >
        <Grid item xs={12} md={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={12} md={5}>
          <SearchBar />
        </Grid>
        <Grid item xs={1} md={1}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            sx={{ textTransform: "none" }}
          >
            <FavoriteIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
        <Grid item xs={12} md={3}>
          <MentorIndustry/>
        </Grid>
      </Grid>
  );
}
