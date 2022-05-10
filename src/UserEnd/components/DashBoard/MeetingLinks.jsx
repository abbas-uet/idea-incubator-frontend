import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function MeetingLinks() {
    return (
        <Paper elevation={1} sx={{ mt: 3, ml: 1,  mr: 1 ,mb:1}}>
            <Card >

                    <Typography gutterBottom variant="h6" component="div" sx={{m:2,ml:3}}>
                        Quick Links
                    </Typography>



                <CardActions style={{ justifyContent: 'center'  }} sx={{mb:1}} >
                    <Button variant='contained' color='info' size="medium" sx={{mr:1}}>Contact Admin</Button>
                    <Button variant='contained' color='info' size="medium"sx={{mr:1}}>Contact Mentor</Button>
                    <Button variant='contained' color='info' size="medium">Contact Industry</Button>
                </CardActions>
            </Card>
        </Paper>
    );
}
