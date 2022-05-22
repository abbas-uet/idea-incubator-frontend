import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Card, CardContent, Checkbox, Grid, Paper, Typography} from "@mui/material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import assest from '../../StaticAssets/assest.png'

export default function AssestsData({values}) {
    return (
        <Paper sx={{ml: 1.2, mr: 0.7}}>
            <Card>
                <Grid item container>
                    <Grid item xs={9} md={9}>
                        <Avatar
                            variant="rounded"
                            sx={{height: "100px", width: "100px", mt: 2, ml: 2}}
                            src={assest}
                            alt="Paella dish"
                        />
                    </Grid>
                    <Grid item xs={3} md={3} justifyContent={"center"}>
                        <Checkbox
                            sx={{mt: 1, ml: 3}}
                            icon={<FavoriteBorder/>}
                            checkedIcon={<Favorite color="error"/>}
                        />
                    </Grid>
                </Grid>
                <CardContent sx={{paddingBottom: 0}}>
                    <Typography component="div" variant="h6">
                        {values.name}
                    </Typography>

                    <Typography variant="subtitle2" fontWeight={"fontWeightBold"}>
                        {values.location}
                    </Typography>
                    <Grid item container direction="row" marginTop={0.5} spacing={1}>
                        <Grid item md={1}>
                            {" "}
                            <MiscellaneousServicesIcon/>
                        </Grid>
                        <Grid item md={5}>
                            {" "}
                            <Typography
                                color="text.secondary"
                                variant="body2"
                                component="div"
                            >
                                {values.specifications}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Button
                                sx={{ml: 3, mr: 1}}
                                color="secondary"
                                variant="outlined"
                                size="small"
                                LinkComponent={Link} to={"viewAssest/"+values.id}
                            >
                                Learn More
                            </Button>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Paper>
    );
}
