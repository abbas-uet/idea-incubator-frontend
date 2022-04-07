import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import IdeaPage from './IdeaPage'
import Page from "../../../AdminEnd/components/Page";

const useStyle = makeStyles({
    container: {
        margin: '15px'
    }
})
export default function IdeaPool() {
    const classes = useStyle()
    return (
        <Page>
        <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10} className={classes.container} >
            <IdeaPage />
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
    </Grid>
        </Page>
    )
}
