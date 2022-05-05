import React from "react";
import {Grid, Typography} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import SearchBar from '../Mentors/SearchBar/SearchBar'
import Slider from "@mui/material/Slider";
import TalentData from '../Utils/TalentData'
import MentorData from "../Utils/MentorData";
export default function TalentPage() {
    const [value, setValue] = React.useState([8, 16]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item container xs={12} md={12}>
                    <Grid item xs={12} md={6}>
                        <SearchBar title="Search by name / Department" />
                    </Grid>
                    <Grid item xs={12} md={5} sx={{mt:1}}>
                        <SearchBar title="Search by Skill " />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Button
                            sx={{  mb: 1, ml: 1 }}
                            variant="contained"
                            color="secondary"
                            disableElevation
                        >
                            <FavoriteIcon />
                        </Button>
                    </Grid>


                    {/* <Grid item xs={0.5} md={0.5}></Grid> */}


                </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container spacing={2} xs={12}  marginTop={4} marginBottom={2} >
                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TalentData />
                    </Grid>
                    <Grid item container xs={12} justifyContent={'flex-end'}>
                        <Pagination count={10} color="secondary" sx={{ margin: 2 }} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
