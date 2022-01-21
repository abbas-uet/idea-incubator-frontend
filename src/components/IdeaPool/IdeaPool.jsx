import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import IdeaPage from './IdeaPage'
const useStyle = makeStyles({
    container: {
        margin: '15px'
    }
})
export default function IdeaPool() {
    const classes = useStyle()
    return (
        <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10} className={classes.container} >
            <IdeaPage />
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
    </Grid>  
    )
}
