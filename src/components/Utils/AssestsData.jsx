import React from "react";
import { Paper } from "@mui/material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Checkbox,
  CardActions,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
export default function AssestsData() {
  return (
    <Paper>
      <Card>
        <Grid item container>
          <Grid item xs={9} md={9}>
            <Avatar
              variant="rounded"
              sx={{ height: "100px", width: "100px", mt: 2, ml: 2 }}
              src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Paella dish"
            ></Avatar>
          </Grid>
          <Grid item xs={3} md={3} justifyContent={"center"}>
            <Checkbox
              sx={{ mt: 1, ml: 3 }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
          </Grid>
        </Grid>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography component="div" variant="h6">
            Dell Laptop
          </Typography>

          <Typography variant="subtitle2" fontWeight={"fontWeightBold"}>
            Lab1-CS Dept
          </Typography>
          <Grid item container direction="row" marginTop={0.5} spacing={1}>
            <Grid item md={1}>
              {" "}
              <MiscellaneousServicesIcon />
            </Grid>
            <Grid item md={5}>
              {" "}
              <Typography
                color="text.secondary"
                variant="body2"
                component="div"
              >
                RAM:4GB| Core i3|7th Generation
              </Typography>
            </Grid>
            <Grid item md={6}>
              {" "}
              <Button
                sx={{ ml: 3, mr: 1 }}
                color="secondary"
                variant="outlined"
                size="small"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Paper>
  );
}
