import { Card } from "@mui/material";
import React, {useEffect} from "react";
import { Grid } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Stack, Button, CardContent } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {styled, useTheme} from "@mui/material/styles";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {getTableData, getTwoTableAll} from "../ApiServices/getData";
import CustomSnackbar from ".././Utils/SnakBar";
import Page from "../AdminEnd/components/Page";
import {Create} from "../ApiServices/create";

import Divider from "@mui/material/Divider";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import TimePicker from "@mui/lab/TimePicker";
import {DatePicker} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";


import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";


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

    const [values, setValues] = useState({
        nameBy: "",
        type: "",
        date:null,
        datetime:null,
        duration:null,
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






    const [status,setStatus]=useState({'promoCode':null,'status':0,'subscription':null,'subStatus':0});
    const [startTimevalue, setstartTimeValue] = React.useState(null);
    const [endTimevalue, setendTimeValue] = React.useState(null);

    const startLink="https://us04web.zoom.us/s/75180912284?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6Ii0tdE9XZGVPUnlldDBJdTRtcGhRV1EiLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc1MTgwOTEyMjg0IiwiZXhwIjoxNjUyMzY3NzIwLCJpYXQiOjE2NTIzNjA1MjAsImFpZCI6IlpqSFJYY3BWUnEyZl9fVFBhUUdlemciLCJjaWQiOiIifQ.fwFR-TKzMwRS7PlZK_v9LOTF7Thycexo-tWZJbyBGWs";
    const joinLink="https://us04web.zoom.us/j/75180912284?pwd=1-qM8YTo-ZhC7YuYwUhW-DM1EBgMg3.1";
    useEffect(async() => {
        const response = await getTableData('currency_unit');
        if(response.status===200) {
            setValues({...values,["currency"]:response.data});
        }else{
            console.log(response.status);
        }
    }, [])


    const handleSaveSubscription=async()=>{
        const data={
            nameBy: values.nameBy,
            type:meetingType[0],
            ammount:values.totalAmmount,
       };
        const response=await Create('subscription',data);
        if(response.status===200){
            setStatus({...status,["subscription"]:true,['subStatus']:response.data});
        }else{
            setStatus({...status,["subscription"]:true,['subStatus']:response.data});

        }
    }
    const handleClickOpen = () => {
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

                        <Stack spacing={3} direction={"row"} sx={{ display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1, }}>
                            <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                Date:
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>


                                <DatePicker
                                    label="Basic example"
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
                                            name="startLink"
                                            variant="outlined"
                                            size="small"
                                            disabled
                                            value={startLink}
                                            sx={{ minWidth: 340 }}
                                        />
                                        </Stack>
                                    <Stack spacing={3} direction={"row"} sx={{ mt: 2, ml: 5 }} alignItems={'center'}>
                                        <Typography gutterBottom variant='body2' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                                            Join Link:
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            name="joinLink"
                                            variant="outlined"
                                            size="small"
                                            disabled
                                            value={joinLink}
                                            sx={{ minWidth: 340 }}
                                            end
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
            {status.promoCode&&(status.status===200?
                <CustomSnackbar message={"Successfully Created the PromoCode"} type={'primary'}/>
                :
                <CustomSnackbar message={"Error While Creating the PromoCode"} type={'error'}/>)}
        </Page>

);

}

export default Meetups;

