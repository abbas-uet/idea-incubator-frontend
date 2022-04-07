import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
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
            <Grid item xs={0} sm={1}></Grid>
            <Grid item xs={12} sm={10} className={classes.container} >
                <IndustryPage />
            </Grid>
            <Grid item xs={0} sm={1}></Grid>
        </Grid>
    )
}


