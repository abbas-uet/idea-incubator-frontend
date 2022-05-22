import React, {useEffect, useState} from "react";
import {Grid, TablePagination} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import SearchBar from '../Mentors/SearchBar/SearchBar'
import TalentData from '../Utils/TalentData'
import {getTableData} from "../../../ApiServices/getData";
import AssestsData from "../Utils/AssestsData";

export default function TalentPage() {


    const [LIST, setLIST] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(async () => {
        const response = await getTableData('talent');
        if (response.status === 200) {
            setLIST(response.data);
        } else {
            console.log(response.status);
        }
    },[]);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item container xs={12} md={12}>
                    <Grid item xs={12} md={6}>
                        <SearchBar title="Search by name / Department" />
                    </Grid>
                    <Grid item xs={12} md={5} sx={{mt:1}}>
                        <SearchBar title="Search by Skill " />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Button
                            sx={{  mb: 1, ml: 1 }}
                            variant="contained"
                            color="secondary"
                            disableElevation
                        >
                            <FavoriteIcon />
                        </Button>
                    </Grid>


                    {/* <Grid item xs={0.5} md={0.5}></Grid> */}


                </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container xs={0} md={12}> </Grid>
                <Grid item container spacing={2} xs={12}  marginTop={4} marginBottom={2} >
                    {
                        LIST.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return(
                                    <Grid key={row.id} item xs={12} md={4}>
                                        <TalentData values={row} />
                                    </Grid>
                                );
                            })
                    }
                    <Grid item container xs={12} justifyContent={'flex-end'}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            size={'medium'}
                            count={LIST.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
