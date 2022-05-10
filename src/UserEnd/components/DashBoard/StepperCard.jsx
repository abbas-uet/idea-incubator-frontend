import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

const steps = [
  {
    label: 'Silver',
    description: `MemberShip with basic Functionality`,
  },
  {
    label: 'Gold',
    description: `MemberShip with Advance Functionality`,
  },
  {
    label: 'Platinium',
    description: `MemberShip with Extra Advance Functionality`,
  },
];

export default function StepperCard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleUpgrade = () => {
    console.log('You are going to update the Membership');
  }

  return (


    <Card  sx={{ mt: 2, ml: 1, mb: 1, mr: 1,height:'418px' }}>
      <Grid container sx={{ml:2,mt:2}}>
        <Grid item sx={{ m: 1 }}>
          <Typography variant="h6" component="div">Memberships</Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 2 }} textAlign='center'  >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
              <StepContent >
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="outlined"
                      color="secondary"
                       size='small'
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Upgrade' : 'Check Next'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Check Previous
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All MemberShips Viewed - you&apos;re finished</Typography>
            <Button  onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Check Again
            </Button>
          </Paper>
        )}
        <Box textAlign='center'>
          <Button variant="contained" size='small' color="info" onClick={handleUpgrade} sx={{ mb: 1 }} >
            Upgrade
          </Button>
        </Box>
      </Box>
    </Card>
  );
}