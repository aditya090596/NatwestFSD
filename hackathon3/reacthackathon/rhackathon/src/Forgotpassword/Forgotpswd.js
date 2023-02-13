import React from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
 
export default function Forgotpswd() {
  let navigate = useNavigate();
  const formik = useFormik({

    initialValues: {  
      email: ''
      
    },

    onSubmit: values => {
      fetch('http://localhost:8090/auth/forgot', {
        
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
     
      })
        .then(res => console.log(res))

        .then(data => {
          console.log(data);
          
          if (data.status === 200  ){
          
            alert("checking")
          }
          else if (data.status === 401){
            alert ("Email is not registered")
          } else  {
          // alert("Registration succesful")
          // navigate("/Login")}
          alert ("Internal Server Error")
          navigate("/Forgotpwd") }
    })
        

    },
    validationSchema: yup.object().shape({
      email: yup.string()
        .email('Invalid Email Address')
        .required('Email cannot be left blank'),
      
    }),
  })
  return (
    <div>

<div className="reg mb-3">
      <div className=" d-flex ">
           {/* <div className='col-2'><img src='./images/register.PNG'  className=' mb-1' ></img></div> */}
        <div className="col-md-4 offset-md-4">
          <div className=" heading  text-light py-3  text-center rounded">
            <h2>Reset your password</h2>
          </div>
          <form onSubmit={formik.handleSubmit} >
            
            <div className="mt-3">
              <input id="email" name="email" type="text" autoComplete="off" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Your registered email*" />
              {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
            </div>
            
            <div className="mt-3 mb-3 text-center">
              <button type="submit" className="btn btn-success btn-lg">Send Otp</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  {/* <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label><h3>Reset Your Password</h3></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-5">
       Send Otp
      </Button>
    </Form> */}
    </div>
  )
}
