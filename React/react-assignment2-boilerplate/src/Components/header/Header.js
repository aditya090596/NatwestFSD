import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  function Logout(){
    
    localStorage.removeItem('token');
    navigate ('/')
  }
  return (

    <Navbar className="container header1 "  >
      <Container fluid>
        <Navbar.Brand className='text-white ' data-testid="Nav" href="#" >NewsManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             {localStorage.getItem('token') ?
             <>
                <Nav.Link className='text-light ' href="/Dashboard">Dashboard</Nav.Link>
                <Nav.Link className='text-light ' href="/Readnow">Readnow</Nav.Link>
                </> :

             <Nav.Link className='text-light fs-4' href="/">Get Updates</Nav.Link> }

          </Nav>

          {localStorage.getItem('token') ?
            <Button data-testid='id' variant="outline-dark  bg-success " onClick={Logout}>Log out</Button>

            : <>
              <Button variant="outline-dark mx-1 bg-success" className="btn" href='/Register'>Register</Button>
              <Button variant="outline-dark  bg-success "className="btn"  href='/'>Log in</Button>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;