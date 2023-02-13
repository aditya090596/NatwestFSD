import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import './Register.css'
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate(); 

  // function validatepswrd(value) {
  //   let error;
  //   if (!value) {
  //     error = 'Required';
  //   } else if (/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/.test(value)) {
  //     error = 'Invalid password format';
  //   }
  //   return error;
  // }
  // function validateno(value) {
  //   let error;
  //   if (!value) {
  //     error = 'Required';
  //   } else if (/^\d{10}$/.test(value)) {
  //     error = 'Invalid phone number';
  //   }
  //   return error;
  // }
  const formik = useFormik({


    initialValues: {
      Name: '',
      Address: '',
      email: '',
      city: '',
      Account: '',
      Phonenumber: '',
      Postcode: '',
      password: '',
      confirmpassword: ''
    },

    onSubmit: values => {
      fetch(' http://localhost:9000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)

      })
        .then(res => res.json())
        .then(data => alert("Registration succesful"))
        navigate("/Login");

    },
    validationSchema: yup.object().shape({
      Name: yup.string()
        .min(3, 'Name is too short')
        .max(10, 'Name is too long')
        .required('Name cannot be left blank'),
      Address: yup.string()
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
      Account: yup.string()
        .min(6,"Invalid account number")
        .max(10,"Account number is too long")
        .required('Account number cannot be left blank'),
      Phonenumber: yup.string()
        // .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        // .integer("A phone number can't include a decimal point")
        // .matches(/?=.{8,}/,'It should have atleast 8 digits' )
        .min(10,'Phone number must be of atleast 10 digits')
        
        .required('Phone number cannot be left blank'),
        
      Postcode: yup.string()
        
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
              <input id="Name" name="Name" type="text"  value={formik.values.Name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Full Name*" />
              {/* ternary operator  */}
              {formik.errors.Name && formik.touched.Name ? <span className="text-danger">{formik.errors.Name}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Address" name="Address" type="text" value={formik.values.Address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Address*" />
              {formik.errors.Address && formik.touched.Address ? <span className="text-danger">{formik.errors.Address}</span> : null}
            </div>
            
            <div className="mt-2">
              <input id="city" name="city" type="text" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="City*" />
              {formik.errors.city && formik.touched.city ? <span className="text-danger">{formik.errors.city}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Postcode" name="Postcode" type="text" value={formik.values.Postcode} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Postcode*" />
              {formik.errors.Postcode && formik.touched.Postcode ? <span className="text-danger">{formik.errors.Postcode}</span> : null}
            </div>
            <div className="mt-2">
              <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Email*" />
              {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Account" name="Account" type="text" value={formik.values.Account} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Account*" />
              {formik.errors.Account && formik.touched.Account ? <span className="text-danger">{formik.errors.Account}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Phonenumber" name="Phonenumber" type="text" value={formik.values.Phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Phone number*" />
              {formik.errors.Phonenumber && formik.touched.Phonenumber ? <span className="text-danger">{formik.errors.Phonenumber}</span> : null}
            </div>
            
            <div className="mt-2">
              <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Password*" />
              {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
            </div>
            <div className="mt-2">
              <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Confirm Password*" />
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