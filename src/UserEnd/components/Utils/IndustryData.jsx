import React from "react";
import {Avatar, Card, CardContent, Checkbox, Grid, Paper, Typography} from "@mui/material";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";


export default function IndustryData() {
  return (
    <Paper sx={{ ml: 1.2, mr: 1.5 }}>

      <Card >
        <Grid item container>
          <Grid item xs={9} md={9}>
            <Avatar
              variant="rounded"
              sx={{ height: "100px", width: "100px", mt: 2, ml: 2 }}
              src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
            Google
          </Typography>

          <Typography
            variant="subtitle2"
            fontWeight={"fontWeightBold"}
          >
            Lahore,Pakistan
          </Typography>
          <Grid item container direction="row" marginTop={0.5} spacing={1} >
            <Grid item md={1}>  <MiscellaneousServicesIcon /></Grid>
            <Grid item md={5}>             <Typography
              color="text.secondary"
              variant="body2"
              component="div"
            >
              Training |Funding| Equity
            </Typography>
            </Grid>
            <Grid item md={6}>         <Button
              sx={{ ml: 3, mr: 1, pl:1 }}
              color="secondary"
              variant="outlined"
              size="small"
            >
              View Profile
            </Button>
            </Grid>
          </Grid>
        </CardContent>

      </Card>

    </Paper>
  )
}
