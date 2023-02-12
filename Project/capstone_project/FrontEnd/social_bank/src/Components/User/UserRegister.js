import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from './Header';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { register } from '../../Services/CustomerAuth';

const Signup = () => {

    let navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const paperStyle = { padding: '30px 20px', width: 350, margin: '20px auto', marginTop: 100 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const margin = { marginTop: 5, marginBottom: 5 }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            address: '',
            accountnumber: '',
            phonenumber: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: values => {

            register(values)
                .then(res => {
                    if (res.status === 201) {
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
                            navigate("/login")
                        }, 2000)
                    }
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.response.data.message,
                    })
                })
        },
        validationSchema: yup.object().shape({
            fullname: yup.string()
                .min(3, 'Fullname is too short')
                .required('Fullname cannot be left blank'),
            email: yup.string()
                .email('Invalid email Address')
                .required('Email cannot be left blank'),
            address: yup.string()
                .min(3, 'Address is too short')
                .required('Address cannot be left blank'),
            accountnumber: yup.number()
                .min(8, 'Account number should be 8 digits')
                .required('Account number cannot be left blank'),
            phonenumber: yup.number()
                .min(10, 'Phone number should be 10 digits')
                .required('Phone number cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
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
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField fullWidth label='Full Name' placeholder="Enter your name" style={margin} id="fullname" name="fullname" value={formik.values.fullname} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.fullname && formik.touched.fullname ? true : false} helperText={formik.errors.fullname && formik.touched.fullname ? formik.errors.fullname : null} />

                        <TextField fullWidth label='Email' placeholder="Enter your email" style={margin} id="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null} />

                        <TextField fullWidth label='Address' placeholder="Enter your Address" style={margin} id="address" name="address" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.address && formik.touched.address ? true : false} helperText={formik.errors.address && formik.touched.address ? formik.errors.address : null} />

                        <TextField fullWidth label='Account Number' placeholder="Enter your Account Number" style={margin} id="accountnumber" name="accountnumber" value={formik.values.accountnumber} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.accountnumber && formik.touched.accountnumber ? true : false} helperText={formik.errors.accountnumber && formik.touched.accountnumber ? formik.errors.accountnumber : null} />

                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={margin} id="phonenumber" name="phonenumber" value={formik.values.phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.phonenumber && formik.touched.phonenumber ? true : false} helperText={formik.errors.phonenumber && formik.touched.phonenumber ? formik.errors.phonenumber : null} />

                        <TextField fullWidth label='Password' placeholder="Enter your password" style={margin} id="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.password && formik.touched.password ? true : false} helperText={formik.errors.password && formik.touched.password ? formik.errors.password : null} />

                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style={margin} id="confirmpassword" name="confirmpassword" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.confirmpassword && formik.touched.confirmpassword ? true : false} helperText={formik.errors.confirmpassword && formik.touched.confirmpassword ? formik.errors.confirmpassword : null} />

                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />

                        <Button type='submit' variant='contained' color='primary' style={btnstyle} fullWidth>Sign up</Button>
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