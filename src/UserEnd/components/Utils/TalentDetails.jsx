import React from 'react';
import {Grid} from "@material-ui/core";
import {Avatar, Card, Checkbox, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {makeStyles} from '@material-ui/core'
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Autocomplete from "@mui/material/Autocomplete";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import userimg from "../../StaticAssets/userimg.jpg"
import {useNavigate} from "react-router-dom";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import MentorDetails from "./MentorDetails";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'rgba(252, 252, 252, 1)'
            : 'rgba(0, 0, 0, 1)',


    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const useStyle = makeStyles({
    container: {
        margin: '15px',
        marginBottom: '15px'
    },
    acc:{
        marginTop: '1',
        marginRight: '4'
    }
})







function TalentDetails(props) {
    const navigate = useNavigate();
    const classes = useStyle()





    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid container>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={12} sm={8} className={classes.container} >
                <Paper sx={{ mt: 4, ml: 1.2, mr: 0.7 }}>
                    <Card>
                        <CardHeader sx={{ ml: 6,mb:1 }} title="Talent Details" />
                        <Divider />
                        <Grid item container>
                            <Grid item xs={5} md={5} justifyContent='center'>
                                <Avatar
                                    variant="rounded"
                                    sx={{height: "210px", width: "210px", ml: 9, mt: 5, mr: 5, mb: 4}}
                                    src={userimg}
                                    alt="Paella dish"
                                />
                            </Grid>
                            <Grid item xs={7} md={7}>

                                <Typography variant='body1' sx={{ mr: 4, mt: 9 }}>
                                    <b>Name:</b> Bisma Asghar
                                </Typography>
                                <Typography variant='body1' sx={{ mr: 4, mt: 1 }}>
                                    <b>Session:</b> 2018-2022
                                </Typography>
                                <Typography variant='body1' sx={{ mr: 4, mt: 1 }}>
                                    <b>Department:</b> Computer Science
                                </Typography>
                                <Typography variant='body1' sx={{ mr: 4, mt: 1 }}>
                                    <b>Roll #:</b> 2018-CS-85
                                </Typography>
                                <Typography variant='body1' sx={{ mr: 4, mt: 1 }}>
                                    <b>Email:</b> bismaasghar3@gmail.com
                                </Typography>


                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box mr={9} ml={9} mt={1}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography> Experience</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                            <Typography>Skills</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                            <Typography>Languages</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography>Certificates</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>









                                </Box>
                            </Grid>
                            <Button
                                sx={{ mr: 4, mt: 4,mb:6,ml:77 }}
                                color="secondary"
                                variant="outlined"
                                size="Medium"
                                onClick={() => navigate(-1)}>
                                Back
                            </Button>
                            <Button
                                sx={{ mr: 4, mt: 4,mb:6 }}
                                color="secondary"
                                variant="contained"
                                size="Medium">
                                Contact
                            </Button>
                        </Grid>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={0} sm={2}></Grid>
        </Grid>
    );
}
export default TalentDetails;