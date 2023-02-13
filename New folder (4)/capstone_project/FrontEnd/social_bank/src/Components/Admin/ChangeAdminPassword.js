import React from 'react'
import Header from './AdminHeader';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useFormik } from 'formik'
import * as yup from 'yup'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';

const Signup = () => {

    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const paperStyle = { padding: '30px 20px', width: 350, margin: "20px auto", marginTop: 100 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const margin = { marginTop: 5, marginBottom: 5 }

    const formik = useFormik({
        initialValues: {
            email: '',
            currentpassword: '',
            newpassword: '',
            confirmpassword: ''
        },
        onSubmit: values => {
            fetch('http://localhost:8090/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status !== 409) {
                        setLoading(true)
                        setOpen(true)
                        setTimeout(() => {
                            setLoading(false)
                            setOpen(false)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Registration Successful.',
                                showConfirmButton: false,
                                timer: 1000
                            })
                            // navigate("/login")
                        }, 2000);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'User with email address already exists',
                        })
                    }
                })
        },
        validationSchema: yup.object().shape({
            currentpassword: yup.string()
                .required('Current password cannot be left blank'),
            newpassword: yup.string()
                .required('New password cannot be left blank')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password didnot meet the criteria'),
            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .test('confirmpassword', 'Password & confirm password should be same', function (confirmpassword) {
                    if (this.parent.password === confirmpassword) {
                        return true;
                    }
                    return false;
                })
        }),
    });

    return (
        <>
            <Header />
            <Grid >
                <Paper elevation={24} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Change Password</h2>
                        <br />
                    </Grid>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField fullWidth label='Current Password' placeholder="Enter your current password" style={margin} id="currentpassword" name="currentpassword" value={formik.values.currentpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.currentpassword && formik.touched.currentpassword ? true : false} helperText={formik.errors.currentpassword && formik.touched.currentpassword ? formik.errors.currentpassword : null} />

                        <TextField fullWidth label='New Password' placeholder="Enter your new password" style={margin} id="newpassword" name="newpassword" value={formik.values.newpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.newpassword && formik.touched.newpassword ? true : false} helperText={formik.errors.newpassword && formik.touched.newpassword ? formik.errors.newpassword : null} />

                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style={margin} id="confirmpassword" name="confirmpassword" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.confirmpassword && formik.touched.confirmpassword ? true : false} helperText={formik.errors.confirmpassword && formik.touched.confirmpassword ? formik.errors.confirmpassword : null} />

                        <Button type='submit' variant='contained' color='primary' style={btnstyle} fullWidth>Change Password</Button>

                        {loading ? <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop> : null}
                    </form>
                </Paper>
            </Grid>
        </>
    )
}

export default Signup;