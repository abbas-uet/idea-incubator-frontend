import React from 'react';
import {Link} from 'react-router-dom';
import {Typography,Breadcrumbs} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadCrumb({linkArr}) {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const breadCrumbs =(linkArr)=> {
        return (
            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
            <Link
                underline="hover"
                key="2"
                color="inherit"
                href=""
                onClick={handleClick}
            >
                Core
            </Link>,
            <Typography key="3" color="text.primary">
                Breadcrumb
            </Typography>);
    };
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >

        </Breadcrumbs>
    );
}

export default BreadCrumb;