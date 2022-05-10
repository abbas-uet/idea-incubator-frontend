import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {Outlet} from "react-router-dom";

import Grid from "@mui/material/Grid";
import ScrollToTop from "../AdminEnd/components/ScrollToTop";
import Navbar from "../UserEnd/components/Navbar/Navbar";

function MentorIndustryIndex({role}) {

    const mentorPages = [['Home','home'],['MeetUp','meetup']];
    const industryPages=[['Home','home'],['Webinar','webinar']]
    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];

    return (
        <>
            <ScrollToTop />

            <LocalizationProvider dateAdapter={DateFnsAdapter}>
                {role==='industry'?
                <Navbar settings={settings} pages={industryPages}/>:
                    <Navbar settings={settings} pages={mentorPages}/>
                }
                <Grid sx={{mt:8}}>
                    <Outlet/>
                </Grid>
            </LocalizationProvider>
        </>
    );
}

export default MentorIndustryIndex;