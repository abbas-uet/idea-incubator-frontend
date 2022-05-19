import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Card, CardContent, CardHeader, Divider, Grid, ListItem, Typography} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import faker from 'faker';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from "@mui/material/Stack";
import {Icon} from "@iconify/react/dist/iconify";
import plusFill from "@iconify/icons-eva/plus-fill";
import {getTableSingle, getThreeTableAllById} from "../../../../../ApiServices/getData";
import {UpdateSingleTableData} from "../../../../../ApiServices/update";
import CustomSnackbar from "../../../../../Utils/SnakBar";


function IdeaDetails() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();


    const {id} = useParams()
    const [values, setValues] = useState({
        name: '',
        email: '',
        field: '',
        projectName: '',
        status: ''
    });
    useEffect(async () => {
        const response = await getTableSingle('idea', id);
        if (response.status === 200) {
            setValues({
                ...values, ["name"]: response.data.name, ["field"]: response.data.field,
                ["email"]: response.data.email,
                ['status']: response.data.status,
                ['projectName']: response.data.projectname,
            })
        } else {
            console.log(response.data);
        }
    }, [])

    const [statusCode, setStatusCode] = useState({cond: false, res: 0, action: ''});
    const handleApprove_Reject = async (event) => {
        const data = {
            status: ''
        }
        if (event.target.name === 'approve') {
            data.status = "Approved";
        } else {
            data.status = "Rejected";
        }
        const response = await UpdateSingleTableData('idea', id, data);
        if (response.status === 200) {
            setStatusCode({...statusCode, ['cond']: true, ["res"]: 200, ['action']: data.status});
            setTimeout(function () {
                navigate('/admin/dashboard/ideas')
            }, 1500);
        } else {
            setStatusCode({...statusCode, ['cond']: true, ["res"]: response.status, ['action']: data.status});
        }
    }


    return (
        <div>
            <Page>
                <form
                    autoComplete="off"
                    noValidate
                >
                    <Card>
                        <CardHeader
                            sx={{ml: 1}}
                            title="Idea Details"
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9.5}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Name:</Typography>
                                        <Typography variant='body2'>{values.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9.5}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Email:</Typography>
                                        <Typography variant='body2'>{values.email}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={10}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Field:</Typography>
                                        <Typography variant='body2'>{values.field}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={3}>

                                        <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Project
                                            Name:</Typography>
                                        <Typography variant='body2'>{values.projectName}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={6}></Grid>


                                <Grid item
                                      md={6}
                                      xs={12}>
                                    <Stack direction={'row'} spacing={4} sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        pr: 4
                                    }}>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                            name={'reject'}
                                            disabled={values.status === 'Approved' || values.status === 'Rejected'}
                                            onClick={handleApprove_Reject}
                                        >
                                            Reject Idea
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            name={'approve'}
                                            disabled={values.status === 'Approved' || values.status === 'Rejected'}
                                            onClick={handleApprove_Reject}
                                        >
                                            Approve Idea
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color={'inherit'}
                                            onClick={handleClickOpen}
                                            startIcon={<Icon icon={plusFill}
                                            />}
                                        >
                                            Add Idea
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>


                    </Card>
                </form>

            </Page>
            {statusCode.cond && (
                statusCode.res === 200 ?
                    <CustomSnackbar message={"Idea " + statusCode.action + " Successfully"} type={'primary'}/>
                    :
                    <CustomSnackbar message={"Idea " + statusCode.action + " Successfully"} type={'error'}/>)}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                    >
                        <Stack direction={'row'} spacing={1}>
                            <Typography variant={'subtitle1'}>Subject</Typography>
                            <Typography variant={'body1'}> loremmdhufeu wehfuweuif</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={3}>
                            <Typography variant={'subtitle1'}>Body</Typography>
                            <Typography variant={'body1'}> lorem ipdnshfui hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb lorem ipdnshfui
                                hfuverhuif vhrufb sdvberub
                                krbguierui
                                ekvberubd bhvberuhd buherbyuebhvbyerbguiwebvuhebribvyueviebrufgvy evhb</Typography>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant={'contained'} color={'inherit'}>Reply</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default IdeaDetails;

