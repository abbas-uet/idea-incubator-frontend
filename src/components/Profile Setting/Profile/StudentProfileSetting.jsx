import React from 'react'
import { Grid } from '@material-ui/core'
import ForStudent from './ForStudent'
import { makeStyles } from '@material-ui/core'
import ForMentors from './ForMentors'
import ForIndustry from './FarIndustry'
import Paper from "@mui/material/Paper"

const useStyle = makeStyles({
    container: {
        marginTop: '15px',
        marginBottom: '15px'
    }
})
export default function ProfileSetting() {
    const classes = useStyle()


    return (
        <Paper elevation={22}>

            <Grid container justifyContent='center' >
                <Grid item xs={12} sm={10} className={classes.container} sx={{ margin: 2, backgroundColor: 'white' }} >
                    {/* <ForStudent /> */}
                    {/* <ForIndustry /> */}
                    <ForMentors />
                </Grid>
            </Grid>
        </Paper>
    )
}


