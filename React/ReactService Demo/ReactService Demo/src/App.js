import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ReadNow from './Components/readNow/ReadNow';
import Login from './Components/login/Login';
import Register from './Components/register/Register';



class App extends React.Component{
  render(){
  return <div className = 'main-content' >
   <Container fluid = "false">
     <Row className = "row-header">
       <Header></Header>
     </Row>
     <Row className = "row-main">
     <Router>
       <Route exact path = "/" component = {Login} />
       <Route exact path="/dashboard" component={Dashboard} />
       <Route exact path="/readnow" component={ReadNow} />
       <Route exact path="/register" component={Register} />
     </Router>
     </Row>
     <Row className = "row-footer">
       <Footer></Footer>
     </Row>
   </Container>
   </div>
  
  }

}
export default App;
