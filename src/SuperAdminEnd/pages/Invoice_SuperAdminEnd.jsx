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
    Typography,
} from "@mui/material";
// components
import Page from "../components/Page";
import SearchNotFound from "../components/SearchNotFound";
import {UserListHead, UserListToolbar, UserMoreMenu,} from "../components/_dashboard/user";
//
import BreadCrumb from "../components/_dashboard/BreadCrumb";

// ----------------------------------------------------------------------
import axios from 'axios';
import {getComparator} from '../../Utils/SortUtilityFunctions';
import FormControlLabel from "@mui/material/FormControlLabel";
import {getThreeTableLimit, getTwoTableAll} from "../../ApiServices/getData";


const UserTableHead=[
    {id: "id", label: "Invoice", alignRight: false},
    {id: "createdon", label: "Created On", alignRight: false},
    {id: "duedate", label: "Due Date", alignRight: false},
    {id: "billingperson", label: "Billing Person", alignRight: false},
    {id: "paymentmethod", label: "Payment Method", alignRight: false},
    {id: "ammount", label: "Ammount", alignRight: false},
    {id: "status", label: "Status", alignRight: false},
    {id: ""},
];

const UserSearchByOptions= [{id: "id", label: "Invoice ID"}];


function applySortFilter(array, comparator, query, filterSearchBy) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    if (query) {
        return filter(array, (_user) => _user.invoiceid === parseInt(query));
    }
    return stabilizedThis.map((el) => el[0]);
}



function Invoice_SuperAdminEnd(props) {


    const [LIST,setLIST]=useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('username');
    const [filterName, setFilterName] = useState('');
    const [selectSearchBy, setselectSearchBy] = useState(UserSearchByOptions[0].id)
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(async() => {
        const response = await getTwoTableAll('invoice','user');
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
        <Page title={"Invoices | Idea Incubator"}>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                >
                    <BreadCrumb linkArr={["Dashboard", 'Invoices']}/>
                </Stack>

                <Grid container spacing={3}>
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
                </Grid>


                <Card sx={{mt: 2}}>
                    <UserListToolbar
                        pageName="Invoices"
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
                                            let {
                                                invoiceid,
                                                createdon,
                                                duedate,
                                                paymentMethod,
                                                ammount,
                                                status,
                                                User,
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
                                                    <TableCell align="left">{User.fullname}</TableCell>
                                                    <TableCell align="left">{paymentMethod}</TableCell>
                                                    <TableCell align="left">{ammount}</TableCell>
                                                    <TableCell align="left">
                                                        {status}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <UserMoreMenu pageName={"Invoices"} id={invoiceid}/>
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

export default Invoice_SuperAdminEnd;
