import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Scroll from "./Scroll";

export default function AddressForm() {

    const noOfPersons = [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }, { label: '6' }, { label: '7' }, { label: '8' }, { label: '8' }, { label: '10' },]

    return (
        <>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Ticket Details
                </Typography>
                <Grid container spacing={3} sx={{ pt: 1 }}>
                    <Grid item>
                        <FormControl>
                            <FormLabel id="screen">What Screen you would prefer?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="screen"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="2D" control={<Radio />} label="2D (Rs. 500)" />
                                <FormControlLabel value="3D" control={<Radio />} label="3D (Rs. 1000)" />
                                <FormControlLabel value="IMAX" control={<Radio />} label="IMAX (Rs. 1500)" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item >
                        <FormControl>
                            <FormLabel id="timetable">Please Select your preferred Show Time.</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="timetable"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="12:30" control={<Radio />} label="12:30" />
                                <FormControlLabel value="15:30" control={<Radio />} label="15:30" />
                                <FormControlLabel value="18:30" control={<Radio />} label="18:30" />
                                <FormControlLabel value="20:30" control={<Radio />} label="20:30" />
                                <FormControlLabel value="22:30" control={<Radio />} label="22:30" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={noOfPersons}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="No of persons ( Max-10 )" />}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
            <Scroll />
        </>
    );
}