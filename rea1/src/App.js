import React from 'react';
// import Header from './Components/header/Header';
import Dashboard from './Components/dashboard/Dashboard';
// import Card from './Components/card/Card'

// import './App.css';
import Footer from './Components/footer/Footer';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
    {/* <Header /> */}
    <Dashboard/>
    <Footer/>
    
    
    </div>
  }
}
export default App;
