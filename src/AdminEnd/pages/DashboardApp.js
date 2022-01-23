import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import MentorGraph from '../components/_dashboard/app/MentorGraph';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppCurrentVisits,
  AppCurrentSubject,
} from '../components/_dashboard/app';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppItemOrders />
          </Grid>
        
          <Grid item xs={12} sm={6} md={4}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MentorGraph/>
          </Grid>
          

          

         

         

          

         

          
        </Grid>
      </Container>
    </Page>
  );
}
