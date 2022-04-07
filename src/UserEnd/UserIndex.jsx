import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import ScrollToTop from "../AdminEnd/components/ScrollToTop";

function UserIndex(props) {
    const pages = [['Home','home'],['Mentors','mentors'], ['Industry','industry'], ['Assest','assest'],['Idea Pool','ideaPool'],['Talent Pool','talentPool'],['Help','help']];
    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];

    return (
        <>
            <ScrollToTop />

        <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <Navbar settings={settings} pages={pages}/>
                <Grid sx={{mt:8}}>
                    <Outlet/>
                </Grid>
        </LocalizationProvider>
        </>
    );
}

export default UserIndex;