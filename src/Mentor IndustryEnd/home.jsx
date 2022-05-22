import React from 'react';
import {Calender} from "./Calender/Calender";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box";
import meet from "./../UserEnd/StaticAssets/meet.jpg";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {Link} from 'react-router-dom';
function Home({role}) {
    let color;
    return (
        <Grid container sx={{display: 'flex'}} justifyContent='center'>

            {
                role === 'mentor' ?
                    <Grid item xs={10} md={7} sx={{mr:3}}><Calender/></Grid> :
                    <Grid item xs={10} md={7} sx={{mr:3}}><Calender/></Grid>
            }
            <Grid item xs={4} md={3} sx={{mt:4,heigth:'100px'}} justifyContent={'center'} justifyItems={'center'} >
                <Card>
                    <CardMedia
                        component="img"
                        height="200"
                        sx ={{width:500,mb:2,mt:8}}
                        image={meet}
                        alt="green iguana"
                    />
                   <CardContent>

                    <Typography variant='h5' color={'secondary'}  sx={{ml:14,mb:1}}>Meetup</Typography>
                       <Typography variant='body2' sx={{ml:2,mb:4}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum doloremque error et exercitationem illum nisi                                          </Typography>
                    <Button variant={'contained'} color={'secondary'}sx={{ml:11}} LinkComponent={Link} to={'/mentor/meetup'} >Create Meeting</Button>
                   </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Home;