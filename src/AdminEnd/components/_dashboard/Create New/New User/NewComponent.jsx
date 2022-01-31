import React from 'react';
import {TabContext, TabPanel} from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import InviteNewComponent from "./InviteNewComponent";
import {CreateNewComponent} from "./CreateNewComponent";
import {Box} from "@mui/system";

function NewComponent({pageName}) {
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
                    <Tab value="1" label={"Invite " + pageName}/>
                    <Tab value="2" label={"Create " + pageName}/>
                </Tabs>
                <TabPanel value="1"><InviteNewComponent/> </TabPanel>
                <TabPanel value="2"><CreateNewComponent/></TabPanel>
            </TabContext>
        </Box>
    );
}

export default NewComponent;