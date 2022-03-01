import {filter} from "lodash";
import {Icon} from "@iconify/react";
import React, {useEffect, useState} from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import FormControlLabel from '@mui/material/FormControlLabel';

// material
import {
    Button,
    Card,
    Checkbox,
    Chip,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
// components
import Page from "../components/Page";
import SearchNotFound from "../components/SearchNotFound";
import {UserListHead, UserListToolbar, UserMoreMenu,} from "../components/_dashboard/user";
//
import BreadCrumb from "../components/_dashboard/BreadCrumb";
import {DashBoardCharts} from "../components/_dashboard/DashBoardCharts";
import AddNew from "../components/_dashboard/Create New/AddNew";

// ----------------------------------------------------------------------
import axios from 'axios';

const TABLE_HEAD = [
    [
        {id: "id", label: "ID", alignRight: false},
        {id: "username", label: "User_SuperAdminEnd Name", alignRight: false},
        {id: "department", label: "Department Name", alignRight: false},
        {id: "email", label: "Email", alignRight: false},
        {id: ""},
    ],
    [
        {id: "id", label: "ID", alignRight: false},
        {id: "department", label: "Department Name", alignRight: false},
        {id: "noofadmins", label: "No of Admins", alignRight: false},
        {id: ""},
    ],
    [
        {id: "id", label: "Id", alignRight: false},
        {id: "username", label: "User_SuperAdminEnd Name", alignRight: false},
        {id: "email", label: "Email", alignRight: false},
        {id: "subscription", label: "Subscription", alignRight: false},
        {id: "lastinvoice", label: "Last Invoice", alignRight: false},
        {id: "status", label: "Status", alignRight: false},
        {id: "duedate", label: "Due Date", alignRight: false},
        {id: ""},
    ],
    [
        {id: "id", label: "Invoice", alignRight: false},
        {id: "createdon", label: "Created On", alignRight: false},
        {id: "duedate", label: "Due Date", alignRight: false},
        {id: "billingperson", label: "Billing Person", alignRight: false},
        {id: "paymentmethod", label: "Payment Method", alignRight: false},
        {id: "ammount", label: "Ammount", alignRight: false},
        {id: "status", label: "Status", alignRight: false},
        {id: ""},
    ],
];

const SEARCH_BY_LIST = [
    [
        {id: "id", label: "ID"},
        {id: "username", label: "User_SuperAdminEnd Name"},
    ],
    [{id: "id", label: "ID"}],
    [
        {id: "id", label: "ID"},
        {id: "username", label: "User_SuperAdminEnd Name"},
    ],
    [{id: "id", label: "Invoice ID"}],
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query, filterSearchBy) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    console.log(filterSearchBy);

    if (query) {
        return filterSearchBy === "id"
            ? filter(array, (_user) => _user.id === parseInt(query))
            : filterSearchBy === "username"
                ? filter(
                    array,
                    (_user) =>
                        _user.username.toLowerCase().indexOf(query.toLowerCase()) !== -1
                )
                : "";
    }
    return stabilizedThis.map((el) => el[0]);
}

function getTableHeadlist(pageName) {

    return pageName === 'Admins' ? TABLE_HEAD[0] : pageName === 'Departments' ? TABLE_HEAD[1] :
        pageName === 'Users' ? TABLE_HEAD[2] : pageName === 'Invoices' ? TABLE_HEAD[3] : ''

}

function getSearchByOption(pageName) {

    return pageName === 'Admins' ? SEARCH_BY_LIST[0] : pageName === 'Departments' ? SEARCH_BY_LIST[1] :
        pageName === 'Users' ? SEARCH_BY_LIST[2] : pageName === 'Invoices' ? SEARCH_BY_LIST[3] : ''

}

//Rendering the Tables of Different Tabs
function renderTableContent(pageName, row, selected, handleClick) {
    if (pageName === "Admins") {
        let {id, username, email, department} = row;
        let isItemSelected = selected.indexOf(username) !== -1;
        return (
            <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, username)}
                    />
                </TableCell>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{department}</TableCell>
                <TableCell align="left">{email}</TableCell>

                <TableCell align="right">
                    <UserMoreMenu pageName={pageName} id={id}/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === "Departments") {
        let {id, departmentname, noofadmins} = row;
        let isItemSelected = selected.indexOf(departmentname) !== -1;
        return (
            <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, departmentname)}
                    />
                </TableCell>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{departmentname}</TableCell>
                <TableCell align="left">{noofadmins}</TableCell>

                <TableCell align="right">
                    <UserMoreMenu pageName={pageName} id={id}/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === "Users") {
        let {userid, username, email, subscription, lastinvoice, status, duedate} =
            row;
        let isItemSelected = selected.indexOf(username) !== -1;
        return (
            <TableRow
                hover
                key={userid}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, username)}
                    />
                </TableCell>
                <TableCell align="left">{userid}</TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{subscription}</TableCell>
                <TableCell align="left">{lastinvoice}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left">{duedate}</TableCell>


                <TableCell align="right">
                    <UserMoreMenu pageName={pageName} id={userid}/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === "Invoices") {
        let {
            id,
            createdon,
            billingperson,
            duedate,
            paymentmethod,
            ammount,
            status,
        } = row;
        let isItemSelected = selected.indexOf(id) !== -1;
        return (
            <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, id)}
                    />
                </TableCell>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{createdon}</TableCell>
                <TableCell align="left">{duedate}</TableCell>
                <TableCell align="left">{billingperson}</TableCell>
                <TableCell align="left">{paymentmethod}</TableCell>
                <TableCell align="left">{ammount}</TableCell>
                <TableCell align="left">
                    <Chip variant={"outlined"} label={status[0]} color={status[1]}/>
                </TableCell>
                <TableCell align="right">
                    <UserMoreMenu pageName={pageName} id={id}/>
                </TableCell>
            </TableRow>
        );
    }
}

export default function SuperAdminOptions({pageName, cardObj}) {


    const SEARCH_BY_OPTIONS = getSearchByOption(pageName);
    //LIST OF TABLE CONTENT


    const [LIST,setLIST]=useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [selectSearchBy, setselectSearchBy] = useState(SEARCH_BY_OPTIONS[0].id)
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(() => {
            axios.get('http://localhost:5000/'+pageName.toLowerCase()+'/view_'+pageName.toLowerCase())
                .then(function (response) {
                    setLIST(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }, [])


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const onfilterSearchBy = (value) => {
        setselectSearchBy(value);
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
    const filteredUsers = applySortFilter(
        LIST,
        getComparator(order, orderBy),
        filterName,
        selectSearchBy
    );

    const isUserNotFound = filteredUsers.length === 0;

    return (
        <Page title={pageName + " | Idea Incubator"}>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                >
                    <BreadCrumb linkArr={["Dashboard", pageName]}/>
                    {
                        pageName === "Admins" || pageName === "Departments" ? <Button
                            variant="contained"
                            color={"inherit"}
                            onClick={handleClickOpen}
                            startIcon={<Icon icon={plusFill}/>}
                        >
                            Add {pageName}
                        </Button> : ""
                    }

                </Stack>

                {
                pageName === "Users"
                ? (
                    <Grid container spacing={2} justifyContent="space-between" mb={2}>
                        <Grid item lg={4} md={3} xl={6} xs={12}>
                            <DashBoardCharts
                                title={"TOTAL " + pageName}
                                color={"primary"}
                                value={cardObj.totalLabelValue}
                            />
                        </Grid>
                        <Grid item lg={4} md={3} xl={6} xs={12}>
                            <DashBoardCharts
                                title={cardObj.firstLabel}
                                color={"warning"}
                                value={cardObj.firstLabelValue}
                            />
                        </Grid>
                        <Grid item lg={4} md={3} xl={6} xs={12}>
                            <DashBoardCharts
                                title={cardObj.secondLabel}
                                color={"info"}
                                value={cardObj.secondLabelValue}
                            />
                        </Grid>
                    </Grid>
                ): pageName==="Admins"|| pageName==="Departments"? (
                    <Grid container spacing={2} justifyContent="space-between" mb={2}>
                        <Grid item lg={4} md={12} xl={12} xs={12}>
                            <DashBoardCharts
                                title={"TOTAL " + pageName}
                                color={"primary"}
                                value={cardObj.totalLabelValue}
                            />
                        </Grid>
                    </Grid>
                ):''}


                <Card sx={{mt: 2}}>
                {pageName==="Invoices"? (<Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <Stack
                          direction={"row"}
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            m:2,
                          }}
                        >
                          
                          <Button color="inherit" variant="contained">
                            Download PDF
                          </Button>
                        <Stack direction={'row'}spacing={5}paddingRight={2}>
            <FormControlLabel  labelPlacement="start"control={<Checkbox />} label={<Typography variant="subtitle2">Resend Invoice</Typography>}/>
            <FormControlLabel  labelPlacement="start"control={<Checkbox />} label={<Typography variant="subtitle2">Mark as Paid</Typography>} />
                            </Stack> 
                        </Stack>
                      </Grid>
                      </Grid>):''}
                    <UserListToolbar
                        pageName={pageName}
                        numSelected={selected.length}
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        filterSearcBy={selectSearchBy}
                        onFilterSearchBy={onfilterSearchBy}
                        searchByOptionList={SEARCH_BY_OPTIONS}
                    />

                    <TableContainer
                        sx={{minWidth: 800, maxHeight: 500, overflow: "auto"}}
                    >

                        <Table>
                            <UserListHead
                                order={order}
                                orderBy={orderBy}
                                headLabel={getTableHeadlist(pageName)}
                                rowCount={LIST.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />

                            <TableBody>
                                {filteredUsers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) =>
                                        renderTableContent(pageName, row, selected, handleClick)
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
            </Container>
            <AddNew open={open} handleClose={handleClose} pageName={pageName}/>
        </Page>
    );
}
