import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'


function Header() {
  const navigate = useNavigate();
  function Logout(){
    
    localStorage.removeItem('token');
    navigate ('/')
  }
  return (<div>
    <Navbar classname='container  ;' bg="light" expand="lg">
      <Container fluid className='header py-2 mb-0 '>
      
      
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand href="/" className='text-underline-hover text-light mx-3 '><h3>Natwest Payment App</h3></Navbar.Brand>
            {/* <Navbar.Brand href="#"className='text-underline-hover text-light mx-5'>Premier</Navbar.Brand>
            <Navbar.Brand href="#"className='text-underline-hover text-light mx-5'>Business</Navbar.Brand>
            <Navbar.Brand href="#"className='text-underline-hover text-light mx-5'>Corporate & Institutions</Navbar.Brand> */}
            
            
            
          </Nav>
          <Form className="d-flex">
          {localStorage.getItem('token') ?
          <h3 className='margin-right-4 text-light'>Welcome Aditya</h3>:null}
          
          {localStorage.getItem('token') ?
          
            <Button variant=" button text-light fs-6 text  mx-1  " onClick={Logout}>Log out</Button>
             :
            <>
        
            <Button variant=" "className='btn text-light mx-1'href='/Register'>Register</Button>
            <Button variant=" mx-0"className='btn text-light  'href='/Login'>Login</Button>
            </>
}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    
    </div>
  );
  
}

export default Header;