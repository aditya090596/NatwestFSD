import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Header extends React.Component{
  render(){
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username')
//    if(token){
      return <Container fluid = "false">
    <Navbar bg="light" fixed="top" expand="lg" >
    <Navbar.Brand href="/">News Manager </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#userprofile">User Profile</Nav.Link>
      <Nav.Link href='/readnow'>Read Now</Nav.Link>
    </Nav>
    <Navbar.Text >
      Signed in as: <a href="#login">{username}</a>
    </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
      </Container>
 //   }
    // else{
    //  return <Container fluid = "false">
    // <Navbar bg="light" fixed="top" expand="lg" >
    // <Navbar.Brand href="/">News Manager </Navbar.Brand>
 
    // </Navbar>
    //   </Container>
    // }  
}
}
export default Header;
