import React, {useEffect, useState} from 'react'
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
import assest from '../../StaticAssets/assest.png'

import {useNavigate, useParams} from "react-router-dom";
import {getTableSingle, getThreeTableAllById} from "../../../ApiServices/getData";
import {Create} from "../../../ApiServices/create";
import CustomSnackbar from "../../../Utils/SnakBar";

const useStyle = makeStyles({
  container: {
    margin: '15px',
    marginBottom: '15px'
  }
})
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
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AssestDetail() {
  const navigate = useNavigate();

  const {id} = useParams()

  const [applicationDays,setApplicationDays]=useState('')


  const [statusCode,setStatusCode]=useState({cond:false,res:0});
  const [values, setValues] = useState({
    id: '',
    name: '',
    description:'',
    startTime:'',
    endTime: '',
    location: '',
    days:''
  });

  useEffect(async () => {
    const response = await getTableSingle("asset", id);
    if (response.status === 200) {
      setValues({
        ...values,
        ["id"]: response.data.id,
        ['name']:response.data.name,
        ['description']:response.data.description,
        ["startTime"]: response.data.time_start,
        ["endTime"]: response.data.time_end,
        ["location"]: response.data.location,
        ["days"]: response.data.days,
      });
    } else {
      console.log(response.data);
    }
  }, [])



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


  const create=async()=>{
    let [shour, sminute, ssecond] = startTimevalue
        .toLocaleTimeString("en-US")
        .split(/:| /);
    let [ehour, eminute, esecond] = endTimevalue
        .toLocaleTimeString("en-US")
        .split(/:| /);

    const data={
      startDate:Datevalue[0].getFullYear()+'-'+Datevalue[0].getMonth()+'-'+Datevalue[0].getDate(),
      endDate:Datevalue[1].getFullYear()+'-'+Datevalue[1].getMonth()+'-'+Datevalue[1].getDate(),
      days:applicationDays,
      quantity:counter,
      time_start:shour+":" +sminute+":"+ ssecond,
      time_end:ehour+":" +eminute+":"+ esecond,
      user_id:id
    }
    console.log(data);
    const response=await Create('assetApplication',data);
    if(response.status===200){
      setStatusCode({...statusCode,['cond']:true,["res"]:200})
      setTimeout(function(){
        handleClose();
      }, 1500);

    }else{
      setStatusCode({...statusCode,['cond']:true,["res"]:response.status})
    }
  }


  return (
    <Grid container>
      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={12} sm={8} className={classes.container} >
        <Paper sx={{ mt: 4, ml: 1.2, mr: 0.7 }}>
          <Card>
            <Grid item container>
              <Grid item xs={5} md={5} justifyContent='center'>
                <Avatar
                variant="rounded"
    sx={{height: "250px", width: "250px", ml: 9, mt: 9, mr: 5, mb: 9}}
    src={assest}
    alt="Paella dish"
    />
              </Grid>
              <Grid item xs={7} md={7}>
                <Typography variant='body1' fontWeight={"fontWeightBold"} sx={{ mt: 10, mr: 4 }}>
                  Description:
                </Typography>
                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                  {values.description}
                </Typography>
                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                  <b>Location:</b> {values.location}
                </Typography>
                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                  <b>Available Time:</b> {values.startTime +' - '+ values.endTime}
                </Typography>
                <Typography variant='body2' sx={{ mr: 4, mt: 1 }}>
                  <b>Days:</b> {values.days} a Week
                </Typography>
                <Button
                  sx={{ mr: 4, mt: 3 }}
                  color="secondary"
                  variant="outlined"
                  size="Medium"
                  onClick={() => navigate(-1)}>
                  Back
                </Button>
                <Button
                  sx={{ mr: 4, mt: 3 }}
                  color="secondary"
                  variant="contained"
                  size="Medium"
                  onClick={handleClickOpen}>
                  Apply Now
                </Button>
                <BootstrapDialog

                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Apply For Assest
                  </BootstrapDialogTitle>
                  <DialogContent dividers sx={{ width: "600px" }}>
                    <Stack spacing={3} direction={"row"} sx={{ mt: 2, ml: 5 }} alignItems={'center'}>
                      <Typography gutterBottom variant='body1' fontWeight={"fontWeightBold"} sx={{ mt: 1 }}>
                        Add Timing:
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
                    <Stack direction="row" spacing={1} sx={{ mt: 2, ml: 5 }}>
                      <Typography gutterBottom sx={{ mt: 2 }} variant='body1' fontWeight={"fontWeightBold"}>
                        Add Quantity:
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems={'center'}>

                        <IconButton color="secondary" aria-label="add an alarm" onClick={handleDecreaseCounter}>
                          <RemoveCircleOutlineIcon sx={{ mt: 1 }} />
                        </IconButton>
                        <Typography variant='h6' sx={{ mt: 10 }} >{counter}</Typography>
                        <IconButton color="secondary" aria-label="add an alarm" sx={{ mt: 1 }} onClick={handleIncreaseCounter}>
                          <AddCircleOutlineIcon sx={{ mt: 1 }} />
                        </IconButton>
                      </Stack>

                    </Stack>
                    <Stack direction="row" spacing={5} alignItems={'center'} sx={{ mt: 3, ml: 5 }}>

                      <Typography gutterBottom sx={{ mt: 1 }} variant='body1' fontWeight={"fontWeightBold"}>
                        Add Days:
                      </Typography>
                      <TextField onChange={(event)=>setApplicationDays(event.target.value)} value={applicationDays} label="" variant="outlined" size="small" fullWidth/>

                    </Stack>
                    <Stack direction="row" spacing={5} alignItems={'center'} sx={{ mt: 4, ml: 5, mb: 2 }}>

                      <Typography  gutterBottom sx={{ mt: 1 }} variant='body1' fontWeight={"fontWeightBold"}>
                        Add Date:
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <MobileDateRangePicker
                          startText="Start"
                          value={Datevalue}
                          onChange={(newValue) => {
                            setDateValue(newValue);
                          }}
                          renderInput={(startProps, endProps) => (
                            <React.Fragment>
                              <TextField size='small' sx={{ maxWidth: '142px' }}{...startProps} />
                              <Box sx={{ mx: 2 }}> to </Box>
                              <TextField size='small' sx={{ maxWidth: '142px' }}{...endProps} />
                            </React.Fragment>
                          )}
                        />
                      </LocalizationProvider>

                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={create}>
                      Submit
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </Grid>
            </Grid>
          </Card>
          {(statusCode.cond? (statusCode.res===200?
          <CustomSnackbar message={"Successfully Applied for Asset"} type={'primary'}/>
          :
          <CustomSnackbar message={"Error While Applying for Asset"} type={'error'}/>):'')}
        </Paper>
      </Grid>
    </Grid>
  )
}