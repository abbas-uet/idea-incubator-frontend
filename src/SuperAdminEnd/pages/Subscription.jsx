import React from 'react';
import Page from "../components/Page";
import {Button, Paper} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {purple} from '@mui/material/colors'
import {Link} from 'react-router-dom';
import Pricing from "../utils/Pricing Page/Pricing";


const tiers = [
    {
        title: 'Basic',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support']

    },
    {
        title: 'Standard',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ]

    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],

    },
];


function Subscription(props) {

    return (
        <Page>
            <Button variant="contained" color='inherit' sx={{mb: 5,ml:3}} LinkComponent={Link}
                    to={'/superadmin/dashboard/subscriptions/create'}
            >Create Subscription</Button>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Pricing/>

                </Grid>

            </Grid>
        </Page>
    );
}

export default Subscription;
