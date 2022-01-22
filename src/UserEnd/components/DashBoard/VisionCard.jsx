import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import image from "../../StaticAssets/visionCardImage.svg"

export default function VisionCard() {
  return (
    <Paper elevation={5} sx={{ mt: 2, ml: 1, mb: 1, mr: 1 }}>
      <Card sx={{ display: 'flex', backgroundColor: '#fff', maxwidth: 400, minWidth: 200 }}>
        <Box sx={{ width: '70%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h5" component="div">
              Idea Incubator
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero ipsam quod sapiente, non
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero ipsam quod sapiente, non
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero ipsam quod sapiente, non
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="svg"
          sx={{ width: "30%", height: "30%" }}
          image={image}
          alt="Colabration"
        />
      </Card>
    </Paper>
  );
}
