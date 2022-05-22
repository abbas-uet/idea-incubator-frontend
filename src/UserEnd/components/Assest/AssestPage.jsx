import React, {useEffect, useState} from 'react'
import {Grid, TablePagination} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import SearchBar from "../Mentors/SearchBar/SearchBar";
import AssestsData from '../Utils/AssestsData';
import {getTableData} from "../../../ApiServices/getData";

export default function AssestPage() {
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
    const response = await getTableData('asset');
    if (response.status === 200) {
      setLIST(response.data);
    } else {
      console.log(response.status);
    }
  },[]);
    return (
        <Grid container spacing={7}>
      <Grid item container xs={12} md={12} sx={{mb:4}} paddingLeft={0}>
          <Grid item xs={12} md={6} sx={{mt:2}}>
        <SearchBar title="Search by name" />
      </Grid>
      <Grid item xs={12} md={5}>
        <SearchBar title="Search by location" />
      </Grid>
      <Grid item xs={1} md={1}>
        <Button
          sx={{ml:1,mb:1}}
          variant="contained"
          color="secondary"
          disableElevation
        >
          <FavoriteIcon />
        </Button>
      </Grid>
      </Grid>
      <Grid item container spacing={3} xs={12} marginTop={2} marginBottom={2} >
        {
          LIST.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return(
                    <Grid key={row.id} item xs={12} md={4}>
                      <AssestsData values={row} />
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
    )
}
