import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import MentorPage from './MentorPage'
const useStyle = makeStyles({
    container: {
        marginTop: '15px',
        marginBottom: '15px'
    }
})
export default function Mentors() {
    const classes = useStyle()
    return (
        <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10} className={classes.container} >
         <MentorPage/> 
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
    </Grid>
    )
}
