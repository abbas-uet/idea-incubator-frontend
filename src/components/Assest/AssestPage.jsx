import React from 'react'
import Pagination from '@mui/material/Pagination';
import { Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import SearchBar from "../Mentors/SearchBar/SearchBar";
import AssestsData from '../Utils/AssestsData';

export default function AssestPage() {
    return (
        <Grid container spacing={7}>
      <Grid item container xs={12} md={12} sx={{mb:4}} paddingLeft={0}>
          <Grid item xs={12} md={6} sx={{mt:2}}>
        <SearchBar title="Search by name" />
      </Grid>
      <Grid item xs={12} md={5}>
        <SearchBar title="Search by location" />
      </Grid>
      <Grid item xs={1} md={1}>
        <Button
          sx={{m:1}}
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ textTransform: "none" }}
        >
          <FavoriteIcon />
        </Button>
      </Grid>
      </Grid>
      <Grid item container spacing={3} xs={12} marginTop={2} marginBottom={2} >
        <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
      <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
      <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
      <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
      <Grid item xs={12} md={4}>
        <AssestsData/>
      </Grid>
          <Grid item container xs={12} justifyContent={'flex-end'}>
        <Pagination count={10} color="secondary"sx={{margin:2}} />
          </Grid>
      </Grid>
    </Grid>
    )
}
