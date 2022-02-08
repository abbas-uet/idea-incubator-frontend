import {Box, Grid, Container, Typography} from '@mui/material';
import Page from '../components/Page';

import {
    AppNewUsers,
    AppBugReports,
    AppItemOrders,
    AppCurrentVisits,
    AppCurrentSubject,
} from '../components/_dashboard/app';
import NotificationList from '../../UserEnd/components/Navbar/NotificationSection/NotificationList';
import NotificationSection from '../../UserEnd/components/Navbar/NotificationSection';

export default function SuperAdiminDashboardApp() {
    return (
        <Page title=" Super Admin Dashboard" sx={{mt:0}}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <AppNewUsers/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <AppItemOrders/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <AppBugReports/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={7}>
                        <AppCurrentVisits/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                        <AppCurrentSubject/>
                    </Grid>


                </Grid>
            </Container>
        </Page>
    );
}
