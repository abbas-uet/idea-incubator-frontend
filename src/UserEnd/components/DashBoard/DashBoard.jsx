import {Grid} from '@mui/material'
import React from 'react'
import StepperCard from './StepperCard.jsx'
import TaturialList from './TaturialsList.jsx'
import VisionCard from './VisionCard.jsx'
import CalenderCard from './CalenderCard.jsx'
import NotificationList from './NotificationFromus';
import MeetingLinks from './MeetingLinks.jsx'

export default function DashBoard() {
  return (
    <Grid container sx={{ display: 'flex' }} justifyContent='center'  >
      <Grid item sx={{ maxWidth: 330, minwidth: 330 }}>
        <StepperCard />
        <CalenderCard />
      </Grid>
      <Grid item sx={{ maxWidth: 670, minWidth: 670 }} flex justifyContent='center'>
        <VisionCard />
        <NotificationList />
      </Grid>
      <Grid item sx={{ maxWidth: 340, minWidth: 340 }}>
        <TaturialList />
        <MeetingLinks />
      </Grid>
    </Grid>
  )
}
