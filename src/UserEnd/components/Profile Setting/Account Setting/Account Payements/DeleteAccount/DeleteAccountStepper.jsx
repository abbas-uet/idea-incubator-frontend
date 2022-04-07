import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {Box, Button, Container} from '@mui/material';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import StepOne from './SetpOne.jsx';
import StepTwo from './StepTwo.jsx';
import StepThree from './StepThree.jsx';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(178, 37, 217) 0%, rgb(211, 37, 217) 50%, rgb(135, 4, 94) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(178, 37, 217) 0%, rgb(211, 37, 217) 50%, rgb(135, 4, 94) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(178, 37, 217) 0%, rgb(211, 37, 217) 50%, rgb(135, 4, 94) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(178, 37, 217) 0%, rgb(211, 37, 217) 50%, rgb(135, 4, 94) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <UnsubscribeIcon />,
        2: <AnnouncementIcon />,
        3: <ContactSupportIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function DeleteAccountStepper() {
    const [activeStep, setactiveStep] = useState(0);
    const moveForward = () => {
        setactiveStep(activeStep < 2 ? activeStep + 1 : activeStep);
    }
    const moveBackWard = () => {
        setactiveStep(activeStep > 0 ? activeStep - 1 : activeStep);
    }
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>

            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Container margin={2}>
                {activeStep === 0 ? <StepOne /> : activeStep === 1 ? <StepTwo /> : <StepThree />}
            </Container>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={moveBackWard}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={moveForward} color='warning' variant='outlined'>
                    {activeStep === steps.length - 1 ? 'Delete' : 'Next'}
                </Button>
            </Box>

        </Stack>
    );
}
