import React from 'react'
import Header from './Header';
import { Grid, Paper, TextField, Typography, Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ContactMailIcon from '@mui/icons-material/ContactMail';


export default function contact() {

    const paperStyle = { padding: 20, maxHeight: 900, maxWidth: 600, margin: "20px auto", marginTop: 100 }
    const margin = { marginTop: 5, marginBottom: 5 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    return (
        <>
            <Header />
            <div className="App">
                <Grid>
                    <Paper elevation={24} style={paperStyle}>
                        <Card style={{ maxWidth: 800, Height: 600, padding: "20px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <Grid align='center'>
                                    <Avatar style={avatarStyle}><ContactMailIcon /></Avatar>
                                    <h2>Contact Us</h2>
                                </Grid>
                                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                    <br />
                                    Fill up the form and our team will get back to you within 24 hours.
                                    <br /><br />
                                </Typography>
                                <form>
                                    <Grid container spacing={1}>
                                        <Grid xs={12}  item>
                                            <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required style={margin} />
                                        </Grid>
                                        <Grid xs={12}  item>
                                            <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required style={margin} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required style={margin} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required style={margin} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Message" multiline rows={6} placeholder="Type your message here" variant="outlined" fullWidth required style={margin} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        </>
    )
}