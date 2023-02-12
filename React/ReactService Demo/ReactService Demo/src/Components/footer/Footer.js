import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';



class Footer extends React.Component{
  render(){
    return <Container fluid = "false" >
      <Navbar bg="light" fixed="bottom"  expand="lg" >
        copyright @ stackroute
      </Navbar>
      

 
    </Container>
   
  }
}
export default Footer;
