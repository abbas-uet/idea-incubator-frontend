import { Grid } from '@mui/material'
import React from 'react'
import StepperCard from './StepperCard.jsx'
import TaturialList from './TaturialsList.jsx'
import VisionCard from './VisionCard.jsx'

export default function DashBoard() {
  return (
    <Grid container sx={{ display: 'flex' }} justifyContent="space-evenly">
      <Grid item>
        <StepperCard />
      </Grid>
      <Grid item >
        <VisionCard />
      </Grid>
      <Grid item>
        <TaturialList />
      </Grid>
    </Grid>
  )
}
