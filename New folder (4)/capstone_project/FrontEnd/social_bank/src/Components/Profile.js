import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import proimg from "../images/Vivek_Avatar.jpeg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './User/Header';

const paperStyle = { padding: 20, width: 500, height: 700, margin: "0 auto", marginTop: 100 }
const margin = { marginTop: 5, marginBottom: 5 }
const headerStyle = { margin: 0, textAlign: 'center' }

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment width='500' >
            <Grid item xs={4} style={margin} >
                <Item>Account</Item>
            </Grid>
            <Grid item xs={4} style={margin}>
                <Item>Email</Item>
            </Grid>
            <Grid item xs={4} style={margin}>
                <Item>Item</Item>
            </Grid>
        </React.Fragment>
    );
}

export default function ImageAvatars() {
    return (
        <>
            <Header />
            <Grid align='center'>
                <Paper elevation={20} style={paperStyle}>
                    <Stack direction="column" spacing={0} >
                        <Avatar
                            alt="Remy Sharp"
                            src={proimg}
                            sx={{ width: 200, height: 200, margin: "0 auto", marginTop: 10 }}
                        />
                        <h2 style={headerStyle}>Aditya Sharma</h2>
                        {/* <Avatar alt="Remy Sharp" src={proimg} /> */}
                    </Stack>
                    <hr></hr>
                    <Box sx={{ flexGrow: 1, margin: "0 auto" }}>
                        <Grid container spacing={1}>
                            <Grid container item spacing={3}>
                                {/* <FormRow /> */}
                            </Grid>
                            <Grid container item spacing={3}>
                                {/* <FormRow /> */}
                            </Grid>
                            <Grid container item spacing={3}>
                                {/* <FormRow /> */}
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper >
            </Grid>
        </>
    );
}