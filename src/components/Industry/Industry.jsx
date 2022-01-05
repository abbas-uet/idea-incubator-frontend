import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import IndustryPage from './IndustryPage'
const useStyle = makeStyles({
    container: {
        margin: '15px'
    }
})
export default function Industry() {
    const classes = useStyle()
    return (
        <Grid container>
        <Grid item xs={12} md={12} className={classes.container} >
         <IndustryPage/> 
        </Grid>
    </Grid>
    )
}


