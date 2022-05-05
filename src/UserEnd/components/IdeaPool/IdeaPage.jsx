import React from 'react'
import {Grid, ListItemButton, Pagination, Stack} from "@mui/material";
import  './idea.css';
import SearchBar from "../Mentors/SearchBar/SearchBar";
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import {Divider} from '@material-ui/core';

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
            <Grid item xs={12} md={6} sx={{ mt: 2,ml:1}}>
                <SearchBar title="Search by name" />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 2,ml:1}}>
                <SearchBar title="Search by Department" />
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={12} >
                <Card>



                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                          rel="stylesheet"/>

                    <div className="event-schedule-area-two bg-color pad100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        
                                        <Stack direction={'row'} justifyContent='space-between'>

                                            <Typography variant='h6' sx={{m:1,pt:2,pl:2}}> More Ideas</Typography>
                                            <Stack direction={'row'} >
                                                <Typography variant='body1'  sx={{m:1,pt:2,pl:2}}>Sort By:</Typography>
                                                <Box sx={{ minWidth: 120,mr:2 }}>
                                                    <FormControl fullWidth sx={{mt:1,mb:1,pt:1}}>
                                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            size={'small'}
                                                            value={age}
                                                            label="Select"
                                                            onChange={ishandleChange}
                                                        >
                                                            <MenuItem value={10}>Recent</MenuItem>
                                                            <MenuItem value={20}>A-Z</MenuItem>
                                                            <MenuItem value={30}>Type</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>

                                            </Stack>
                                        </Stack>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav custom-tab" id="myTab" role="tablist">




                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade active show" id="home" role="tabpanel">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th className="text-center" scope="col">Date</th>
                                                        <th scope="col">Founder</th>
                                                        <th scope="col">Ideas</th>
                                                        <th scope="col">Status</th>
                                                        <th className="text-center" scope="col"></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""/>

                                                                <h3>Abbas Ali</h3>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3>Be one's Eye</h3>
                                                                <div className="meta">

                                                                    <div className="time">
                                                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at blanditiis dolorum excepturi nemo provident vitae! Eveniet itaque perferendis <reprehenderit className="">             </reprehenderit></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Ongoing</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="outlined" size={'small'} sx={{width:100}}>Read More</Button>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>20</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""/>
                                                                <h3>M.Ahmed </h3>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3>MediKnow</h3>
                                                                <div className="meta">

                                                                    <div className="time">
                                                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda at enim recusandae voluptas? Eveniet!</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Completed</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="outlined" size={'small'} sx={{width:100}}>Read More</Button>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box border-bottom-0">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>18</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""/>
                                                                <h3>Dua Amir  </h3>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3>Instagram Clone</h3>
                                                                <div className="meta">

                                                                    <div className="time">
                                                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus est ipsa nisi sequi veniam vitae.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Pending</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="outlined" size={'small'} sx={{width:100}}>Read More</Button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel"
                                             aria-labelledby="profile-tab">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Speakers</th>
                                                        <th scope="col">Session</th>
                                                        <th scope="col">Venue</th>
                                                        <th scope="col">Venue</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Toni Duggan</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Harman Kardon</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box border-bottom-0">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Billal Hossain</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel"
                                             aria-labelledby="contact-tab">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Speakers</th>
                                                        <th scope="col">Session</th>
                                                        <th scope="col">Venue</th>
                                                        <th scope="col">Venue</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Harman Kardon</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Billal Hossain</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box border-bottom-0">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Toni Duggan</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="sunday" role="tabpanel"
                                             aria-labelledby="sunday-tab">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Speakers</th>
                                                        <th scope="col">Session</th>
                                                        <th scope="col">Venue</th>
                                                        <th scope="col">Venue</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Toni Duggan</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Harman Kardon</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box border-bottom-0">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Billal Hossain</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="monday" role="tabpanel"
                                             aria-labelledby="monday-tab">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Speakers</th>
                                                        <th scope="col">Session</th>
                                                        <th scope="col">Venue</th>
                                                        <th scope="col">Venue</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Harman Kardon</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>18</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Toni Duggan</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box border-bottom-0">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>20</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="event-img">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="event-wrap">
                                                                <h3><a href="#">Billal Hossain</a></h3>
                                                                <div className="meta">
                                                                    <div className="organizers">
                                                                        <a href="#">Aslan Lingker</a>
                                                                    </div>
                                                                    <div className="categories">
                                                                        <a href="#">Inspire</a>
                                                                    </div>
                                                                    <div className="time">
                                                                        <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="r-no">
                                                                <span>Room B3</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a className="btn btn-primary" href="#">Read More</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </Card>
            </Grid>


            <Grid item container xs={12} justifyContent={'flex-end'}>
                <Pagination count={10} color="secondary" sx={{ mb:2 }} />
            </Grid>

        </Grid>
    )
}