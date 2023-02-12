import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//pops -javascript objj passing from parent to child component
function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">{props.title} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            
          </Nav>
          {props.searchBar? <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>:" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
// Header.defaultProps ={
//   title:"Your title Here",
//   searchBar:PropTypes.bool
// }

// Header.defaultProps ={
//   title:PropTypes.string,
//   searchBar:PropTypes.bool. is Required
// }