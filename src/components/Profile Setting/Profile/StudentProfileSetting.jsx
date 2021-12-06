import React from 'react'
import {Grid} from '@material-ui/core'
// import ForStudent from './ForStudent'
import { makeStyles } from '@material-ui/core'
import ForMentors from './ForMentors'
// import ForIndustry from './FarIndustry'

const useStyle=makeStyles({
    container:{
        marginTop:'15px'
    }
})
export default function ProfileSetting() {
const classes=useStyle()


    return (
        <Grid container>
        <Grid item xs={0} sm={3}></Grid>  
        <Grid item xs={12} sm={6} className={classes.container}>
        {/* <ForStudent/> */}
        {/* <ForIndustry/> */}
        <ForMentors/>
        </Grid>
        <Grid item xs={0} sm={3}></Grid>  
         </Grid> 
    )
}

