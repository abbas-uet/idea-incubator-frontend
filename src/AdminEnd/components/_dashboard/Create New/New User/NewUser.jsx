import React from 'react';
import {TabContext, TabPanel} from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import InviteNewUser from "./InviteNewUser";
import {CreateNewUser} from "./CreateNewUser";
import {Box} from "@mui/system";

function NewUser(props) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{width: 470}}>
            <TabContext value={value}>
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"

                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label="Invite Users"/>
                    <Tab value="2" label="Create Users"/>
                </Tabs>
                <TabPanel value="1"><InviteNewUser/> </TabPanel>
                <TabPanel value="2"><CreateNewUser/></TabPanel>
            </TabContext>
        </Box>
    );
}

export default NewUser;