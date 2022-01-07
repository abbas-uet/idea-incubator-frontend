import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import HistoryIcon from '@mui/icons-material/History';
import SubUsersMain from './SubUsers/SubUsersMain.jsx';
import Grid from '@mui/material/Grid';
import { purple } from '@mui/material/colors';
import AccountPayment from './Account Payements/AccountPayment.jsx';
import StudentProfileSetting from '../../Profile Setting/Profile/StudentProfileSetting.jsx'
import NotificationSettings from './NotificationSettings/NotificationSettings.jsx';
import AccountDetailsUser from './AccountDetails/AccountDetailsUser.jsx';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function StudentAccountSetting() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', ml: 1, mt: 10 }}
        >
            <Grid container spacing={1.5} justifyContent={'center'}>
                <Grid item xs={2}>
                    <Paper elevation={2.5} sx={{ bgcolor: '#1001' }} m={4}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="Vertical tabs example"
                            defaultValue={0}
                            sx={{ borderRight: 0, maxwidth: 290, minWidth: 200 }}
                        >

                            <Tab icon={<BadgeIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Account Details" labelStyle={{ float: 'left' }} {...a11yProps(0)} />
                            <Tab icon={<BadgeIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Profile Details" labelStyle={{ float: 'left' }} {...a11yProps(1)} />
                            <Tab icon={<GroupIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Sub Users" labelStyle={{ float: 'left' }}{...a11yProps(2)} />
                            <Tab icon={<CreditCardIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Account Billing" {...a11yProps(3)} />
                            <Tab icon={<EditNotificationsIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Notifications" {...a11yProps(4)} />
                            <Tab icon={<HistoryIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Account History" {...a11yProps(5)} />
                            <Tab icon={<BadgeIcon sx={{ mb: 0.5 }} />} iconPosition='start' sx={{ textTransform: "none", fontSize: 18, justifyContent: "flex-start" }} label="Item Seven" {...a11yProps(6)} />
                        </Tabs>
                    </Paper>
                </Grid>

                <Grid item container xs={10} >
                    <Paper elevation={2.5} sx={{ backgroundColor: purple[50], minWidth: 1070 }}>

                        <TabPanel value={value} index={0}>
                            <AccountDetailsUser />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <StudentProfileSetting />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <SubUsersMain />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <AccountPayment />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <NotificationSettings />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Five
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>
                    </Paper>
                </Grid>
            </Grid >
        </Box >
    );

}
