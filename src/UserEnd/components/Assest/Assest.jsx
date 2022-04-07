import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import AssestPage from './AssestPage'

const useStyle = makeStyles({
    container: {
        margin: '15px',
        marginBottom: '15px'
    }
})
export default function Assest() {
    const classes = useStyle()
    return (
        <Grid container justifyContent={'space-around'}>
        <Grid item xs={12} sm={10} className={classes.container} >
         <AssestPage/>
        </Grid>
    </Grid>
    )
}
