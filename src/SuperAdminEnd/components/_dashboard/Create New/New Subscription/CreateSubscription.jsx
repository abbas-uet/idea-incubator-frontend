import { Card } from "@mui/material";
import React, {useEffect} from "react";
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
import Promocode from "./promocode";
import {getTableData, getTwoTableAll} from "../../../../../ApiServices/getData";
import CustomSnackbar from "../../../../../Utils/SnakBar";
import Page from "../../../Page";
import {Create} from "../../../../../ApiServices/create";
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
const types = ["Basic", "Standard", "Pro", "Plus"];
const period=['Monthly','6 Months','Yearly'];
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
    planName: "",
    amount: "",
    totalAmmount:"",
    currency:[],
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [planType, setplanType] = React.useState([]);
  const [bilingperiod, setbilingperiod] = React.useState([]);
  const [dcurrency, setdcurrency] = React.useState([]);
  const [promoId, setPromoId] = React.useState(null);


  const handleChangeplanType = (event) => {
    const {
      target: { value },
    } = event;
    setplanType(
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


  const [status,setStatus]=useState({'promoCode':null,'status':0,'subscription':null,'subStatus':0});



  useEffect(async() => {
    const response = await getTableData('currency_unit');
    if(response.status===200) {
      setValues({...values,["currency"]:response.data});
    }else{
      console.log(response.status);
    }
  }, [])


  const handleSaveSubscription=async()=>{
    const data={
      planname: values.planName,
      type:planType[0],
      billingperiod: bilingperiod[0],
      ammount:values.totalAmmount,
      unit:dcurrency.id
    };
    const response=await Create('subscription',data);
    if(response.status===200){
      setStatus({...status,["subscription"]:true,['subStatus']:response.data});
    }else{
      setStatus({...status,["subscription"]:true,['subStatus']:response.data});
    }
    if(promoId){
      console.log(promoId);
      const data={

      }

    }
  }


  return (
      <Page>
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
                name="planName"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.planName}
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
                    value={planType}
                    onChange={handleChangeplanType}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {types.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, planType, theme)}
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
                      {values.currency.map((name) => (
                        <MenuItem
                          key={name.id}
                          value={name}
                        >
                          {name.name}
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
            />
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item xs={12} md={12}>
            {toggleCancel && <Promocode setPromoId={setPromoId} currency={values.currency}
            status={status} setStatus={setStatus}/>}
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
                name="totalAmmount"
                onChange={handleChange}
                value={values.totalAmmount}
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
              <Button color="inherit" variant="contained" sx={{ml:2}}
              onClick={handleSaveSubscription}>
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
        {status.promoCode&&(status.status===200?
            <CustomSnackbar message={"Successfully Created the PromoCode"} type={'primary'}/>
            :
            <CustomSnackbar message={"Error While Creating the PromoCode"} type={'error'}/>)}
      </Page>
  );
}
