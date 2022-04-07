import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import CastForEducationTwoToneIcon from '@mui/icons-material/CastForEducationTwoTone';
import {Box, Grid, ListItemButton, Typography} from '@mui/material';
import Divider from '@mui/material/Divider';

const arr = [["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"], ["React JS Complete Taturial", "Go and Check This out"]];
export default function TaturialList() {
    return (

        <Paper elevation={5} sx={{ mt: 2, ml: 1, mb: 1, mr: 1 }}  >
            <Grid container >
                <Box sx={{ m: 1 }}>
                    <Typography variant="h5" component="div">Taturials</Typography>
                </Box>
            </Grid>
            <Divider light />
            <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto' }} style={{ maxHeight: 490, overflow: 'auto' }}>
                {
                    arr.map((item, index) => (
                        <ListItemButton key={index} onClick={() => { console.log("You Clicked on ", index); }}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: '#fff', borderColor: 'secondary', }}>
                                        <CastForEducationTwoToneIcon color='secondary' />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item[0]} secondary={item[1]} />
                            </ListItem>
                        </ListItemButton>
                    ))
                }
            </List>

        </Paper>
    );
}