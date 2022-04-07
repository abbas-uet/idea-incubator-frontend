import React, {useEffect, useState} from 'react';
import Page from "../../../Page";
import {useParams} from 'react-router-dom';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from "@mui/material/Stack";
import {UserListHead, UserMoreMenu} from "../../user";
import SearchNotFound from "../../../SearchNotFound";
import {getThreeTableAllById} from "../../../../../ApiServices/getData";


const UserTableHead = [
    {id: "id", label: "Id", alignRight: false},
    {id: "createdon", label: "Created On", alignRight: false},
    {id: "duedate", label: "Due Date", alignRight: false},
    {id: "paymentmethod", label: "Payment Method", alignRight: false},
    {id: "ammount", label: "Ammount", alignRight: false},
    {id: "status", label: "Status", alignRight: false},
    {id: ""},
];


function SuperAdminUserDetail() {


    const [LIST, setLIST] = useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('username');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = LIST.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - LIST.length) : 0;


    const isUserNotFound = LIST.length === 0;


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {id} = useParams()
    const [values, setValues] = useState({
        userId: '',
        userName: '',
        email: '',
        Joindate: '',
        managedby: '',
        projectid: '',
        subscription: ''
    });

    useEffect(async () => {
        const response = await getThreeTableAllById("user", 'subscription', "invoice", id);
        if (response.status === 200) {
            setValues({
                ...values, ["userId"]: response.data.userid, ["userName"]: response.data.username,
                ["Joindate"]: response.data.joindate, ["email"]: response.data.email,
                ['managedby']: response.data.fullname,
                ['subscription']: response.data.Subscription,
            })
            setLIST(response.data.Invoices);
        } else {
            console.log(response.data);
        }
    }, [])


    return (
        <div>
            <Page>
                <form
                    autoComplete="off"
                    noValidate
                >
                    <Paper>
                        <CardHeader

                            title="User Details"
                        />
                        <Divider/>
                        <CardContent>

                            <Stack direction={'row'}>

                                <Grid
                                    container
                                    spacing={3}
                                    md={6}
                                >
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={9}>

                                            <Typography variant='body2'
                                                        sx={{ml: 1, fontWeight: 'bold'}}>UserID:</Typography>
                                            <Typography variant='body2'>{values.userId}</Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={5.3}>
                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>User
                                                Name:</Typography>
                                            <Typography variant='body2'>{values.userName}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={4.9}>
                                            <Typography variant='body2'
                                                        sx={{ml: 1, fontWeight: 'bold'}}>ProjectID:</Typography>
                                            <Typography variant='body2'>{values.projectid}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>

                                        <Stack direction={"row"} spacing={9.9}>

                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Managed
                                                By:</Typography>
                                            <Typography variant='body2'>{values.managedby}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={9}>

                                            <Typography variant='body2'
                                                        sx={{ml: 1, fontWeight: 'bold'}}>Join Date:</Typography>
                                            <Typography variant='body2'>{values.Joindate}</Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={5.3}>
                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>
                                                Email:</Typography>
                                            <Typography variant='body2'>{values.email}</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    md={6}
                                    spacing={3}
                                >
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={9}>

                                            <Typography variant='h3'
                                                        sx={{ml: 1, fontWeight: 'bold'}}>Subscription Info:</Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={5.3}>
                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Subscription
                                                Plan
                                            </Typography>
                                            <Typography
                                                variant='body2'>{values.subscription && values.subscription.planname}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={5.3}>
                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Ammount
                                            </Typography>
                                            <Typography
                                                variant='body2'>{values.subscription && values.subscription.ammount}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={4.9}>
                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Billing
                                                Date:</Typography>
                                            <Typography
                                                variant='body2'>{LIST.length > 0 && LIST[0].createdon}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>

                                        <Stack direction={"row"} spacing={9.9}>

                                            <Typography variant='body2' sx={{ml: 1, fontWeight: 'bold'}}>Contract
                                                Date:</Typography>
                                            <Typography
                                                variant='body2'>{LIST.length > 0 && LIST[0].createdon}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Stack direction={"row"} spacing={9}>

                                            <Typography variant='body2'
                                                        sx={{ml: 1, fontWeight: 'bold'}}>Contract End:</Typography>
                                            <Typography
                                                variant='body2'>{LIST.length > 0 && LIST[0].createdon}</Typography>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Stack>


                        </CardContent>
                        <Divider/>
                        <Typography component="div" variant="h6" sx={{m: 2}}>
                            Last Invoices
                        </Typography>
                        <Card sx={{mt: 2}}>
                            <TableContainer
                                sx={{minWidth: 800, maxHeight: 500, overflow: "auto"}}
                            >

                                <Table>
                                    <UserListHead
                                        order={order}
                                        orderBy={orderBy}
                                        headLabel={UserTableHead}
                                        rowCount={LIST.length}
                                        numSelected={selected.length}
                                        onRequestSort={handleRequestSort}
                                        onSelectAllClick={handleSelectAllClick}
                                    />

                                    <TableBody>
                                        {LIST
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                    let {
                                                        invoiceid,
                                                        createdon,
                                                        duedate,
                                                        paymentMethod,
                                                        ammount,
                                                        status,
                                                    } = row;
                                                    let isItemSelected = selected.indexOf(invoiceid) !== -1;
                                                    return (
                                                        <TableRow
                                                            hover
                                                            key={invoiceid}
                                                            tabIndex={-1}
                                                            role="checkbox"
                                                            selected={isItemSelected}
                                                            aria-checked={isItemSelected}
                                                        >
                                                            <TableCell padding="checkbox">
                                                                <Checkbox
                                                                    checked={isItemSelected}
                                                                    onChange={(event) => handleClick(event, invoiceid)}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="left">{invoiceid}</TableCell>
                                                            <TableCell align="left">{createdon}</TableCell>
                                                            <TableCell align="left">{duedate}</TableCell>
                                                            <TableCell align="left">{paymentMethod}</TableCell>
                                                            <TableCell align="left">{ammount}</TableCell>
                                                            <TableCell align="left">
                                                                {status}
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                {

                                                                } <UserMoreMenu pageName={"Invoices"} id={invoiceid}/>
                                                            </TableCell>
                                                        </TableRow>)
                                                }
                                            )}
                                        {emptyRows > 0 && (
                                            <TableRow style={{height: 53 * emptyRows}}>
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    {isUserNotFound && (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center" colSpan={6} sx={{py: 3}}>
                                                    <SearchNotFound searchQuery={filterName}/>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )}
                                </Table>
                            </TableContainer>

                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={LIST.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Card>
                        <Grid item
                              md={12}
                              xs={12}>
                            <Stack direction={'row'} spacing={7} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                pb: 2,
                                pt: 2,
                            }}>
                                <Button
                                    color="inherit"
                                    variant="contained"
                                >
                                    Message User
                                </Button>
                                <Button
                                    color="error"
                                    variant="outlined"
                                >
                                    Delete User
                                </Button>

                            </Stack>
                        </Grid>
                    </Paper>
                </form>

            </Page>
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

export default SuperAdminUserDetail;

