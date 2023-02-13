import React from 'react'
import Header from './Components/header/Header'
import Register from './register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login/Login';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/homepage/Homepage';

import Dashboard from './Components/dashboard/Dashboard';
import Gateway from './Components/Forex/Gateway'
import Movie from './Components/card/Movie'
import Checkout from './Components/Checkout/Checkout';
import Accsummary from './Components/Forex/Accsummary';
import Food from './Components/oneapp/Food';

// import Oneapp from './Components/oneapp/Oneapp'

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
            <Route path="/Movie"element={<Movie/>}/>
            <Route path="/Checkout"element={<Checkout/>}/>
            <Route path="/Accsummary"element={<Accsummary/>}/>
            <Route path="/Food"element={<Food/>}/>


     
           
            </Routes>
            
            {/* <Card/> */}
            
            {/* <Practise/> */}
            <Footer />
          </BrowserRouter>
          
   </div>
  );
}

export default App;
