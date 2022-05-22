import React, {useEffect, useState} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {Avatar, Card, Paper} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import {getThreeTableAllById} from "../../../ApiServices/getData";


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
function IndustryDetails(props) {
    const navigate = useNavigate();
    const classes = useStyle()

    const {id} = useParams()

    const [values, setValues] = useState({
        id: '',
        name: '',
        email:'',
        username:'',
        profile: '',
        services: [],
    });

    useEffect(async () => {
        const response = await getThreeTableAllById("industry", 'profile','service', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ["id"]: response.data.id,
                ['name']:response.data.name,
                ['email']:response.data.email,
                ["username"]: response.data.username,
                ["services"]: response.data.IndustryServices,
                ["profile"]: response.data.IndustryProfile,
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
                        <CardHeader sx={{ ml: 6,mb:1 }} title="Industry Profile" />
                        <Divider />
                        <Grid item container>
                            <Grid item xs={5} md={5} >
                                <Avatar
                                    variant="rounded"
                                    sx={{height: "250px", width: "250px", ml: 9, mt: 5, mr: 5, mb: 4}}
                                    src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Paella dish"
                                />
                            </Grid>
                            <Grid item xs={7} md={7}>

                                <Typography variant='body2' sx={{ mr: 4, mt: 6 }}>
                                    <b>Name:</b> {values.name}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Headline:</b> {values.profile&& values.profile.headline}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b> Location:</b> {values.profile&& values.profile.location}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Website:</b> {values.profile&& values.profile.website}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Email:</b> {values.email}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Services:</b> {values.services.map(e=>{
                                    return(e.name+" | ")
                                })}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 8, mt: 1 }}>
                                    <b>Description:</b>{values.profile&& values.profile.description}
                                </Typography>


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
export default IndustryDetails;