import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { checkAuth } from '../../services/loginService';
import './Login.css';
//import Dashboard from '../dashboard/Dashboard';
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password : '',
      token : ''};

    this.handleOnUserChange = this.handleOnUserChange.bind(this);
    this.handleOnPasswordChange = this.handleOnPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cb = this.cb.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    checkAuth(this.state,this.cb);
  }
  cb(token){
    console.log("token from login",token);
    this.setState ({
      token : token
    })   
  }
  handleOnUserChange(event){
    this.setState({username: event.target.value});
  }
  handleOnPasswordChange(event){
    this.setState({password: event.target.value});
  }
  render(){
    if(this.state.token){
      return  <Redirect to = '/dashboard'></Redirect>
    }
    else{
      return <div className = 'loginForm'>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="username" placeholder="Enter User Name" onChange = {this.handleOnUserChange} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange = {this.handleOnPasswordChange} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {this.handleSubmit}>
     
    Submit
  </Button>
  <br>
  </br>
  click <a href='/register'>here</a> for register
</Form>
    </div>

    }
    
   
  }
}
export default Login;
