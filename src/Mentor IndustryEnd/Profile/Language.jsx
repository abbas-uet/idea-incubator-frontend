import React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const proficiency = ["Elementary proficiency","Limited working proficiency","Professional working proficiency","Full professional proficiency","Native or bilingual proficiency", ];
export default function Language() {
    const [values, setValues] = useState({
        associate:"",
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
     
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item md={12}>
        <Autocomplete
          sx={{ minWidth: 400 }}
          id="free-solo-demo"
          freeSolo
          options={languages.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="Language" />}
        />
      </Grid>
      <Grid item md={12}>
        <Box sx={{ minWidth: 223 }}>
          <FormControl fullWidth  sx={{ minWidth: 300 }}>
            <InputLabel id="demo-simple-select-label">
              Proficiency
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name="proficiency"
              value={values.proficiency}
              onChange={handleChange}
              input={<OutlinedInput label="Please Select" />}
              MenuProps={MenuProps}
            >
              {proficiency.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

const languages = [
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
