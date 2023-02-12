import React from 'react'
import fscslogo from "../images/FSCS_Protected_Logo.png";
import fraud from "../images/nw-security-banner-vishing-194x443.gif";
import "./CSS/Login.css";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
        ].join(','),
    },
});

export default function Login() {

    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:8090/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status !== 401) {
                        localStorage.setItem('token', data.access_token);
                        setLoading(true)
                        setOpen(true)
                        setTimeout(() => {
                            navigate("/dashboard");
                            setLoading(false)
                            setOpen(false)
                        }, 2000);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Incorrect email address or Password',
                        })
                    }
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email("Email address incorrect")
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });

    return (
        <>
            <div className='container-fluid'>
                <div className="top">
                    <div className="d-flex">
                        <h3 className='pt-4 pe-4'>Online Banking Services</h3>
                        <img src={fscslogo} alt="" />
                    </div>
                </div>
                <div className="second container-fluid">
                    <div className="d-sm-inline-flex col-lg-6 col-md-9 col-sm-9 col-12 text-center">
                        <div>
                            <img src={fraud} alt="" />
                        </div>
                        <div className='mx-2 border 2px border-danger'>
                            <div className='loginHead'>
                                <h3>Login to Your account</h3>
                            </div>
                            <div>
                                <form onSubmit={formik.handleSubmit} className="mb-3">
                                    <div className="mt-5 px-5">
                                        <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="email" />
                                        {formik.errors.email && formik.touched.email ?
                                            <ThemeProvider theme={theme}>
                                                <Typography color="error" variant="caption" display="block" gutterBottom>
                                                    {formik.errors.email}
                                                </Typography>
                                            </ThemeProvider> :
                                            <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                                    </div>
                                    <div className="mt-3 px-5">
                                        <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                                        {formik.errors.password && formik.touched.password ?
                                            <ThemeProvider theme={theme}>
                                                <Typography color="error" variant="caption" display="block" gutterBottom>
                                                    {formik.errors.password}
                                                </Typography>
                                            </ThemeProvider> :
                                            <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button id="btnLogin" type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    {loading ? <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={open}
                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop> : null}
                                </form>
                                <br />
                                <p>Not an online user? <a href="/register">Sign up here</a></p>
                                <br />
                                <p className='px-2'>Only individuals who have a NatWest account and authorised access to Online Banking should proceed beyond this point. For the security of customers, any unauthorised attempt to access customer bank information will be monitored and may be subject to legal action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}