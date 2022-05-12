import React, {useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import {
    Avatar,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    FormControlLabel,
    FormGroup, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
    TextField
} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import userimg from "../../../StaticAssets/userimg.jpg";
import ImageIcon from "@mui/icons-material/Image";
import FabButton from "./FabButton";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";


const user = {
    avatar: userimg,
    city: 'Sahiwal',
    country: 'Punjab',
    jobTitle: 'Senior Developer',
    name: 'Noor-ul-kamishkah',
    timezone: 'GTM-7'
};


const SmallAvatar = styled(Avatar)(({theme}) => ({
    width: 40,
    height: 40,
    border: `2px solid ${theme.palette.background.paper}`,
}));
export default function ForIndustry() {
    const [values, setValues] = useState({
        name: 'Noor',
        lastName: 'Rani',
        headline: '',
        email: 'noor39@gmail.com',
        Location: 'Lahore',
        website: '',
        aboutme: '',
        location: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>

                    <Card>
                        <CardContent>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Avatar
                                    src={user.avatar}
                                    sx={{
                                        height: 150,
                                        mb: 2,
                                        width: 150
                                    }}
                                />
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h5"
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body2"
                                >
                                    {`${user.city} ${user.country}`}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body2"
                                >
                                    {user.timezone}
                                </Typography>
                            </Box>
                        </CardContent>
                        <Divider/>
                        <CardActions>

                            <Button color="primary" variant="text" component="label" fullWidth>Upload Picture
                                <input type="file" accept={'image/*'} hidden size="large"/></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>

                    <form
                        autoComplete="off"
                        noValidate
                    >
                        <Card>
                            <CardHeader
                                subheader="The information can be edited"
                                title="Profile"
                            />
                            <Divider/>
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            helperText="Please specify the Name"
                                            label="Name"
                                            name="name"
                                            onChange={handleChange}
                                            required
                                            value={values.name}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            onChange={handleChange}
                                            required
                                            value={values.email}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Headline"
                                            name="headline"
                                            onChange={handleChange}
                                            required
                                            value={values.headline}
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Location"
                                            name="Location"
                                            onChange={handleChange}

                                            value={values.Location}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Add Website"
                                            name="website"
                                            onChange={handleChange}
                                            required
                                            value={values.website}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="About Me"
                                            name="aboutme"
                                            multiline
                                            rows={3}
                                            onChange={handleChange}
                                            required
                                            value={values.aboutme}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
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
                            </CardContent>
                            <Divider/>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 2
                                }}
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                >
                                    Save details
                                </Button>
                            </Box>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}
