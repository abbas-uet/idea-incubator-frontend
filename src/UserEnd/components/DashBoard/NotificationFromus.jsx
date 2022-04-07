import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Badge, Box, Divider, IconButton, ListItem, ListItemText} from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Tooltip from '@mui/material/Tooltip';


export default function NotificationList() {
    const data = [
        {
            id: 1,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'error',
        },
        {
            id: 2,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'secondary',

        },
        {
            id: 3,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'info',

        },
        {
            id: 4,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'warning',

        },
        {
            id: 5,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'success',

        },
        {
            id: 6,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'warning',

        },
        {
            id: 7,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'primary',

        },
        {
            id: 8,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'secondary',

        },
        {
            id: 9,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'warning',

        },
        {
            id: 10,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'info',

        },
        {
            id: 11,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'success',

        },
        {
            id: 12,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'primary',

        },
        {
            id: 13,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'secondary',

        },
        {
            id: 14,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'primary',

        },
        {
            id: 15,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'primary',

        },
        {
            id: 16,
            "title": "We are here to get you help done with the different types of help you can get from us",
            'badgeContent': 'primary',

        }
    ];
    return (
        <Paper elevation={5} sx={{ mt: 2, ml: 1, mb: 1, mr: 1 }}>
            <Grid container>
                <Grid item sx={{ m: 1 }}>
                    <Typography variant="h5" component="div">{"News & Notifications"}</Typography>
                </Grid>
            </Grid>
            <Divider light />
            <List style={{ maxHeight: 523, overflow: 'auto' }} >
                {data.map(d => (
                    <Box key={d.id} sx={{ m: 2 }}>
                        <ListItem secondaryAction={
                            <Tooltip title="Read More">
                                < IconButton edge="end" aria-label="delete">
                                    <ReadMoreIcon color='secondary' />
                                </IconButton>
                            </Tooltip>

                        }>
                            <Badge badgeContent={"New"} color={d.badgeContent}>
                                <ListItemText primary={
                                    <Typography variant="body1">{d.title}</Typography>
                                } sx={{ maxWidth: 500 }} />
                            </Badge>
                        </ListItem>
                        <Divider />
                    </Box>
                ))
                }

            </List>
        </Paper >
    );
}
