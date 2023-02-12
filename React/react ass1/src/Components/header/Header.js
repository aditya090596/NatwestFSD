import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
  return (
    <div className="container ">
    <Navbar bg="dark  " expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>NewsManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse data-testid="navbarScroll ">
          <Nav
            className=" nav me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav text-light" data-testid="homepage">Today's news</Nav.Link>
            <Nav.Link href="#action2" className="nav text-light">Categories</Nav.Link>
            <NavDropdown  testid="Dropdown ">
              <NavDropdown.Item onClick={props.sportsnews}>Sports</NavDropdown.Item>
              <NavDropdown.Item onClick={props.entertainment}>
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;

// href will replace on click