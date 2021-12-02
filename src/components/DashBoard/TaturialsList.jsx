import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Box } from '@mui/material';

const arr = [["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"]];
export default function TaturialList() {
    return (
        <Grid sx={{ maxWidth: 400, minWidth: 50 }} container justifyContent='center'>

            <Paper elevation={5} sx={{ m: 2 }}>
                <Box sx={{ m: 1 }}>
                    <Typography variant="h6" component="h6">Taturials</Typography>
                </Box>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto' }}>
                    {
                        arr.map((item) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item[0]} secondary={item[1]} />
                            </ListItem>
                        ))
                    }
                </List>

            </Paper>
        </Grid>
    );
}