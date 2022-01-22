import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {BrowserRouter, Route, Routes,Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Mentors from "./components/Mentors/Mentors";
import Industry from "./components/Industry/Industry";
import Assest from "./components/Assest/Assest";
import Help from "./components/Help/Help";

function UserIndex(props) {
    const pages = [['Home','home'],['Mentors','mentors'], ['Industry','industry'], ['Assest','assest'],['Idea Pool','ideaPool'],['Talent Pool','talentPool'],['Help','help']];
    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];

    return (
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <Navbar settings={settings} pages={pages}/>
                <Grid sx={{mt:8}}>
                    <Outlet/>
                </Grid>
        </LocalizationProvider>
    );
}

export default UserIndex;