import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function VisionCard() {
  return (
    <Grid sx={{ maxWidth: 550, minWidth: 200 }} container justifyContent='center'>
      <Paper elevation={5} sx={{ m: 2 }}>
        <Card sx={{ display: 'flex', backgroundColor: '#fff', maxwidth: 400, minWidth: 200 }}>
          <Box >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Idea Incubator
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero ipsam quod sapiente, non
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero ipsam quod sapiente, non
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="D:/Idea Incubator/idea-incubator-frontend/src/StaticAssets/visionCardImage.svg"
            alt="Colabration"
          />
        </Card>
      </Paper>
    </Grid>
  );
}
