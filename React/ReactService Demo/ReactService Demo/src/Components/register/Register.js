import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import './register.css'

class Register extends React.Component{
  render(){
   return <div className = 'check'>
 <Form >
   <Form.Row>
     <Form.Group as={Col} controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
     </Form.Group>
 
     <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
   </Form.Row>
 
   <Form.Group controlId="formGridFirstName">
     <Form.Label>First Name</Form.Label>
     <Form.Control placeholder="Ex. John" />
   </Form.Group>
 
   <Form.Group controlId="formGridLastName">
     <Form.Label>Last Name</Form.Label>
     <Form.Control placeholder="Ex. Brown" />
   </Form.Group>
 

 
   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form> 
   </div>
   
  }
}
export default Register;