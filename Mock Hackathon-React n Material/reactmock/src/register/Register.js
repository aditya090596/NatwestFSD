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
      firstname: '',
      lastname: '',
      email: '',
      city: '',
      Account: '',
      Phonenumber: '',
      age: '',
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
      firstname: yup.string()
        .min(3, 'FirstName is too short')
        .max(10, 'FirstName is too long')
        .required('FirstName cannot be left blank'),
      lastname: yup.string()
        .min(3, 'LastName is too short')
        .max(10, 'LastName is too long')
        .required('LastName cannot be left blank'),
      email: yup.string()
        .email('Invalid Email Address')
        .required('Email cannot be left blank'),
      password: yup.string()
        .required('Password cannot be left blank'),
        // .test("password should contain atleast 1 special character,1 Uppercase,1 Lowercase and Number",function(){
        //   let passwordformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
        //   if (!this.password.match(passwordformat)){
        //     return true;
        //   }
        //   return false;
        // }),
      city: yup.string()
        .required('City cannot be left blank'),
      Account: yup.number()
       .typeError("That doesn't look like a Account number")
        .positive("An account number can't start with a minus")
        .integer("An account number can't include a decimal point")
        .min(8)
        .required('Account number cannot be left blank'),
      Phonenumber: yup.string()
        // .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        // .integer("A phone number can't include a decimal point")
        // .matches(/?=.{8,}/,'It should have atleast 8 digits' )
        .min(10,'Phone number must be of atleast 10 digits')
        
        .required('Phone number cannot be left blank'),
        
      age: yup.string()
        .required('Age cannot be left blank'),
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
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="bg-dark text-light py-3  text-center rounded">
            <h2>Sign Up</h2>
          </div>
          <form onSubmit={formik.handleSubmit} >
            {/* once submit the form it will call the function on submit */}
            <div className=" mt-2">
              <input id="firstname" name="firstname" type="text"  value={formik.values.firstname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="First Name" />
              {/* ternary operator  */}
              {formik.errors.firstname && formik.touched.firstname ? <span className="text-danger">{formik.errors.firstname}</span> : null}
            </div>
            <div className="mt-2">
              <input id="lastname" name="lastname" type="text" value={formik.values.lastname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Last Name" />
              {formik.errors.lastname && formik.touched.lastname ? <span className="text-danger">{formik.errors.lastname}</span> : null}
            </div>
            <div className="mt-2">
              <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Email" />
              {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
            </div>
            <div className="mt-2">
              <input id="city" name="city" type="text" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="City" />
              {formik.errors.city && formik.touched.city ? <span className="text-danger">{formik.errors.city}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Account" name="Account" type="text" value={formik.values.Account} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Account" />
              {formik.errors.Account && formik.touched.Account ? <span className="text-danger">{formik.errors.Account}</span> : null}
            </div>
            <div className="mt-2">
              <input id="Phonenumber" name="Phonenumber" type="text" value={formik.values.Phonenumber} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Phone number" />
              {formik.errors.Phonenumber && formik.touched.Phonenumber ? <span className="text-danger">{formik.errors.Phonenumber}</span> : null}
            </div>
            <div className="mt-2">
              <input id="age" name="age" type="text" value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Age" />
              {formik.errors.age && formik.touched.age ? <span className="text-danger">{formik.errors.age}</span> : null}
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Password" />
              {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
            </div>
            <div className="mt-2">
              <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-md" placeholder="Confirm Password" />
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