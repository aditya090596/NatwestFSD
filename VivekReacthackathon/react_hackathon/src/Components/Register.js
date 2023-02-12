import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import fscslogo from "../images/FSCS_Protected_Logo.png";
import fraud from "../images/nw-security-banner-vishing-194x443.gif";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
        ].join(','),
    },
});

export default function Register() {

    let navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);


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
            fetch('http://localhost:8090/auth/register', {
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
                                timer: 1500
                            })
                            navigate("/login")
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
            fullname: yup.string()
                .min(3, 'Fullname is too short')
                .required('Fullname cannot be left blank'),
            email: yup.string()
                .email('Invalid email Address')
                .required('Email cannot be left blank'),
            address: yup.string()
                .min(3, 'Address is too short')
                .required('Address cannot be left blank'),
            accountnumber: yup.string()
                .min(8, 'Account number should be 8 digits')
                .required('Account number cannot be left blank'),
            phonenumber: yup.string()
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
        <div className='container-fluid'>
            <div className="top">
                <div className="d-flex">
                    <h3 className='pt-4 pe-4'>Online Banking Services</h3>
                    <img src={fscslogo} alt="" />
                </div>
            </div>
            <div className="second container-fluid w-50">
                <div className="d-sm-inline-flex">
                    <div>
                        <img src={fraud} alt="" />
                    </div>
                    <div className='mx-2 border 2px border-danger'>
                        <div className='loginHead'>
                            <h3>Register for online banking</h3>
                        </div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className="mt-2 mx-2">
                                <input id="fullname" name="fullname" type="text" value={formik.values.fullname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Full Name" />
                                {formik.errors.fullname && formik.touched.fullname ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.fullname}
                                        </Typography>
                                    </ThemeProvider> :
                                    <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Email" />
                                {formik.errors.email && formik.touched.email ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.email}
                                        </Typography>
                                    </ThemeProvider> :
                                    <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="address" name="address" type="text" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Address" />
                                {formik.errors.address && formik.touched.address ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.address}
                                        </Typography>
                                    </ThemeProvider>
                                    : <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="accountnumber" name="accountnumber" type="text" value={formik.values.accountnumber} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Account Number" />
                                {formik.errors.accountnumber && formik.touched.accountnumber ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.accountnumber}
                                        </Typography>
                                    </ThemeProvider>
                                    : <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="phonenumber" name="phonenumber" type="text" value={formik.values.phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Phone Number" />
                                {formik.errors.phonenumber && formik.touched.phonenumber ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.phonenumber}
                                        </Typography>
                                    </ThemeProvider>
                                    : <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Password" />
                                {formik.errors.password && formik.touched.password ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.password}
                                        </Typography>
                                    </ThemeProvider>
                                    : <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>
                            <div className="mt-2 mx-2">
                                <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="* Confirm Password" />
                                {formik.errors.confirmpassword && formik.touched.confirmpassword ?
                                    <ThemeProvider theme={theme}>
                                        <Typography color="error" variant="caption" display="block" gutterBottom>
                                            {formik.errors.confirmpassword}
                                        </Typography>
                                    </ThemeProvider>
                                    : <Typography color="white" variant="caption" display="block" gutterBottom>.</Typography>}
                            </div>

                            <div className="mt-2 mx-2 text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            {loading ? <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop> : null}
                            <p className='pt-4 px-2 disc'>Only individuals who have a NatWest account and authorised access to Online Banking should proceed beyond this point. For the security of customers, any unauthorised attempt to access customer bank information will be monitored and may be subject to legal action.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}