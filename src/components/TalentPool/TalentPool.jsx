import { Grid, Paper } from '@mui/material'
import React from 'react'
import TalentPoolProfileCard from './TalentPoolProfileCard/TalentPoolProfileCard.jsx'


export default function TalentPool() {
    return (

        <Grid container marginTop={8} paddingLeft={3} paddingRight={3} justifyContent='center' spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard name={'Abbas Ali'} age={'21'} city={'Lahore'} followers={'23.5k'}
                likes={'32.1k'} photos={'43.1k'} /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><TalentPoolProfileCard /></Grid>


        </Grid>
    )
}
