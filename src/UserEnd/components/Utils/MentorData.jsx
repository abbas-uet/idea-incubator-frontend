import React from 'react'
import {Avatar, Card, CardActions, CardContent, Checkbox, Grid, Paper, Typography} from "@mui/material";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import userimg from '../../StaticAssets/userimg.jpg';
import {Link} from "react-router-dom";

export default function MentorData() {
  return (
    <Paper sx={{ ml: 1.2, mr: 1.2 }}>
      <Card>
        <Grid item container>
          <Grid item xs={9} md={9}>
            <Avatar
              variant="rounded"
              sx={{ height: "100px", width: "100px", mt: 2, ml: 2 }}
              src="https://www.kellyservices.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3pwSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7fe793d1c1dc380da4af424693aae9b6861912ab/pexels-andrea-piacquadio-733872.jpg"
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
            Sehar Asghar
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
              11am-1pm
            </Typography>
            </Grid>
            <Grid item md={6}>         <Button
              sx={{ ml: 4, mr: 1,mt:0 }}
              color="secondary"
              variant="outlined"
              size="small"
              LinkComponent={Link} to="viewMentors"
            >
              View Profile
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
