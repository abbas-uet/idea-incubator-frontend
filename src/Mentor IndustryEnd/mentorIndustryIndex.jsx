import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {Outlet,useParams} from "react-router-dom";

import Grid from "@mui/material/Grid";
import ScrollToTop from "../AdminEnd/components/ScrollToTop";
import Navbar from './Navbar/Navbar';

function MentorIndustryIndex({role}) {

    const {roleId} =useParams();


    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];

    return (
        <>
            <ScrollToTop />

            <LocalizationProvider dateAdapter={DateFnsAdapter}>
                {role==='industry'?
                <Navbar settings={settings} page={'industry'} roleId={roleId}/>:
                    <Navbar settings={settings} page={'mentor'} roleId={roleId}/>
                }
                <Grid sx={{mt:10,ml:2,mb:2,mr:2}}>
                    <Outlet/>
                </Grid>
            </LocalizationProvider>
        </>
    );
}

export default MentorIndustryIndex;