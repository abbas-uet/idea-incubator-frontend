import React from 'react'
import {
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    Stack,
    RadioGroup,
    Select,
    Slider,
    TextField,
    Typography
} from '@mui/material'


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
        <Grid container justifyContent='left' spacing={4}>
            <Grid item xs={12} md={12} ml={5}>
                <Stack direction={'row'} spacing={12}>

                <Typography variant='subtitle2' sx={{mt:1}}>Please Select your Reason for Leaving?</Typography>


                <FormControl component="fieldset" >
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={SelectedReason}
                    >
                        {Fields.map(item => {
                            return <FormControlLabel  sx={{fontSize:10}} value={item.value} control={<Radio />} label={item.label} onChange={handleReasonChange} />
                        })}
                    </RadioGroup>
                </FormControl>
                </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ml:5,mr:7}}>
                <Typography variant='subtitle2'>Which Alternate Solution you will Use?</Typography>
            </Grid>

            <Grid item xs={12} md={5}>
                <FormControl sx={{width:'45ch'}}>
                    <InputLabel id="demo-simple-select-helper-label">Other Solution</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        size='medium'
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
            <Grid item xs={12} md={4}sx={{ml:5,mr:7}}>
                <Typography variant='subtitle2'>How Likely will you come?</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{pr:4}}>
                <Slider
                    value={returnChancesvalue}
                    defaultValue={5}
                    step={1}
                    marks
                    size="medium"
                    min={0}
                    max={10}
                    valueLabelDisplay="auto"
                    onChange={handlereturnChancesvalue}
                    color='secondary'
                />
            </Grid>

            <Grid item xs={12} md={4}sx={{ml:5,mr:7}}>
                <Typography variant='subtitle2'>Anything else you would like to share about your experience?</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{pr:2}}>
                <TextField
                    sx={{pr:2}}
                    id="filled-multiline-flexible"
                    label="Share Thoughts"
                    multiline
                    rows={4}
                    value={experiencevalue}
                    onChange={handleexperiencevalue}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}
