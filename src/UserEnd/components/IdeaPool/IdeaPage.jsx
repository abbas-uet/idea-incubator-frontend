import React, {useEffect, useState} from 'react'
import {Grid, Pagination, Stack, TablePagination} from "@mui/material";
import './idea.css';
import SearchBar from "../Mentors/SearchBar/SearchBar";
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card'
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import {getTableData} from "../../../ApiServices/getData";
import TalentData from "../Utils/TalentData";
import IdeaData from "./IdeaData";

var array=[0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




export default function IdeaPage() {

    const [LIST, setLIST] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(async () => {
        const response = await getTableData('idea');
        if (response.status === 200) {
            setLIST(response.data);
        } else {
            console.log(response.status);
        }
    },[]);


    const [age, setAge] = React.useState('');

    const ishandleChange = (event) => {
        setAge(event.target.value);
    };
    const itemsPerPage = 10;
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
                                                        <th className="text-center" scope="col"/>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        LIST.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            .map((row) => {
                                                                return(
                                                                        <IdeaData values={row} />

                                                                );
                                                            })
                                                    }
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
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    size={'medium'}
                    count={LIST.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>

        </Grid>
    )
}