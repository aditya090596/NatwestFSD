import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/register/Register"
import Header from "./Components/header/Header"
import Footer from "./Components/Footer/Footer"
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import Readnow from './Components/readNow/Readnow';
class App extends React.Component {
  render() {
    return <div>
      
      {/* <Dashboard /> */}
         
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/Register" element={<Register />}/>
            
            <Route path="/" element={<Login />}/>
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path='/Header'element={<Header />}/>
            <Route path="/Readnow" element={<Readnow />}/>
            </Routes>
          </BrowserRouter>
          <Footer />

        </div>
  }
}
        export default App;
