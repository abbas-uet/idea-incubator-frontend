import React, {useEffect, useState} from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import {Outlet,useParams} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import ScrollToTop from "../AdminEnd/components/ScrollToTop";
import {getTableSingle} from "../ApiServices/getData";

function UserIndex(props) {
    const {roleId}=useParams();
    const pages = [['Home','home'],['Mentors','mentors'], ['Industry','industry'], ['Assest','assest'],['Idea Pool','ideaPool'],['Talent Pool','talentPool'],['Help','help']];
    const settings = [['Account Setting','studentAccountSettings'],['Log Out','studentProfileSettings'], ];
    const [data,setdata]=useState({});
    useEffect(async () => {
        const response = await getTableSingle('user',roleId);
        if (response.status === 200) {
            setdata(response.data);
        } else {
            console.log(response.status);
        }
    },[]);
    return (
        <>
            <ScrollToTop />

        <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <Navbar settings={settings} pages={pages} name={data.fullname} id={roleId}/>
                <Grid sx={{mt:8}}>
                    <Outlet/>
                </Grid>
        </LocalizationProvider>
        </>
    );
}

export default UserIndex;