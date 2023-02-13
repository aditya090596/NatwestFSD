import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useNavigate } from "react-router-dom";
import {

    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,

}
    from 'mdb-react-ui-kit';
    // import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

function Login() {

    const [error, setError] = React.useState(false); // initial error is false if status != 400 it will chng to true
    const [msg, setMsg] = React.useState('');
    let navigate = useNavigate(); // to navigate 

    // decalring the values  .. initial values are blank
    
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
                    console.log(data);
                    // if status is != 401 it means no error n route to the home page
                    if (data.token != null  ) {
                        localStorage.setItem('token', data.token);//  validating the token through server
                        alert("Log in Succesfully")


                        // Swal.fire(
                        //     'Logged in successfully'
                        //   )
                        navigate("/Accsummary");
                    } else if (data.message === "Invalid Credentials") { 
                        alert("Invalid Credentials")
                        setError(true); // if == 401 means error is found , throw an error
                        setMsg(data.message); // data store the stringfy details
                        
                    }
                    else {
                        alert("Internal Server Error")
                    }
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email('Invalid email Address')
                .required('email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });

    return ( <div>
        <MDBContainer className="my-2  mb-1 pb-0">

            <MDBCard >
                <MDBRow className='g-col-6'>

                    <MDBCol md='5' >
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100   ' />
                    </MDBCol>

                    <MDBCol md='5'>
                        <MDBCardBody className='d-flex flex-column '>

                            <h5 className="fw-normal my-3 pb-3 align-centre" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                            <div className="container mt-3">
                                <div className="row">
                                    <div className="fw-normal my-4 pb-3">
                                        <div className="bg-primary text-light py-2 text-center rounded">
                                            <h2>Sign In</h2>
                                        </div>
                                        <form onSubmit={formik.handleSubmit} className="mb-5">
                                            <div className="mt-5 ">
                                                <input id="email" label='email' autoComplete="off" size="lg" wrapperclass='mb-4' name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-Lg text-center" placeholder="email" />
                                                {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                                            </div>
                                            <div className="mt-4">
                                                <input id="password" size="lg" name="password" autoComplete="off" label='Password' type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-Lg text-center" placeholder="Password" />
                                                {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                                            </div>
                                            <div className="mt-5 text-center">
                                                <button id="btnLogin" type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </form>
                                        <a className="small text-muted" href="/forgotpwd">Forgot password?</a>
                                        <p className="mb-5 pb-lg-2 mt-3" style={{ color: '#393f81' }}>Don't have an account? <a href="/Register" style={{ color: '#393f81' }}>Register here</a></p>

                                        <div className='d-flex flex-row justify-content-start'>
                                            <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </div>
                                        {
                                            error ? <div className="alert alert-danger" role="alert">
                                                {/* error message from the browser */}
                                                {msg}
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
        
        </div>
    );
}

export default Login;
