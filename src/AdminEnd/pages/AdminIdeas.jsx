import React, {useState} from 'react';


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
    TableRow
} from '@mui/material';
// components
import Page from '../components/Page';
import SearchNotFound from '../components/SearchNotFound';
import {UserListHead, UserListToolbar, UserMoreMenu} from '../components/_dashboard/user';
//
import BreadCrumb from "../components/_dashboard/BreadCrumb";
import {DashBoardCharts} from "../components/_dashboard/DashBoardCharts";
import AddNew from "../components/_dashboard/Create New/AddNew";
import {applySortFilter, getComparator} from "../../Utils/SortUtilityFunctions";

// ----------------------------------------------------------------------

const TABLE_HEAD = [{id: 'id', label: 'Id', alignRight: false},
        {id: 'email', label: 'Email', alignRight: false},
        {id: 'name', label: 'Name', alignRight: false},
        {id: 'field', label: 'Filed', alignRight: false},
        {id: 'projectname', label: 'Project Name', alignRight: false},
        {id: ''}
];


const SEARCH_BY_LIST = [
    [{id: 'id', label: 'ID'},
        {id: 'projectname', label: 'Project Name'},],
    
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



function getTableHeadlist(pageName) {
    return pageName === 'User' ? TABLE_HEAD[0] : pageName === 'Ideas' ? TABLE_HEAD[1] :
        pageName === 'Assets' ? TABLE_HEAD[2] : pageName === 'Talent' ? TABLE_HEAD[3] :
            pageName === 'Mentors' ? TABLE_HEAD[4] : pageName === 'Industry' ? TABLE_HEAD[5] : ''
}




export default function AdminIdeas({ cardObj}) {

    const SEARCH_BY_OPTIONS = [{id: 'id', label: 'ID'},
        {id: 'name', label: 'Name'},
        {id: 'projectname', label: 'Project Name',},]
    //LIST OF TABLE CONTENT



    const [LIST,setLIST]=useState([]);
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
                    <BreadCrumb linkArr={['Dashboard','Ideas']}/>
                </Stack>


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
                    </Grid>

                <Card sx={{mt: 2}}>
                    <UserListToolbar
                        pageName={"Ideas"}
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
                                headLabel={TABLE_HEAD}
                                rowCount={LIST.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />

                            <TableBody>
                                {filteredUsers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) =>{
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
                                                    <UserMoreMenu pageName={"Ideas"} id={id}/>
                                                </TableCell>
                                            </TableRow>
                                        );
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
            <AddNew open={open} handleClose={handleClose} pageName={"Ideas"}/>
        </Page>
    );
}
