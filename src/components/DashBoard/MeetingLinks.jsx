import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function MeetingLinks() {
    return (
        <Paper elevation={5} sx={{ mt: 2, ml: 1, mb: 1, mr: 1 }}>
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Quick Links
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis, voluptatum numquam et tempore, saepe rem optio quos itaque culpa corporis magni. Consequatur sapiente libero nulla, odio fugit hic impedit?
                    </Typography>
                </CardContent>

                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant='contained' color='secondary' size="medium">Meet Up</Button>
                </CardActions>
            </Card>
        </Paper>
    );
}
