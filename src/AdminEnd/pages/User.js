import {filter} from 'lodash';
import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


// material
import {
    Avatar,
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
    Typography
} from '@mui/material';
// components
import Page from '../components/Page';
import SearchNotFound from '../components/SearchNotFound';
import {UserListHead, UserListToolbar, UserMoreMenu} from '../components/_dashboard/user';
//
import BreadCrumb from "../components/_dashboard/BreadCrumb";
import {DashBoardCharts} from "../components/_dashboard/DashBoardCharts";
import AddNew from "../components/_dashboard/Create New/AddNew";
import {ListofTableContent} from "../_mocks_/ListofTableContent";
import TableItemDetails from "./TableItemDetails";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    [{id: 'id', label: 'Id', alignRight: false},
        {id: 'username', label: 'User Name', alignRight: false},
        {id: 'email', label: 'Email', alignRight: false},
        {id: 'projectname', label: 'Project Name', alignRight: false},
        {id: 'subusers', label: 'Sub Users', alignRight: false},
        {id: ''},],
    [{id: 'id', label: 'Id', alignRight: false},
        {id: 'email', label: 'Email', alignRight: false},
        {id: 'name', label: 'Name', alignRight: false},
        {id: 'field', label: 'Filed', alignRight: false},
        {id: 'projectname', label: 'Project Name', alignRight: false},
        {id: ''},],
    [
        {id: 'name', label: 'Name', alignRight: false},
        {id: 'quantity', label: 'Quantity', alignRight: false},
        {id: 'description', label: 'Description', alignRight: false},
        {id: ''}],
    [{id: 'name', label: 'Name', alignRight: false},
        {id: 'email', label: 'email', alignRight: false},
        {id: 'regno', label: 'Reg #', alignRight: false},
        {id: 'skill', label: 'Skills', alignRight: false},
        {id: 'session', label: 'Session', alignRight: false},
        {id: ''}],
    [{id: 'id', label: 'Id', alignRight: false},
        {id: 'name', label: 'Name', alignRight: false},
        {id: 'username', label: 'User Name', alignRight: false},
        {id: 'email', label: 'Email', alignRight: false},
        {id: 'field', label: 'Field', alignRight: false},
        {id: ''}],
    [{id: 'id', label: 'Id', alignRight: false},
        {id: 'username', label: 'User Name', alignRight: false},
        {id: 'email', label: 'Email', alignRight: false},
        {id: 'companyname', label: 'Company Name', alignRight: false},
        {id: 'services', label: 'Services', alignRight: false},
        {id: ''}],
];


const SEARCH_BY_LIST = [
    [{id: 'id', label: 'ID'},
        {id: 'projectname', label: 'Project Name'},],
    [{id: 'id', label: 'ID'},
        {id: 'name', label: 'Name'},
        {id: 'projectname', label: 'Project Name',},],
    [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Name',},],
    [{id: 'id', label: 'ID'},
        {id: 'name', label: 'Name',},],
    [{id: 'id', label: 'ID'},
        {id: 'name', label: 'Name',},],
    [{id: 'id', label: 'ID',},
        {id: 'companyname', label: 'Company Name',},],
]


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
    return order === 'desc'
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
        return filterSearchBy === 'id' ? filter(array, (_user) => _user.id === parseInt(query)) :
            filterSearchBy === 'name' ? filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
                filterSearchBy === 'projectname' ? filter(array, (_user) => _user.projectname.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
                    filter(array, (_user) => _user.companyname.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    }
    return stabilizedThis.map((el) => el[0]);
}

function getTableHeadlist(pageName) {
    return pageName === 'User' ? TABLE_HEAD[0] : pageName === 'Ideas' ? TABLE_HEAD[1] :
        pageName === 'Assets' ? TABLE_HEAD[2] : pageName === 'Talent' ? TABLE_HEAD[3] :
            pageName === 'Mentors' ? TABLE_HEAD[4] : pageName === 'Industry' ? TABLE_HEAD[5] : ''
}


function getSearchByOption(pageName) {
    return pageName === 'User' ? SEARCH_BY_LIST[0] : pageName === 'Ideas' ? SEARCH_BY_LIST[1] :
        pageName === 'Assets' ? SEARCH_BY_LIST[2] : pageName === 'Talent' ? SEARCH_BY_LIST[3] :
            pageName === 'Mentors' ? SEARCH_BY_LIST[4] : pageName === 'Industry' ? SEARCH_BY_LIST[5] : ''
}


//Rendering the Tables of Different Tabs
function renderTableContent(pageName, row, selected, handleClick) {
    if (pageName === 'User') {
        let {id, username, email, projectname, subusers} = row;
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
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{projectname}</TableCell>
                <TableCell align="left">
                    {subusers}
                </TableCell>

                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === 'Ideas') {
        let {id, email, name, field, projectname} = row;
        let isItemSelected = selected.indexOf(name) !== -1;
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
                        onChange={(event) => handleClick(event, name)}
                    />
                </TableCell>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{field}</TableCell>
                <TableCell align="left">
                    {projectname}
                </TableCell>

                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === 'Assets') {
        let {id, name, quantity, description} = row;
        let isItemSelected = selected.indexOf(name) !== -1;
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
                        onChange={(event) => handleClick(event, name)}
                    />
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{quantity}</TableCell>
                <TableCell align="left">{description}</TableCell>

                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === 'Talent') {
        let {id, name, email, regno, skill, session} = row;
        let isItemSelected = selected.indexOf(name) !== -1;
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
                        onChange={(event) => handleClick(event, name)}
                    />
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{regno}</TableCell>
                <TableCell align="left">{skill}</TableCell>
                <TableCell align="left">{session}</TableCell>
                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === 'Industry') {
        let {id, username, email, companyname, services} = row;
        let isItemSelected = selected.indexOf(companyname) !== -1;
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
                        onChange={(event) => handleClick(event, companyname)}
                    />
                </TableCell>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{companyname}</TableCell>


                <TableCell align="left">
                    {services}
                </TableCell>

                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    } else if (pageName === 'Mentors') {
        let {id, name, username, email, field} = row;
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
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{field}</TableCell>

                <TableCell align="right">
                    <UserMoreMenu/>
                </TableCell>
            </TableRow>
        );
    }
}

export default function User({pageName, cardObj, pageChange}) {
    const SEARCH_BY_OPTIONS = getSearchByOption(pageName);
    //LIST OF TABLE CONTENT


    const LIST = ListofTableContent(pageName);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [selectSearchBy, setselectSearchBy] = useState(SEARCH_BY_OPTIONS[0].id)
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - LIST.length) : 0;
    const filteredUsers = applySortFilter(LIST, getComparator(order, orderBy), filterName, selectSearchBy);

    const isUserNotFound = filteredUsers.length === 0;


    return (
        <Page title={pageName + " | Idea Incubator"}>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                        <BreadCrumb linkArr={['Dashboard', pageName]}/>
                 
                    <Button
                        variant="contained"
                        color={'inherit'}
                        onClick={handleClickOpen}
                        startIcon={<Icon icon={plusFill}
                        />}
                    >
                        Add {pageName}
                    </Button>
                </Stack>

                {pageName === 'User' || pageName === 'Mentors' || pageName === 'Talent' || pageName === 'Ideas' ?
                    <Grid container spacing={2} justifyContent="space-between" mb={2}>
                        <Grid item lg={4}
                              md={3}
                              xl={6}
                              xs={12}>
                            <DashBoardCharts title={'TOTAL ' + pageName} color={'primary'}
                                             value={cardObj.totalLabelValue}/>
                        </Grid>
                        <Grid item lg={4}
                              md={3}
                              xl={6}
                              xs={12}>
                            <DashBoardCharts title={cardObj.firstLabel} color={'warning'}
                                             value={cardObj.firstLabelValue}/>
                        </Grid>
                        <Grid item lg={4}
                              md={3}
                              xl={6}
                              xs={12}>
                            <DashBoardCharts title={cardObj.secondLabel} color={'info'}
                                             value={cardObj.secondLabelValue}/>
                        </Grid>
                    </Grid> : <Grid container spacing={2} justifyContent="space-between" mb={2}>
                        <Grid item lg={4}
                              md={12}
                              xl={12}
                              xs={12}>
                            <DashBoardCharts title={'TOTAL ' + pageName} color={'primary'}
                                             value={cardObj.totalLabelValue}/>
                        </Grid>
                    </Grid>
                }

                <Card sx={{mt: 2}}>
                    <UserListToolbar
                        pageName={pageName}
                        numSelected={selected.length}
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        filterSearcBy={selectSearchBy}
                        onFilterSearchBy={onfilterSearchBy}
                        searchByOptionList={SEARCH_BY_OPTIONS}
                    />

                    <TableContainer sx={{minWidth: 800, maxHeight: 500, overflow: 'auto'}}>
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
                                    .map((row) => renderTableContent(pageName, row, selected, handleClick)
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
