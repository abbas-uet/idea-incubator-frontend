import {filter} from "lodash";
import React, {useEffect, useState} from "react";

// material
import {
    Card,
    Checkbox,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
} from "@mui/material";
// components
import Page from "../components/Page";
import SearchNotFound from "../components/SearchNotFound";
import {UserListHead, UserListToolbar, UserMoreMenu,} from "../components/_dashboard/user";
//
import BreadCrumb from "../components/_dashboard/BreadCrumb";
import {DashBoardCharts} from "../components/_dashboard/DashBoardCharts";

// ----------------------------------------------------------------------
import axios from 'axios';
import {getComparator} from '../../Utils/SortUtilityFunctions';
import {getThreeTableLimit, getTwoTableAll} from "../../ApiServices/getData";


const UserTableHead=[
    {id: "id", label: "Id", alignRight: false},
    {id: "username", label: "User Name", alignRight: false},
    {id: "email", label: "Email", alignRight: false},
    {id: "subscription", label: "Subscription", alignRight: false},
    {id: "lastinvoice", label: "Last Invoice", alignRight: false},
    {id: "status", label: "Status", alignRight: false},
    {id: "duedate", label: "Due Date", alignRight: false},
    {id: ""},
];

const UserSearchByOptions= [
        {id: "id", label: "ID"},
        {id: "username", label: "User Name"},
    ];



function applySortFilter(array, comparator, query, filterSearchBy) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    if (query) {
        return filterSearchBy === "id"
            ? filter(array, (_user) => _user.userid === parseInt(query))
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


function User_SuperAdminEnd(props) {


    const [LIST,setLIST]=useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [selectSearchBy, setselectSearchBy] = useState(UserSearchByOptions[0].id)
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(async () => {
        const response = await getThreeTableLimit('user','subscription','invoice');
        if(response.status===200) {
            setLIST(response.data);
        }else{
            console.log(response.status);
        }
    }, [])




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
        <Page title={"Users | Idea Incubator"}>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                >
                    <BreadCrumb linkArr={["Dashboard", 'Users']}/>
                </Stack>

                            <Grid container spacing={2} justifyContent="space-between" mb={2}>
                                <Grid item lg={4} md={3} xl={6} xs={12}>
                                    <DashBoardCharts
                                        title={"TOTAL Users" }
                                        color={"primary"}
                                        value={'12k'}
                                    />
                                </Grid>
                                <Grid item lg={4} md={3} xl={6} xs={12}>
                                    <DashBoardCharts
                                        title={"Male"}
                                        color={"warning"}
                                        value={"6k"}
                                    />
                                </Grid>
                                <Grid item lg={4} md={3} xl={6} xs={12}>
                                    <DashBoardCharts
                                        title={"Female"}
                                        color={"info"}
                                        value={"5k"}
                                    />
                                </Grid>
                            </Grid>



                <Card sx={{mt: 2}}>
                    <UserListToolbar
                        pageName="Users"
                        numSelected={selected.length}
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        filterSearcBy={selectSearchBy}
                        onFilterSearchBy={onfilterSearchBy}
                        searchByOptionList={UserSearchByOptions}
                    />

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
                                {filteredUsers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) =>
                                        {
                                            let {userid, username, email, Subscription, Invoices, status, duedate} =
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
                                                    <TableCell align="left">{Subscription&&Subscription.planname}</TableCell>

                                                        <TableCell align="left">{Invoices.length>0&&Invoices[0].invoiceid}</TableCell>
                                                        <TableCell align="left">{Invoices.length>0&&Invoices[0].status}</TableCell>
                                                        <TableCell align="left">{Invoices.length>0&&Invoices[0].duedate}</TableCell>



                                                    <TableCell align="right">
                                                        <UserMoreMenu pageName={"Users"} id={userid}/>
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
            </Container>
        </Page>
    );
}

export default User_SuperAdminEnd;
