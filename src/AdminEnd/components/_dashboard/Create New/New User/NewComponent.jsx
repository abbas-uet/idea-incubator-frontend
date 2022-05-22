import React from 'react';
import {TabContext, TabPanel} from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import InviteNewComponent from "./InviteNewComponent";
import {CreateNewComponent} from "./CreateNewComponent";
import {Box} from "@mui/system";

function NewComponent({pageName,values,setValues,refValue,setRefValue}) {
    const handleChange = (event, newValue) => {
        setRefValue(newValue);
    };
    return (
        <Box sx={{width: 470}}>
            <TabContext value={refValue}>
                <Tabs
                    centered
                    value={refValue}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"

                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label={"Invite " + pageName}/>
                    <Tab value="2" label={"Create " + pageName}/>
                </Tabs>
                <TabPanel value="1"><InviteNewComponent values={values} setValues={setValues}/></TabPanel>
                <TabPanel value="2"><CreateNewComponent values={values} setValues={setValues}/></TabPanel>
            </TabContext>
        </Box>
    );
}

export default NewComponent;