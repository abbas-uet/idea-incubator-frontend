import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import { Email } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function ProfileCard(props) {
    return (
        <Card sx={{ maxWidth: 350, sx: 6, minWidth: 250 }}>
            <CardActionArea sx={{ justifyContent: 'center', display: 'flex', alignItem: "center", direction: 'column' }}>
                <Avatar sx={{ width: 48, height: 48 }}>
                    <Email />
                </Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant='outlined' sx={{ borderRadius: 5, }} size="small" color="primary" fullWidth={true} LinkComponent={Link} to={"/studentProfileSettings"} onClick={props.closeFunction} >
                    View Profile
                </Button>
            </CardActions>
        </Card >
    );
}
