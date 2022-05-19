import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {Outlet} from "react-router-dom";

import Grid from "@mui/material/Grid";
import ScrollToTop from "../AdminEnd/components/ScrollToTop";
import Navbar from './Navbar/Navbar';

function MentorIndustryIndex({role}) {


    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];

    return (
        <>
            <ScrollToTop />

            <LocalizationProvider dateAdapter={DateFnsAdapter}>
                {role==='industry'?
                <Navbar settings={settings} page={'industry'}/>:
                    <Navbar settings={settings} page={'mentor'}/>
                }
                <Grid sx={{mt:10}}>
                    <Outlet/>
                </Grid>
            </LocalizationProvider>
        </>
    );
}

export default MentorIndustryIndex;