import React, {useEffect, useState} from "react";
import {Grid, TablePagination, Typography} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import SearchBar from "./SearchBar/SearchBar";
import Slider from "@mui/material/Slider";
import MentorData from "../Utils/MentorData";
import {getTableData, getThreeTableAll} from "../../../ApiServices/getData";
export default function MentorPage() {
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
    const response = await getTableData('mentor');
    if (response.status === 200) {
      setLIST(response.data);
    } else {
      console.log(response.status);
    }
  },[]);
  const [value, setValue] = React.useState([8, 16]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={12}>
          <Grid item xs={12} md={6}>
            <SearchBar title="Search by name" />
          </Grid>
          <Grid item xs={12} md={5} sx={{mt:1}}>
            <SearchBar title="Search by location" />
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
          <Grid item xs={2} md={2}>
            <Typography sx={{ mt: 3, mb: 2, ml: 1, mr: 2 }} variant="h6">
              Available Hours
            </Typography>
          </Grid>
          <Grid item xs={2} md={2}>
            <Slider
              sx={{ mt: 3, mb: 2, ml: 1, mr: 2 }}
              value={value}
              color="secondary"
              onChange={handleChange}
              max={16}
              min={8}
              disableSwap
            />
          </Grid>
          {/* <Grid item xs={0.5} md={0.5}></Grid> */}
          <Grid item xs={2} md={2}>
            <Typography sx={{ mt: 3.5, mb: 2, ml: 4, mr: 1 }}>
              {"(" + (value[0] > 12
                ? value[0] - 12 + "PM"
                : value[0] === 12
                  ? value[0] + "PM"
                  : value[0] + "AM") +
                "-" +
                (value[1] > 12
                  ? value[1] - 12 + "PM"
                  : value[1] === 12
                    ? value[1] + "PM"
                    : value[1] + "AM") + ")"}
            </Typography>
          </Grid>

        </Grid>
        <Grid item container spacing={2} xs={12}  >
          {
            LIST.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return(
                  <Grid key={row.id} item xs={12} md={4}>
                    <MentorData values={row} />
                  </Grid>
                  );
            })
          }
        </Grid>
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
    </Box>
  );
}
