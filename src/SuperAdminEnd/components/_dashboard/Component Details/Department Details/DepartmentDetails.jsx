import React, {useEffect, useState} from "react";
import Page from "../../../Page";
import {useParams, useNavigate} from "react-router-dom";
import {Button, Card, CardContent, CardHeader, Divider, Grid, TextField, Typography,} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {getTableAtrributes, getTwoTableSingle} from "../../../../../ApiServices/getData";
import _ from "lodash";
import {deleteJointTableSingle, deleteSingle} from "../../../../../ApiServices/delete";
import {CreateJointTable} from "../../../../../ApiServices/create";
import CustomSnackbar from "../../../../../Utils/SnakBar";
import {UpdateSingleTableData} from "../../../../../ApiServices/update";

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;


function DepartmentDetails(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const {id} = useParams();
    const [all_admins, setAll_Admins] = React.useState([]);
    useEffect(async () => {
        const response = await getTableAtrributes('admin', 'fullname');
        if (response.status === 200) {
            setAll_Admins(response.data)
        } else {
            console.log(response.status);
        }
    }, [])


    const [values, setValues] = useState({
        id: '',
        departmentname: '',
        admins: '',
        selectedAdmin: [],
        newSelected: []
    });


    useEffect(async () => {
        const response = await getTwoTableSingle('department', 'admin', id);
        if (response.status === 200) {
            setValues({
                ...values,
                ["id"]: response.data.id,
                ["departmentname"]: response.data.departmentname,
                ["admins"]: response.data.admins,
                ["selectedAdmin"]: response.data.DepartmentAdmins.map(e => e.Admin),
                ['newSelected']: response.data.DepartmentAdmins.map(e => e.Admin),
            })
        } else {
            console.log(response.status);
        }
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const [disabled, setdisabled] = React.useState(true);

    const [statusCode, setStatusCode] = useState({cond: false, res1: 200, res2: 200});
    const [changeData, setChangeData] = useState(false);

    const handleSave = async () => {

        const delArr = values.selectedAdmin.filter(function (el) {
            return values.newSelected.indexOf(el) < 0;
        });
        const addArr = values.newSelected.filter(function (el) {
            return values.selectedAdmin.indexOf(el) < 0;
        });
        if (delArr.length > 0) {
            for (let i = 0; i < delArr.length; i++) {
                const data = {
                    attributeName1: 'departmentId',
                    attributeName2: 'adminId',
                    val1: id,
                    val2: delArr[i].id
                }
                const response = await deleteJointTableSingle('department', 'admin', data);
                if (response.status === 200) {
                    setStatusCode({...statusCode, ['cond']: true, ["res1"]: 200})
                } else {
                    setStatusCode({...statusCode, ['cond']: true, ["res1"]: response.status})
                    break;
                }
            }
        }
        if (addArr.length > 0) {
            for (let i = 0; i < addArr.length; i++) {
                const data = {departmentId: id, adminId: addArr[i].id}
                const response = await CreateJointTable('department', 'admin', data);
                if (response.status === 200) {
                    setStatusCode({...statusCode, ['cond']: true, ["res2"]: 200})
                } else {
                    setStatusCode({...statusCode, ['cond']: true, ["res2"]: response.status})
                    break;
                }
            }
        }
        if (statusCode.res1 === 200 && statusCode.res2 === 200) {
            setValues({...values, ['selectedAdmin']: values.newSelected});
        }
        if (changeData) {
            const data = {
                departmentname: values.departmentname,
                admins: values.admins
            }
            const response = await UpdateSingleTableData('department', id, data);
            if (response.status === 200) {
                setStatusCode({...statusCode, ['cond']: true, ["res1"]: 200, ["res2"]: 200})
            } else {
                setStatusCode({...statusCode, ['cond']: true, ["res1"]: response.status, ["res2"]: response.status})
            }
        }
    }


    //Handling to Delete of the Department

    const handleDelete = async () => {
        const response = await deleteSingle('department', id);
        if (response.status === 200) {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 100,
                ["res2"]: 100
            })
            setTimeout(function () {
                navigate('/superadmin/dashboard/departments')
            }, 1500);

        } else {
            setStatusCode({
                ...statusCode,
                ["cond"]: true,
                ["res1"]: 50,
                ["res2"]: 50
            })
        }
    }


    return (

        <div>
            <Page>
                <form autoComplete="off" noValidate>
                    <Card>
                        <CardHeader sx={{ml: 1}} title="Department Details"/>
                        <Divider/>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={9.5} alignItems="center">
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Department ID:
                                        </Typography>
                                        <TextField
                                            onChange={handleChange}
                                            variant="outlined"
                                            disabled={true}
                                            name='id'
                                            value={values.id}
                                            size="small"
                                            label='ID'
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={6.5} alignItems="center">
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            Department Name:
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            name='departmentname'
                                            onChange={
                                                (event) => {
                                                    handleChange(event);
                                                    setChangeData(true);
                                                }}
                                            disabled={disabled}
                                            value={values.departmentname}
                                            label='Department Name'
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack direction={"row"} spacing={10}>
                                        <Typography
                                            variant="body2"
                                            sx={{ml: 1, fontWeight: "bold"}}
                                        >
                                            No of Admins:
                                        </Typography>
                                        <TextField
                                            onChange={(event) => {
                                                handleChange(event);
                                                setChangeData(true);
                                            }}
                                            value={values.admins}
                                            name='admins'
                                            variant="outlined"
                                            disabled={disabled}
                                            label='No of Admins'
                                            size="small"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Autocomplete
                                        sx={{pl: 23, pr: 11.5}}
                                        multiple
                                        id="checkboxes-tags-demo"
                                        options={all_admins}
                                        disableCloseOnSelect
                                        disabled={disabled}
                                        value={values.newSelected}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        onChange={(event, value) => setValues({
                                            ...values, ['newSelected']: value
                                        })}
                                        getOptionLabel={(option) => option.id + " " + option.fullname}
                                        renderOption={(props, option, {selected}) => (
                                            <li {...props}>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{marginRight: 8}}
                                                    checked={selected}
                                                    key={option.id}
                                                />
                                                {option.id + " " + option.fullname}
                                            </li>
                                        )}
                                        style={{width: 500}}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                disabled={disabled}
                                                label="Checkboxes"
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={6}></Grid>

                                <Grid item md={6} xs={12}>
                                    <Stack
                                        direction={"row"}
                                        spacing={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            pr: 4,
                                        }}
                                    >
                                        <Button color="primary" variant="contained" onClick={() => {
                                            !disabled && setStatusCode({
                                                ...statusCode,
                                                ['cond']: false,
                                                ["res1"]: 200,
                                                ['res2']: 200
                                            })
                                            !disabled && handleSave()
                                            setdisabled(!disabled)

                                        }
                                        }>
                                            {disabled === true ? 'Update' : 'Save Changes'}
                                        </Button>
                                        <Button color="error" variant="outlined"
                                                onClick={handleDelete}>
                                            Delete
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color={"inherit"}
                                            onClick={handleClickOpen}
                                        >
                                            Contact
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </form>
            </Page>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Contact</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText id="scroll-dialog-description">
                        <Stack direction={"row"} spacing={2} alignItems='center' mr={1} ml={1} mt={4} mb={4}>
                            <Typography variant={"subtitle1"}>Admin:</Typography>
                            <TextField variant="outlined" label='Enter Name' fullWidth/>
                        </Stack>

                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{m: 0.5}}>
                    <Button onClick={handleClose} variant={"contained"} color={"inherit"}>
                        Contact
                    </Button>
                </DialogActions>
            </Dialog>
            {statusCode.cond && (
                statusCode.res1 === 200 && statusCode.res2 === 200 ?
                    <CustomSnackbar message={"Successfully Updated Department Details"} type={'primary'}/>
                    : statusCode.res1 === 100 && statusCode.res2 === 100 ?
                        <CustomSnackbar message={"Successfully Deleted Department"} type={'error'}/>
                        : statusCode.res1 === 50 && statusCode.res2 === 50 ?
                            <CustomSnackbar message={"Error While Deleting the Department"} type={'error'}/>
                            : <CustomSnackbar message={"Error While Updating the Department"} type={'error'}/>
            )}
        </div>
    );
}

export default DepartmentDetails;
