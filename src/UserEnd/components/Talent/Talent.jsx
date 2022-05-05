import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import TalentPage from '../Talent/TalentPage'

const useStyle = makeStyles({
    container: {
        marginTop: '15px',
        marginBottom: '15px'
    }
})
export default function Talent() {
    const classes = useStyle()
    return (
        <Grid container>
            <Grid item xs={0} sm={1}></Grid>
            <Grid item xs={12} sm={10} className={classes.container} >
                <TalentPage/>
            </Grid>
            <Grid item xs={0} sm={1}></Grid>
        </Grid>
    )
}