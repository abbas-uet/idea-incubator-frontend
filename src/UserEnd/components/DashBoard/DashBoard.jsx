import {Grid} from '@mui/material'
import React from 'react'
import StepperCard from './StepperCard.jsx'
import {MonthAgendaView} from './cale'
import TaturialList from './TaturialsList.jsx'

import CalenderCard from './CalenderCard.jsx'

import MeetingLinks from './MeetingLinks.jsx'

export default function DashBoard() {
  return (
    <Grid container sx={{ display: 'flex' }} justifyContent='center'  >
      <Grid item xs={12} md={4} lg={4} >

        <MonthAgendaView />
      </Grid>
      <Grid item xs={12} md={4} lg={4} flex justifyContent='center'>
          <MeetingLinks />
          <StepperCard />

      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <TaturialList />

      </Grid>
    </Grid>
  )
}
