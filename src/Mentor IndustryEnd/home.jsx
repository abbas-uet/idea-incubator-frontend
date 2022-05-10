import React from 'react';
import {Calender} from "./Calender/Calender";
import Grid from "@mui/material/Grid"


function Home({role}) {
    return (
        <Grid container  marginTop={5}>
            <Grid item xs={1} md={1}></Grid>
        {
            role==='mentor'?
        <Grid item xs={10} md={8} ><Calender/></Grid>:
            <div>Industry Home Here</div>
        }
            <Grid item xs={1} md={1}></Grid>
        </Grid>
    );
}

export default Home;