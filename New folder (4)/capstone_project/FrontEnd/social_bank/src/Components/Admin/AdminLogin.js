import * as React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik'
import * as yup from 'yup'
import Swal from 'sweetalert2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../User/Header';
import { login } from '../../Services/EmployeeAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const paperStyle = { padding: '30px 20px', width: 350, margin: '20px auto', marginTop: 100 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const margin = { marginTop: 5, marginBottom: 5 }

    let navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {

            login(values)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('usertype', res.data.usertype);
                        setLoading(true)
                        setOpen(true)
                        setTimeout(() => {
                            navigate("/admin/dashboard")
                            setLoading(false)
                            setOpen(false)
                        }, 2000)
                    }
                }).catch((error) => {
                    if (error.response.status === 401) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.message,
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.message,
                        })
                    };
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email('Invalid email Address')
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });
    return (
        <>
            <Header />
            <Grid>
                <Paper elevation={24} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Employee Login</h2><br />
                    </Grid>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField fullWidth label='Email' placeholder="Employee email address" style={margin} id="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null} />

                        <TextField fullWidth label='Password' placeholder="Enter your password" style={margin} id="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} error={formik.errors.password && formik.touched.password ? true : false} helperText={formik.errors.password && formik.touched.password ? formik.errors.password : null} />

                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                        <br /><br />
                        <Typography >
                            <Link href="/forgotpassword" style={margin} >
                                Forgot password ?
                            </Link>
                        </Typography>
                        <br />
                        <Typography style={margin}  > Don't have an account ?
                            <Link href="/register" >
                                Sign Up
                            </Link>
                        </Typography>
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

export default Login