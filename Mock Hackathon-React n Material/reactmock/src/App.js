import React from 'react'
import Header from './Components/header/Header'
import Register from './register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login/Login';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/homepage/Homepage';
import Card from './Components/card/Card';
import Dashboard from './Components/dashboard/Dashboard';
import Gateway from './Components/gateway/Gateway'
import Accsummary from './Components/accsummary/Accsummary';
import Payment from './Components/payment/Payment';
// import './App.css';

function App() {
  return ( <div>
    
   <BrowserRouter>
      <Header />
      
      
      

      
        <Routes>
        <Route path="/" element={<Homepage />}/>
          <Route path="/Register" element={<Register />}/>
            
            <Route path="/Login" element={<Login />}/>
            <Route path="/Dashboard"element={<Dashboard/>}/>
            <Route path="/Gateway"element={<Gateway/>}/>
            <Route path="/Accsummary"element={<Accsummary/>}/>
            
           
            </Routes>
            <Accsummary/>
            <Card/>
            <Footer />
            <Gateway/>
            
          </BrowserRouter>
          
   </div>
  );
}

export default App;
