import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import ForStudent from './ForStudent'
import Paper from "@mui/material/Paper"
import Page from "../../../../SuperAdminEnd/components/Page";
import Container from "@mui/material/Container";
import ForMentors from "./ForMentors";

const useStyle = makeStyles({
    container: {
        marginTop: '15px',
        marginBottom: '15px'
    }
})
export default function ProfileSetting() {
    const classes = useStyle()
    return (
        <Page title={"Account Payment | Idea Incubator"} >
            <Container>
        <Paper elevation={22} >

            <Grid container justifyContent='center'  >
                <Grid item xs={12} sm={10} className={classes.container} sx={{ margin: 3, backgroundColor: 'white' }} >
                     <ForStudent />
                    {/* <ForIndustry /> */}
                    {/*<ForMentors />*/}
                </Grid>
            </Grid>
        </Paper>
            </Container>
        </Page>
    )
}


