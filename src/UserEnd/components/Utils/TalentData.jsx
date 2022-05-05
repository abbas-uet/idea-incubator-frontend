import React from 'react'
import {Avatar, Card, CardActions, CardContent, Checkbox, Grid, Paper, Typography} from "@mui/material";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import userimg from '../../StaticAssets/userimg.jpg';
import {Link} from "react-router-dom";

export default function TalentData() {
    return (
        <Paper sx={{ ml: 1.2, mr: 1.2 }}>
            <Card>
                <Grid item container>
                    <Grid item xs={9} md={9}>
                        <Avatar
                            variant="rounded"
                            sx={{ height: "100px", width: "100px", mt: 2, ml: 2 }}
                            src={userimg}
                            alt="Paella dish"
                        ></Avatar>
                    </Grid >
                    <Grid item xs={3} md={3} justifyContent={"center"}>
                        <Checkbox
                            sx={{ mt: 1, ml: 3 }}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite color="error" />}
                        />
                    </Grid>
                </Grid>
                <CardContent sx={{ paddingBottom: 0 }}>
                    <Typography
                        component="div"
                        variant="h6"
                    >
                        Bisma Asghar
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        fontWeight={"fontWeightBold"}
                    >
                        Computer Science Dept
                    </Typography>
                    <Grid item container direction="row" marginTop={0.5} spacing={1} >
                        <Grid item md={1}>  <MiscellaneousServicesIcon /></Grid>
                        <Grid item md={5}>             <Typography
                            color="text.secondary"
                            variant="body2"
                            component="div"
                        >
                            PF |OOP| Data Structure
                        </Typography>
                        </Grid>
                        <Grid item md={6}>         <Button
                            sx={{ ml: 3, mr: 1 }}
                            color="secondary"
                            variant="outlined"
                            size="small"
                            LinkComponent={Link} to="viewTalent"
                        >
                            Learn More
                        </Button>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Paper>
    )
}
