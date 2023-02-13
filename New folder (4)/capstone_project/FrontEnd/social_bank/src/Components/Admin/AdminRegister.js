import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from '../User/Header';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { register } from '../../Services/EmployeeAuth';

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
            empID: '',
            fullname: '',
            email: '',
            role: '',
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
            empID: yup.number()
                .min(5, 'Employee ID is too short')
                .required('Employee ID is required'),
            fullname: yup.string()
                .min(3, 'Fullname is too short')
                .required('Fullname cannot be left blank'),
            email: yup.string()
                .email('Invalid email role')
                .required('Email cannot be left blank'),
            role: yup.string()
                .required('role cannot be left blank'),
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

                        <TextField fullWidth label='Employee ID' placeholder="Enter your Employee ID" autoComplete="off" style={margin} id="empID" name="empID" value={formik.values.empID} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.empID && formik.touched.empID ? true : false} helperText={formik.errors.empID && formik.touched.empID ? formik.errors.empID : null} />

                        <TextField fullWidth label='Full Name' placeholder="Enter your name" style={margin} id="fullname" name="fullname" autoComplete="off"value={formik.values.fullname} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.fullname && formik.touched.fullname ? true : false} helperText={formik.errors.fullname && formik.touched.fullname ? formik.errors.fullname : null} />

                        <TextField fullWidth label='Email' placeholder="Enter your email" autoComplete="off" style={margin} id="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null} />

                        <TextField fullWidth label='Role' placeholder="Enter your role" style={margin} id="role" name="role" value={formik.values.role} onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="off" error={formik.errors.role && formik.touched.role ? true : false} helperText={formik.errors.role && formik.touched.role ? formik.errors.role : null} />

                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={margin} id="phonenumber" name="phonenumber" autoComplete="off" value={formik.values.phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.phonenumber && formik.touched.phonenumber ? true : false} helperText={formik.errors.phonenumber && formik.touched.phonenumber ? formik.errors.phonenumber : null} />

                        <TextField fullWidth label='Password' placeholder="Enter your password" style={margin} id="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="off" error={formik.errors.password && formik.touched.password ? true : false} helperText={formik.errors.password && formik.touched.password ? formik.errors.password : null} />

                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style={margin} id="confirmpassword" name="confirmpassword" value={formik.values.confirmpassword} onBlur={formik.handleBlur} autoComplete="off" onChange={formik.handleChange} error={formik.errors.confirmpassword && formik.touched.confirmpassword ? true : false} helperText={formik.errors.confirmpassword && formik.touched.confirmpassword ? formik.errors.confirmpassword : null} />

                        <FormControlLabel
                            id="terms"
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