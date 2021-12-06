import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup,FormControlLabel } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));
export default function ForIndustry() {
  return (
    <Grid container justify="center" alignItems="center">
      <Card>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
          m={1}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <SmallAvatar>
                <EditIcon />
              </SmallAvatar>
            }
          >
            <Avatar sx={{ width: 200, height: 200 }}>
              <PersonIcon sx={{ fontSize: "11rem" }} />
            </Avatar>
          </Badge>
        </Box>
        <Box textAlign="left" marginTop={2} padding={3}>
          <Grid container spacing="3">
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Vision/Headline"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="About"
                variant="outlined"
                fullWidth
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Add website"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h6">
                Type of Service we provide for you
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Capital Resources"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Funding"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Investment"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Dividends"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Equity Share/Stocks"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Fixed Interest"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Mutual Funds"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Certificate of Deposit"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Training"
                />

              </FormGroup>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="right" marginBottom={3} paddingRight={3}>
          <Button
            color="secondary"
            startIcon={<SaveIcon />}
            variant="contained"
            size="large"
          >
            Save
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
