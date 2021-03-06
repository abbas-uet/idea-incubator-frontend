import {filter} from "lodash";
import React, {useEffect, useState} from "react";

// material
import {
    Button,
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
import AddNew from "../components/_dashboard/Create New/AddNew";

// ----------------------------------------------------------------------
import axios from 'axios';
import {getComparator} from '../../Utils/SortUtilityFunctions';
import {Icon} from "@iconify/react/dist/iconify";
import plusFill from "@iconify/icons-eva/plus-fill";
import {getTableData, getTwoTableAll} from "../../ApiServices/getData";


const UserTableHead=[
    {id: "id", label: "ID", alignRight: false},
    {id: "department", label: "Department Name", alignRight: false},
    {id: "noofadmins", label: "No of Admins", alignRight: false},
    {id: ""},
];

const UserSearchByOptions= [{id: "id", label: "ID"},
    {id:'departmentname',label:"Department Name"}];


function applySortFilter(array, comparator, query, filterSearchBy) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    if (query) {
        return filterSearchBy === "id"
            ? filter(array, (_user) => _user.id === parseInt(query))
            : filterSearchBy === "departmentname"
                ? filter(
                    array,
                    (_user) =>
                        _user.departmentname.toLowerCase().indexOf(query.toLowerCase()) !== -1
                )
                : "";
    }
    return stabilizedThis.map((el) => el[0]);
}



function Department_SuperAdminEnd(props) {


    const [LIST,setLIST]=useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('username');
    const [filterName, setFilterName] = useState('');
    const [selectSearchBy, setselectSearchBy] = useState(UserSearchByOptions[0].id)
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(async () => {
        const response = await getTableData('department');
        if(response.status===200) {
            setLIST(response.data);
        }else{
            console.log(response.status);
        }
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
        <Page title={"Departments | Idea Incubator"}>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                >
                    <BreadCrumb linkArr={["Dashboard", 'Departments']}/>
                    <Button
                        variant="contained"
                        color={"inherit"}
                        onClick={handleClickOpen}
                        startIcon={<Icon icon={plusFill}/>}
                    >
                        Add Department
                    </Button>
                </Stack>


                    <Grid container spacing={2} justifyContent="space-between" mb={2}>
                        <Grid item lg={4} md={12} xl={12} xs={12}>
                            <DashBoardCharts
                                title={"TOTAL Departments"}
                                color={"primary"}
                                value={"24"}
                            />
                        </Grid>

                </Grid>



                <Card sx={{mt: 2}}>
                    <UserListToolbar
                        pageName="Departments"
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
                                            let {id, departmentname, admins} = row;
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
                                                    <TableCell align="left">{admins}</TableCell>

                                                    <TableCell align="right">
                                                        <UserMoreMenu pageName={"Departments"} id={id}/>
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
            <AddNew open={open} handleClose={handleClose} pageName={"Departments"}/>
        </Page>
    );
}

export default Department_SuperAdminEnd;
