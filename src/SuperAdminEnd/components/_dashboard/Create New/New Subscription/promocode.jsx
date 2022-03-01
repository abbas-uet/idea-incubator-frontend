import React from "react";
import {
  Grid,
  FormControl,
  Select,
  FormControlLabel,
  RadioGroup,
  MenuItem,
  Radio,
  Typography,
  InputLabel,
  Slider,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

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
const unit = ["$", "PKR", "EURO"];
function getStyles(name, planName, theme) {
  return {
    fontWeight:
      planName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Promocode() {
  const [clearedDate, setClearedDate] = React.useState(null);
  const [value, setValue] = React.useState(new Date());
  const theme = useTheme();
  const [values, setValues] = useState({
    name: "",
    amount: "",
    emails: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [dunit, setdunit] = React.useState([]);
  const handleChangeunit = (event) => {
    const {
      target: { value },
    } = event;
    setdunit(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={12}>
        <Stack
          direction={"row"}
          spacing={13}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.name}
            sx={{ minWidth: 300 }}
          />
        </Stack>
      </Grid>
      <Grid item md={12}>
        <Stack
          direction={"row"}
          spacing={10.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Discount
          </Typography>
          <Stack direction={"row"} spacing={1} sx={{ ml: 2 }}>
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              size="small"
              name="amount"
              onChange={handleChange}
              value={values.amount}
              sx={{ maxWidth: 170 }}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={dunit}
                  onChange={handleChangeunit}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {unit.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, dunit, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={12}>
        <Stack
          direction={"row"}
          spacing={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Expiry Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props } sx={{ minWidth: 300 }}size='small'/>}
              label="Date-Time"
              clearable
          value={clearedDate}
          onChange={(newValue) => setClearedDate(newValue)}
              
            />
          </LocalizationProvider>
        </Stack>
      </Grid>
      <Grid item md={12}>
        <Stack
          direction={"row"}
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Allowed Emails
          </Typography>
          <TextField
            id="outlined-basic"
            label="Emails"
            multiline
            minRows={3}
            name="emails"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.emails}
            sx={{ minWidth: 300 }}
          />
        </Stack>
      </Grid>
      <Grid item md={1.5}></Grid>
      <Grid item md={10.5} xs={12}>
        <Stack
          direction={"row"}
          spacing={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Button color="primary" variant="contained" sx={{ ml: 2 }}>
            Save
          </Button>
          <Button color="error" variant="outlined">
            Cancel
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
