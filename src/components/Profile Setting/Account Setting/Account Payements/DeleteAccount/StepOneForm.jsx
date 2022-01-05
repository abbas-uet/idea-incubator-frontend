import React from 'react'
import { Grid, FormControl, Select, FormControlLabel, RadioGroup, MenuItem, Radio, Typography, InputLabel, Slider, TextField } from '@mui/material'


const Fields = [{
    value: 'Bugs Or Support Problem',
    label: 'Bugs Or Support Problem',
}, {
    value: 'Bugs',
    label: 'Bugs',
}, {
    value: 'Or',
    label: 'Or',
}, {
    value: 'Support Problem',
    label: 'Support Problem',
}, {
    value: 'Problem',
    label: 'Problem',
},
];
export default function StepOneForm() {
    const [SelectedReason, setSelectedReason] = React.useState("");

    const handleReasonChange = (event) => {
        setSelectedReason(event.target.value);
        //console.log(event.target.value);
    }

    const [otherSolution, setotherSolution] = React.useState('');

    const handleChangeSolution = (event) => {
        setotherSolution(event.target.value);
    };
    const [returnChancesvalue, setreturnChancesvalue] = React.useState(5);

    const handlereturnChancesvalue = (event, newValue) => {
        setreturnChancesvalue(newValue);
    };
    const [experiencevalue, setexperiencevalue] = React.useState("");

    const handleexperiencevalue = (event) => {
        setexperiencevalue(event.target.value);
    };

    return (
        <Grid container justifyContent='center' spacing={4}>
            <Grid item xs={12} md={5}>
                <Typography variant='h6'>Please Select your Reason for Leaving?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        {Fields.map(item => {
                            return <FormControlLabel value={item.value} control={<Radio />} label={item.label} onChange={handleReasonChange} />
                        })}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography variant='h6'>Which Alternate Solution you will Use?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Other Solution</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={otherSolution}
                        label="Other Solution"
                        onChange={handleChangeSolution}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography variant='h6'>How Likely will you come?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Slider
                    value={returnChancesvalue}
                    defaultValue={5}
                    step={1}
                    marks
                    min={0}
                    max={10}
                    valueLabelDisplay="auto"
                    onChange={handlereturnChancesvalue}
                    color='secondary'
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography variant='h6'>Anything else you would like to share about your experience?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="filled-multiline-flexible"
                    label="Share Thoughts"
                    multiline
                    maxRows={4}
                    value={experiencevalue}
                    onChange={handleexperiencevalue}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}
