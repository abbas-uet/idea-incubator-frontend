import React from 'react';
import Link from '@mui/material/Link';
import {Typography, Breadcrumbs} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadCrumb({linkArr}) {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small"/>}
            aria-label="breadcrumb"
        >
            {linkArr.map((e, idx, arr) => {
                if (idx == arr.length - 1) {
                    return (<Typography key="3" color="text.primary">
                        {e}
                    </Typography>)
                } else {
                    return (<Link
                        underline="hover"
                        key="2"
                        color="inherit"
                        href="/"
                        onClick={handleClick}
                    >
                        {e}
                    </Link>)
                }
            })}
        </Breadcrumbs>
    );
}

export default BreadCrumb;