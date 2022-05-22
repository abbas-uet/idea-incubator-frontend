import React, {useEffect, useState} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {Avatar, Card, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useNavigate, useParams} from "react-router-dom";
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import {getTwoTableSingle} from "../../../ApiServices/getData";


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







function MentorDetails(props) {
    const navigate = useNavigate();
    const classes = useStyle()
    const {id} = useParams()

    const [values, setValues] = useState({
        id: '',
        name: '',
        username: '',
        email: '',
        field: '',
        timing: '',
        MentorProfile: '',
        MentorEducations: [],
        MentorHonors: [],
        MentorLanguages: [],
        MentorLicenses: [],
        MentorOrganizations: [],
        MentorPatents: [],
        MentorPublications: [],
        MentorSkills: [],
        MentorVolunteers: [],
        MentorWorkExperiences: []
    });

    useEffect(async () => {
        const response = await getTwoTableSingle("mentor", 'profile', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ["id"]: response.data.id,
                ['name']:response.data.name,
                ["username"]: response.data.username,
                ["timing"]: response.data.timing,
                ["email"]: response.data.email,
                ['field']: response.data.field,
                ["MentorProfile"]: response.data.MentorProfile,
                ["MentorEducations"]: response.data.MentorEducations,
                ["MentorHonors"]: response.data.MentorHonors,
                ["MentorLanguages"]: response.data.MentorLanguages,
                ["MentorLicenses"]: response.data.MentorLicenses,
                ["MentorOrganizations"]: response.data.MentorOrganizations,
                ["MentorPatents"]: response.data.MentorPatents,
                ["MentorPublications"]: response.data.MentorPublications,
                ["MentorSkills"]: response.data.MentorSkills,
                ["MentorVolunteers"]: response.data.MentorVolunteers,
                ["MentorWorkExperiences"]: response.data.MentorWorkExperiences
            });
        } else {
            console.log(response.data);
        }
    }, [])





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
                        <CardHeader sx={{ ml: 6,mb:1 }} title="Mentor Profile" />
                        <Divider />
                        <Grid item container>
                            <Grid item xs={5} md={5} justifyContent='center'>
                                <Avatar
                                    variant="rounded"
                                    sx={{height: "230px", width: "230px", ml: 9, mt: 5, mr: 5, mb: 4}}
                                    src="https://www.kellyservices.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3pwSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7fe793d1c1dc380da4af424693aae9b6861912ab/pexels-andrea-piacquadio-733872.jpg"
                                    alt="Paella dish"
                                />
                            </Grid>
                            <Grid item xs={7} md={7}>

                                <Typography variant='body2' sx={{ mr: 4, mt: 6 }}>
                                    <b>Name:</b> {values.name}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Headline:</b> {values.MentorProfile&& values.MentorProfile.headline}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Office Location:</b> {values.MentorProfile&& values.MentorProfile.location}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Office Hours:</b> {values.MentorProfile&& values.MentorProfile.timing}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Email:</b> {values.email}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 8, mt: 1 }}>
                                 <b>Description:</b>{values.MentorProfile&& values.MentorProfile.description}
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box mr={9} ml={9} mt={1}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Work Experience</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorWorkExperiences.map(e=>{
                                                    return(e.title+" | "
                                                        +e.employementType+
                                                        e.companyName+" | "
                                                        +e.location+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+" | "
                                                        +e.description+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Typography>Education</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorEducations.map(e=>{
                                                    return(e.school+" | "
                                                        +e.degreee+
                                                        e.field+" | "
                                                        +e.cgpa+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+" | "
                                                        +e.description+" | "+
                                                        e.activities+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography>Licenses & Certificates</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorLicenses.map(e=>{
                                                    return(e.name+" | "
                                                        +e.organization+
                                                        e.credentialId+" | "
                                                        +e.credentialUrl+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                            <Typography>Volunteer Experience</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorVolunteers.map(e=>{
                                                    return(e.role+" | "
                                                        +e.organization+
                                                        e.cause+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+" | "
                                                        +e.description+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                            <Typography>Skills</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorSkills.map(e=>{
                                                    return(e.name+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                            <Typography>Languages</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorLanguages.map(e=>{
                                                    return(e.language+" | "
                                                        +e.proficiency+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                            <Typography>Organization</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorOrganizations.map(e=>{
                                                    return(e.organization+" | "
                                                        +e.position+
                                                        e.associated+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+" | "
                                                        +e.description+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                                            <Typography>Honors & Awards</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorHonors.map(e=>{
                                                    return(e.title+" | "
                                                        +e.associated+
                                                        e.issuer+" | "
                                                        +e.issueDate+" | "
                                                        +e.startDate+" | "
                                                        +e.endDate+" | "
                                                        +e.description+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                                            <Typography>Patents</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorPatents.map(e=>{
                                                    return(e.title+" | "
                                                        +e.patentId+
                                                        e.status+" | "
                                                        +e.url+" | "
                                                        +e.issueDate+" | "
                                                        +e.description+"\n")
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                                            <Typography>Publications</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {values.MentorPublications.map(e=>{
                                                    return(e.title+" | "
                                                        +e.publisher+
                                                        e.url+" | "
                                                        +e.publicationDate+" | "
                                                        +e.description+"\n")
                                                })}
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


export default MentorDetails;