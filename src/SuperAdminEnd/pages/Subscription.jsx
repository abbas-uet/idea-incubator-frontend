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
            <Button variant="contained" color='inherit' sx={{mb: 5}} LinkComponent={Link}
                    to={'/superadmin/dashboard/subscriptions/create'}
            >Create Subscription</Button>
            <Grid container spacing={2} alignItems="flex-end">
                {tiers.map(tier => (
                    <Grid item key={tier.title} xs={12} sm={6} md={4}>
                        <Paper elevation={5}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center', justifyContent: 'center'}}
                                    sx={{pb: 5}}
                                    sx={{bgcolor: purple[200]}}
                                />
                                <CardContent>
                                    <div>
                                        <Typography component="h2" variant="h5" color="textPrimary" sx={{ml: 12}}
                                                    marginBottom>
                                            ${tier.price} / month
                                        </Typography>

                                    </div>
                                    {tier.description.map(line => (
                                        <Typography variant="subtitle1" align="center" key={line} marginBottom>
                                            {line}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Page>
    );
}

export default Subscription;
