import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Grid, makeStyles} from '@material-ui/core'
import {Avatar, Card, Checkbox, Paper} from "@mui/material";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';



import {useNavigate} from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import assest from "../../StaticAssets/assest.png";

const useStyle = makeStyles({
    container: {
        margin: '15px',
        marginBottom: '15px'
    }
})



const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function IdeaDetail() {
    const navigate = useNavigate();
    const classes = useStyle()
    const [open, setOpen] = React.useState(false);
    const [startTimevalue, setstartTimeValue] = React.useState(null);
    const [endTimevalue, setendTimeValue] = React.useState(null);
    const [counter, setcounter] = React.useState(0);
    const [Datevalue, setDateValue] = React.useState([null, null]);

    const handleIncreaseCounter = () => {
        if (counter >= 0) {
            let c = counter;
            setcounter(++c);
        }
    }
    const handleDecreaseCounter = () => {
        if (counter > 0) {
            let c = counter;
            setcounter(--c);
        }
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
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
                                   <b> Project Name:</b>   Be one's Eye
                                </Typography>

                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Owner Name:</b> Abbas Ali
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Gmail:</b> ali7895@gmail.coms
                                </Typography>

                                <Typography variant='body2' sx={{ mr: 9, mt: 1 }}>
                                    <b>Technology & Tools:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga natus officia perferendis quibusdam quod rerum soluta tempore? Aliquid aspernatur excepturi facilis illo in iste maxime officia officiis pariatur qui, quibusdam sunt tenetur voluptatum.
                                </Typography>
                                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                    <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga natus officia perferendis quibusdam quod rerum soluta tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, unde.
                                </Typography>
                                <Stack direction={'row'} >

                                    <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                                        <b>Group Members:</b>
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar sx={{width:40 , height:40}} alt="Remy Sharp" src="/broken-image.jpg" />
                                        <Avatar alt="Travis Howard" src="/broken-image.jpg" />
                                        <Avatar alt="Cindy Baker" src="/broken-image.jpg" />
                                        <Avatar alt="Agnes Walker" src="/broken-image.jpg" />
                                        <Avatar alt="Trevor Henderson" src="/broken-image.jpg" />
                                    </AvatarGroup>
                                </Stack>
                                <Typography variant='body2' sx={{ mr: 9, mt: 3 }}>
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
const top100Films = [
    { title: 'Monday' },
    { title: 'Tuesday' },
    { title: 'Wednesday' },
    { title: 'Thursday' },
    { title: 'Friday' },
    { title: "Satursday" },
    { title: 'Sunday' },
];
