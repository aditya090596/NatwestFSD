import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallBack/ErrorFallBack";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import Personal from "./Components/Personal";
import Premier from "./Components/Premier";
import Wallet from "./Components/Wallet";
import Cinema from "./Components/Cinema";
import Checkout from "./Components/Checkout";
import Forex from "./Components/Forex";
import Checkout1 from "./Components/CheckoutForex/Checkout";


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
          <Suspense fallback={<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}>
            <Routes>

              <Route exact path="/" element={<Personal />} />
              <Route exact path="/personal" element={<Personal />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/premier" element={<Premier />} />
              <Route exact path="/wallet" element={<Wallet />} />
              <Route exact path="/cinema" element={<Cinema />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/checkout1" element={<Checkout1 />} />
              <Route exact path="/forex" element={<Forex />} />

            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div >
  );
}

export default App;
