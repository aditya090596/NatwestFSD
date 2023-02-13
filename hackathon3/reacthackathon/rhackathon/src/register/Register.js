import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import './Register.css'
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate(); 

  const formik = useFormik({

    initialValues: {
      
      name: '',
      address: '',
      email: '',
      city: '',
      account: '',
      phonenumber: '',
      postcode: '',
      password: '',
      confirmpassword: ''
    },

    onSubmit: values => {
      fetch(' http://localhost:8090/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)

      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 409){
            alert ("User already registered")
          }
          else if (data.status === 500){
            alert ("Internal Server Error")
          } else  {
          // alert("Registration succesful")
          // navigate("/Login")}
          alert ("Registration succesful")
          navigate("/Login") }
    })
        

    },
    validationSchema: yup.object().shape({
      name: yup.string()
        .min(3, 'Name is too short')
        .max(10, 'Name is too long')
        .required('Name cannot be left blank'),
      address: yup.string()
        .min(3, 'Address is too short')
        .max(10, 'Address is too long')
        .required('Address cannot be left blank'),
      email: yup.string()
        .email('Invalid Email Address')
        .required('Email cannot be left blank'),
      password: yup.string()
      .matches((/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/),'Password should have atleast 1 Special Character,lowercase and uppercase')
        .min(8)
        .required('Password cannot be left blank'),
        
      city: yup.string()
        .required('City cannot be left blank'),
      account: yup.string()
        .min(6,"Invalid account number")
        .max(10,"Account number is too long")
        .required('Account number cannot be left blank'),
      phonenumber: yup.string()
        
        .min(10,'Phone number must be of atleast 10 digits')
        
        .required('Phone number cannot be left blank'),
        
      postcode: yup.string()
        
        .required('Postcode cannot be left blank'),
      
      confirmpassword: yup.string()
        .required('Confirm Password cannot be left blank')
        .test('confirmpassword', 'Password & confirm password should be same', function (cpass) {
          if (this.parent.password === cpass) {
            return true;
            
          }
          return false;
        })
    }),
  })
  return (
    
    <div className="reg mb-3">
      <div className=" d-flex ">
           {/* <div className='col-2'><img src='./images/register.PNG'  className=' mb-1' ></img></div> */}
        <div className="col-md-4 offset-md-4">
          <div className=" heading  text-light py-3  text-center rounded">
            <h2>Register to Payment App</h2>
          </div>
          <form onSubmit={formik.handleSubmit} >
            {/* once submit the form it will call the function on submit */}
            <div className=" mt-2">
              <input id="Name" name="name" autoComplete="off" type="text"  value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Full Name*" />
              {/* ternary operator  */}
              {formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name}</span> : null}
            </div>
            <div className="mt-2">
              <input id="address" name="address" autoComplete="off" type="text" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Address*" />
              {formik.errors.address && formik.touched.address ? <span className="text-danger">{formik.errors.address}</span> : null}
            </div>
            
            <div className="mt-2">
              <input id="city" name="city" autoComplete="off" type="text" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="City*" />
              {formik.errors.city && formik.touched.city ? <span className="text-danger">{formik.errors.city}</span> : null}
            </div>
            <div className="mt-2">
              <input id="postcode" name="postcode" autoComplete="off" type="text" value={formik.values.postcode} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Postcode*" />
              {formik.errors.postcode && formik.touched.postcode ? <span className="text-danger">{formik.errors.postcode}</span> : null}
            </div>
            <div className="mt-2">
              <input id="email" name="email" type="text" autoComplete="off" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Email*" />
              {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
            </div>
            <div className="mt-2">
              <input id="account" name="account" autoComplete="off" type="text" value={formik.values.account} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="account*" />
              {formik.errors.account && formik.touched.account ? <span className="text-danger">{formik.errors.account}</span> : null}
            </div>
            <div className="mt-2">
              <input id="phonenumber" name="phonenumber" autoComplete="off" type="text" value={formik.values.phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="phone number*" />
              {formik.errors.phonenumber && formik.touched.phonenumber ? <span className="text-danger">{formik.errors.phonenumber}</span> : null}
            </div>
            
            <div className="mt-2">
              <input id="password" name="password" autoComplete="off" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Password*" />
              {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
            </div>
            <div className="mt-2">
              <input id="confirmpassword" name="confirmpassword" autoComplete="off" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Confirm Password*" />
              {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
            </div>

            <div className="mt-2 mb-2 text-center">
              <button type="submit" className="btn btn-success btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}