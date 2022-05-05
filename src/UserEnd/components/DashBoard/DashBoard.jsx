import {Grid} from '@mui/material'
import React from 'react'
import StepperCard from './StepperCard.jsx'
import {MonthAgendaView} from './cale'
import TaturialList from './TaturialsList.jsx'
import VisionCard from './VisionCard.jsx'
import CalenderCard from './CalenderCard.jsx'
import NotificationList from './NotificationFromus';
import MeetingLinks from './MeetingLinks.jsx'

export default function DashBoard() {
  return (
    <Grid container sx={{ display: 'flex' }} justifyContent='center'  >
      <Grid item sx={{ maxWidth: 430, minwidth: 430 }}>

        <MonthAgendaView />
      </Grid>
      <Grid item sx={{ maxWidth: 570, minWidth: 570 }} flex justifyContent='center'>
          <MeetingLinks />
          <StepperCard />

      </Grid>
      <Grid item sx={{ maxWidth: 340, minWidth: 340 }}>
        <TaturialList />

      </Grid>
    </Grid>
  )
}
