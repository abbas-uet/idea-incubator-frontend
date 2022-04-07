import React from 'react'
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
export default function Skills() {
  return (
    <Grid container spacing={3} justifyContent="center">
    <Grid item md={12}>
    <Autocomplete
      sx={{ minWidth: 400 }}
      id="free-solo-demo"
      freeSolo
      options={skill.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label="Skills" />}
    />
  </Grid>
  </Grid>
  )
}
const skill = [
    { title: "C++" },
    { title: "Java" },
    { title: "Python" },
    { title: "C" },
    { title: "C#" },
    { title: "Perl" },
    { title: "Ruby" },
    { title: "Go" },
    { title: "Kotlin" },
  ];