import React, {useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Grid, makeStyles} from '@material-ui/core'
import {Avatar, Card, Paper} from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';


import {useNavigate, useParams} from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import {getThreeTableAllById} from "../../../ApiServices/getData";

const useStyle = makeStyles({
    container: {
        margin: '15px',
        marginBottom: '15px'
    }
})



const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function IdeaDetail() {

    const {id} = useParams()

    const [values, setValues] = useState({
        idea: '',
        name: '',
        email:'',
        subusers:[]
    });

    useEffect(async () => {
        const response = await getThreeTableAllById("user","idea","subuser", id);
        if (response.status === 200) {
            setValues({
                ...values,
                ["idea"]:response.data.Idea,
                ["name"]:response.data.fullname,
                ["email"]:response.data.email,
                ['subusers']:response.data.SubUsers
            });
        } else {
            console.log(response.data);
        }
    }, [])
    const navigate = useNavigate();
    const classes = useStyle()

    return (
        <Grid container>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={12} sm={8} className={classes.container} >
                <Paper sx={{ mt: 4, ml: 1.2, mr: 0.7 }}>
                    <Card>
                        <Stack direction={'row'}>

                        <CardHeader sx={{ ml: 6,mb:1 }} title="Idea Details" />
                        <Button
                            sx={{ ml: 68, mt: 3,mb:1 }}
                            color="secondary"

                            size="Medium"
                            onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        </Stack>
                        <Divider />
                        <Grid item container >
                            <Grid item xs={5} md={5} justifyContent='center'>
                                <Avatar
                                    variant="rounded"
                                    sx={{height: "250px", width: "250px", ml: 9, mt: 6, mr: 5, mb: 9}}
                                    src="https://play-lh.googleusercontent.com/s3BPwFVEA1vKqppcp-iLxMYGleUGPnlNgPL93kHm36G7rF31OZZk4nizqJD7X9HNfQ"
                                    alt="Paella dish"
                                />
                            </Grid>
                            <Grid item xs={7} md={7}  >
                                <Typography variant='body2'  sx={{ mt: 6, mr: 4 }}>
                                   <b> Project Name:</b> {values.idea&&values.idea.projectname}
                                </Typography>

                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Owner Name:</b> {values.name}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Gmail:</b> {values.email}
                                </Typography>

                                <Typography variant='body2' sx={{ mr: 9, mt: 1 }}>
                                    <b>Technology & Tools:</b> {values.idea&&values.idea.technology}
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Description:</b> {values.idea&&values.idea.description}
                                </Typography>
                                <Stack direction={'row'} >

                                    <Typography variant='body2' sx={{ mr: 4, mt: 2 }}>
                                        <b>Group Members:</b>
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        {
                                            values.subusers&& values.subusers.map(e=>{
                                                return(
                                                    <Avatar sx={{width: 40, height: 40}} alt={e.fullname} src="/broken-image.jpg"/>
                                                )
                                            })
                                        }
                                    </AvatarGroup>
                                </Stack>
                                <Typography variant='body2' sx={{ mr: 9, mt: 2 }}>
                                    Here is the complete details of the above mentioned project.
                                      </Typography>
                                <Button
                                    sx={{ mr: 4, mt: 3 ,mb:4}}
                                    color="secondary"
                                    variant="contained"
                                    size="Medium"
                                    >
                                     Read File
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={0} sm={2}></Grid>
        </Grid>
    )
}
