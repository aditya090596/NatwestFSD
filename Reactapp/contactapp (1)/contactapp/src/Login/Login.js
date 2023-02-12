import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [error, setError] = React.useState(false); // initial error is false if status != 400 it will chng to true
    const [msg, setMsg] = React.useState('');
    let navigate = useNavigate(); // to navigate 

    // decalring the values  .. initial values are blank
    const formik = useFormik({
        initialValues: {
            text: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:9000/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    // if status is != 401 it means no error n route to the home page
                    if (data.status != 401) {
                        localStorage.setItem('token', data.access_token);//  validating the token through server
                        navigate("/");
                    } else {
                        setError(true); // if == 401 means error is found , throw an error
                        setMsg(data.message); // data store the stringfy details
                    }
                })
        },
        validationSchema: yup.object().shape({
            text: yup.string()
                // .text('Invalid text Address')
                .required('text cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-dark text-light py-3 text-center rounded">
                        <h2>Sign In</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mb-3">
                    <div>
                            <label for="name" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="name" ></input>
                            <div class="invalid-feedback">
                                Please Enter your First name.
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2 text-center">
                            <button id="btnLogin" type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {/* error message from the browser */}
                            {msg} 
                        </div> : null
                    }
                </div>
            </div>
        </div>

    )
}