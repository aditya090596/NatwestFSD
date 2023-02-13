import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function Navbar2(props) {
  const [inp,setinp]=React.useState(''); //1st step
  function srchnews(par){
  props.search(par);
}
  return (
    <div className="container mt-2 px-1">
    <Navbar bg="dark  " expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"  className="text-light">Hello User !</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse Testid="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={props.todaynews} className="text-light" data-testid="homepage1" >Tech news</Nav.Link>
            <Nav.Link onClick={props.sportsnews} className="text-light" data-testid="homepage2">Sports news</Nav.Link>
            <Nav.Link onClick={props.entertainment} className="text-light" data-testid="homepage3">Entertainment</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={key}
              onChange={(event)=>setinp(event.target.value)}
            />
             <Button variant="outline-success"onClick={srchnews.bind(this,inp)}>Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbar2;