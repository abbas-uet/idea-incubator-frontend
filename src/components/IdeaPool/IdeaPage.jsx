import React from 'react'
import { Grid, ListItemButton} from "@mui/material";
import SearchBar from "../Mentors/SearchBar/SearchBar";
import { Pagination } from '@mui/material';
import { TableRow } from '@material-ui/core';
import { TablePagination } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { Divider } from '@material-ui/core';
var array=[0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




export default function IdeaPage() {
  const [age, setAge] = React.useState('');

  const ishandleChange = (event) => {
    setAge(event.target.value);
  };
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
      Math.ceil(array.length / itemsPerPage)
    );
  
    const handleChange = (event, value) => {
      setPage(value);
    };


    return (
        <Grid container xs={12} md={12} sx={{ mb: 4 }} spacing={4} justifyContent={'center'}>
          <Grid item md={2}></Grid>
        <Grid item xs={12} md={8} sx={{ mt: 2,ml:1}}>
          <SearchBar title="Search by name" />
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={10} >
        <Paper elevation={1}>
          <Stack direction={'row'} justifyContent='space-between'>

          <Typography variant='h6' sx={{m:1,pt:2,pl:2}}> More Ideas</Typography>
          <Stack direction={'row'}>
          <Typography variant='body1'  sx={{m:1,pt:2,pl:2}}>Sort By:</Typography>
          <FormControl>
          <Select
          value={age}
          size='small'
         sx={{width:100}}
          onChange={ishandleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={10}>Recent</MenuItem>
          <MenuItem value={20}>A-Z</MenuItem>
          <MenuItem value={30}>Type</MenuItem>
        </Select>
      </FormControl>
        
          </Stack>
          </Stack>
          <Divider/>
              <List
>
              { array.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
                <ListItem
                secondaryAction={
                  <Typography  variant='body2'>
                    Posted 10 min ago
                  </Typography>
                }disablePadding
                >
                  <ListItemButton onClick>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant='body1' fontWeight={"fontWeightBold"}>Idea Incubator</Typography>}
                    secondary ={<Typography variant='body2' sx={{maxWidth:600 ,paddingRight:10,marginRight:10}}>
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, minima? Error minus voluptatem repellat nostrum dolor quidem facere a sequi.'
                    </Typography>}
                    />
                    </ListItemButton>
                </ListItem>
              )}
            </List>
              </Paper>
              </Grid>
              <Grid item md={1}></Grid>
              <Divider/>
              <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          
        />
              
      </Grid>
    )
}

