import { Card } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Stack, Button, CardContent } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import Promocode from "./promocode";
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
const names = ["Basic", "Standard", "Pro", "Plus"];
const period=['Monthly','6 Months','Yearly'];
const currency=['$','PKR','EURO']
function getStyles(name, planName, theme) {
  return {
    fontWeight:
      planName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CreateSubscription(props) {
  const theme = useTheme();
  const [values, setValues] = useState({
    name: "",
    amount: "",
    totalamount:"",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [planName, setplanName] = React.useState([]);
  const [bilingperiod, setbilingperiod] = React.useState([]);
  const [dcurrency, setdcurrency] = React.useState([]);

  const handleChangeplanName = (event) => {
    const {
      target: { value },
    } = event;
    setplanName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  }; 


  const handleChangeBilingperiod = (event) => {
    const {
      target: { value },
    } = event;
    setbilingperiod(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangecurrency = (event) => {
    const {
      target: { value },
    } = event;
    setdcurrency(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [toggleCancel, settoggleCancel] = React.useState(false);
  const handleCancelChange = (event) => {
    settoggleCancel(event.target.checked);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={12}>
            <Stack
              direction={"row"}
              spacing={9}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Plan Name
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
              spacing={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Plan Type
              </Typography>
              <Box sx={{ minWidth: 223 }}>
                <FormControl fullWidth size="small" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={planName}
                    onChange={handleChangeplanName}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, planName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack
              direction={"row"}
              spacing={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Billing Period
              </Typography>
              <Box sx={{ minWidth: 223 }}>
                <FormControl fullWidth size="small" sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Period</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={bilingperiod}
                    onChange={handleChangeBilingperiod}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {period.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, bilingperiod, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack
              direction={"row"}
              spacing={11.2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Amount
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
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={dcurrency}
                      onChange={handleChangecurrency}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {currency.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, dcurrency, theme)}
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
          <Grid item xs={9} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}>
            <FormControlLabel
            
              control={
                <Checkbox checked={toggleCancel} onChange={handleCancelChange} />
              }
              label="Apply a promo code"
            ></FormControlLabel>
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item xs={12} md={12}>
            {toggleCancel && <Promocode />}
          </Grid>
          <Grid item md={12}>
            <Stack
              direction={"row"}
              spacing={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Total Amount
              </Typography>
              <TextField
                id="outlined-basic"
                label="Total Amount"
                variant="outlined"
                size="small"
                name="totalamount"
                onChange={handleChange}
                value={values.totalamount}
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
              <Button color="inherit" variant="contained" sx={{ml:2}}>
                Update
              </Button>
              <Button color="error" variant="outlined">
                Delete
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
