import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {styled, useTheme} from "@mui/material/styles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {getTableData} from "../ApiServices/getData";
import CustomSnackbar from ".././Utils/SnakBar";
import Page from "../AdminEnd/components/Page";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Create} from "../ApiServices/create";

import Divider from "@mui/material/Divider";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import TimePicker from "@mui/lab/TimePicker";
import {DatePicker} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import IconButton from "@mui/material/IconButton";


import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import axios from "axios";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const id = ["Manually", "Auto-generated"];
const types = ["Event", "Meeting", "Webinar"];

function getStyles(name, nameBy, theme) {
    return {
        fontWeight:
            nameBy.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}



function Meetups(props) {
    const theme = useTheme();
    const [open,setOpen]=useState(false);
    const [urls,SetUrls]=useState({start_url:'',join_url:''});

    const [values, setValues] = useState({
        nameBy: "",
        topic: "",
        start_time:null,
        time_zone:'Asia/Tashkent',
        duration:'',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const [meetingType, setmeetingType] = React.useState([]);
    const [meetingId, setmeetingId] = React.useState([]);



    const handleChangemeetingType = (event) => {
        const {
            target: { value },
        } = event;
        setmeetingType(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const handleChangemeetingId = (event) => {
        const {
            target: { value },
        } = event;
        setmeetingId(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };






    const [status,setStatus]=useState({'condition':false,'status':0});
    const [startTimevalue, setstartTimeValue] = React.useState(null);
    const [endTimevalue, setendTimeValue] = React.useState(null);

    const handleClickOpen = async () => {
        const data = {
            start_time: startTimevalue.toISOString(),
            topic: values.topic,
            time_zone: "Asia/Tashkent",
            duration: (values.duration.getHours() * 60) + (values.duration.getMinutes()),
            type: meetingType[0]
        }
        if (data.type === 'Meeting') {
            const response = await axios.post('http://localhost:5000/zoom/createMeetingScheduled',data);
            console.log(response);
            if(response.status===200){
                SetUrls({
                    ...urls,['start_url']:response.data.body.start_url,
                    ['join_url']:response.data.body.join_url
                });
                setStatus({
                    ...status,['condition']:true,
                ['status']:response.status
                });
            }else{
                setStatus({
                    ...status,['condition']:true,
                    ['status']:response.status
                });
            }

        }else{
            const response = await axios.post('http://localhost:5000/zoom/createWebinarScheduled',data);
            if(response.status===200){
                SetUrls({
                    ...urls,['start_url']:response.data.body.start_url,
                    ['join_url']:response.data.body.join_url
                });
                setStatus({
                    ...status,['condition']:true,
                    ['status']:response.status
                });
            }else{
                setStatus({
                    ...status,['condition']:true,
                    ['status']:response.status
                });
            }
        }
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };




    return (

        <Page sx={{m:15,pb:10}}>
            <Card>
                <CardContent>
                    <Typography variant='h5' fontWeight={'bold'} sx={{ml:7}}>Create A Meeting</Typography>
                <Divider sx={{mb:4}}/>
                    <Grid container spacing={2} justifyContent="left">
                        <Grid item md={6}>
                            <Stack
                                direction={"row"}
                                spacing={4}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    By:
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    name="nameBy"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    value={values.nameBy}
                                    sx={{ minWidth: 340 }}
                                />
                            </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Stack
                                direction={"row"}
                                spacing={2.8}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    Topic:
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label="Ex:Artifical Intelligence"
                                    name="topic"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    value={values.topic}
                                    sx={{ minWidth: 340 }}
                                />
                            </Stack>
                        </Grid>
                        <Grid item md={6}>

                        <Stack spacing={3} direction={"row"} sx={{ display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1, }}>
                            <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                Date:
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>


                                <DatePicker
                                    label="Date"
                                    value={values.date}
                                    onChange={(newValue) => {
                                        setValues({...values,['date']:newValue});
                                    }}
                                    renderInput={(params) => <TextField size='small' sx={{ minWidth: 340 }}{...params} />}
                                />
                                </LocalizationProvider>

                        </Stack>
                        </Grid>
                        <Grid item md={6}>
                        <Stack spacing={3} direction={"row"} sx={{display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1, }}
                               >
                            <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                Time:
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Start"
                                    size="small"
                                    value={startTimevalue}
                                    onChange={(newValue) => {
                                        setstartTimeValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField size='small' sx={{ maxWidth: '140px' }}{...params} />}
                                />
                            </LocalizationProvider>
                            <Typography gutterBottom variant='body1' sx={{ mt: 1 }}>
                                to
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="End"
                                    size="small"
                                    value={endTimevalue}
                                    onChange={(newValue) => {
                                        setendTimeValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField size='small' sx={{ maxWidth: '140px' }}{...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Stack spacing={3} direction={"row"} sx={{display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 1, }}
                            >
                                <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                    Duration:
                                </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                ampm={false}
                                openTo="hours"
                                views={['hours', 'minutes']}
                                inputFormat="HH:mm"
                                mask="__:__"
                                label="With minutes"
                                value={values.duration}
                                onChange={(newValue) => {
                                    setValues({...values,['duration']:newValue})
                                }}
                                renderInput={(params) => <TextField size='small' sx={{ minWidth: 325 }} {...params} />}
                            />
                            </LocalizationProvider>
                            </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Stack
                                direction={"row"}
                                spacing={3}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    MeetingID:
                                </Typography>
                                <Box sx={{ minWidth: 223 }}>
                                    <FormControl fullWidth size="small" sx={{ minWidth: 320 }}>
                                        <InputLabel id="demo-simple-select-label">ID</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            value={meetingId}
                                            onChange={handleChangemeetingId}
                                            input={<OutlinedInput label="Name" />}
                                            MenuProps={MenuProps}
                                        >
                                            {id.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, meetingId, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item md={6}>
                            <Stack
                                direction={"row"}
                                spacing={3}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    MeetingTpe:
                                </Typography>
                                <Box sx={{ minWidth: 223 }}>
                                    <FormControl fullWidth size="small" sx={{ minWidth: 310 }}>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            value={meetingType}
                                            onChange={handleChangemeetingType}
                                            input={<OutlinedInput label="Name" />}
                                            MenuProps={MenuProps}
                                        >
                                            {types.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, meetingType, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item md={12} sx={{ml:100}}>


                            <Button
                                sx={{  mt: 1 }}
                                color="secondary"
                                variant="contained"
                                size="Medium"
                                onClick={handleClickOpen}>
                                Schedule Meeting
                            </Button>
                            <BootstrapDialog

                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                            >
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    <CheckCircleOutlineIcon color={'success'}/>  Your Meeting is created Succesfully
                                </BootstrapDialogTitle>
                                <DialogContent dividers sx={{ width: "600px" }}>

                                    <Stack spacing={3} direction={"row"} sx={{ mt: 2, ml: 5 }} alignItems={'center'}>
                                        <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                            Start Link:
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Start Link"
                                            name="startLink"
                                            variant="outlined"
                                            size="small"
                                            disabled
                                            value={urls.start_url}
                                            sx={{ minWidth: 400 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position={"end"}>
                                                        <IconButton onClick={()=>navigator.clipboard.writeText(urls.start_url)}>
                                                            <ContentCopyIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        </Stack>
                                    <Stack spacing={3} direction={"row"} sx={{ mt: 2, ml: 5 }} alignItems={'center'}>
                                        <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                            Join Link:
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Join Link"
                                            name="joinLink"
                                            variant="outlined"
                                            size="small"
                                            disabled
                                            value={urls.join_url}
                                            sx={{ minWidth: 400 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position={"end"}>
                                                        <IconButton onClick={()=>navigator.clipboard.writeText(urls.join_url)}>
                                                            <ContentCopyIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Stack>




                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Done
                                    </Button>
                                </DialogActions>
                            </BootstrapDialog>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {status.condition&&(status.status===200?
                <CustomSnackbar message={"Successfully Created the Meeting"} type={'primary'}/>
                :
                <CustomSnackbar message={"Error While Creating the Meeting"} type={'error'}/>)}
        </Page>

);
}

export default Meetups;

