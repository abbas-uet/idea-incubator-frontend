import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pricing from './PricingPage/Pricing.jsx';
import Grid from '@mui/material/Grid';
import PaymentInformationForm from './AccountPaymentInformation/PaymentInformationForm.jsx';
import InvoiceHistory from './Invoice History/InvoiceHistory.jsx';
import DeleteAccountStepper from './DeleteAccount/DeleteAccountStepper.jsx';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AccountPayment() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container xs={12} >
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: 1070 }}>
                    <Tabs value={value} onChange={handleChange} centered >
                        <Tab label="Subscription Plan" {...a11yProps(0)} sx={{ textTransform: "none" }} />
                        <Tab label="Payment Information" {...a11yProps(1)} sx={{ textTransform: "none" }} />
                        <Tab label="Invoice History" {...a11yProps(2)} sx={{ textTransform: "none" }} />
                        <Tab label="Delete Account" {...a11yProps(3)} sx={{ textTransform: "none" }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Pricing />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <PaymentInformationForm />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <InvoiceHistory />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DeleteAccountStepper />
                </TabPanel>
            </Box>
        </Grid>
    );
}
