import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Card from '../Components/card/Card';
import Dashboard from '../Components/dashboard/Dashboard';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import CardTest from './card.spec.js';
import dashboardTest from './dashboard.spec.js';
import headerTest from './header.spec.js';
import footerTest from './footer.spec.js';
import loginTest from './login.spec.js';
import registerTest from './register.spec.js';
import readNowTest  from './readNow.spec.js';
import Login from '../Components/login/Login';
import Register from '../Components/register/Register';
import Readnow from '../Components/readNow/ReadNow';

    it('App renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('Footer renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('Header renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('Login renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('Register renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Register />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      // it('ReadNow renders without crashing', () => {
      //   const div = document.createElement('div');
      //   ReactDOM.render(<Readnow />, div);
      //   ReactDOM.unmountComponentAtNode(div);
      // });
    //   it("renders card with image", () => {
    //     const div = document.createElement('div');
    //     const repo = {
    //       urlToImage: "https://static.toiimg.com/thumb/msid-72153731,width-1070,height-580,imgsize-330307,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //       title: "Will Shiv Sena agree to 'split' term for CM's post with NCP? - Times of India",
    //       author: "Times Of India"
    //     };
        
    //     ReactDOM.render(<Card repo = {repo} />, div);
    //     ReactDOM.unmountComponentAtNode(div);
      
    //   });
      it('Card test cases exist',() => {
        expect(CardTest).toBeTruthy();
      })
      it('Dashboard test cases exist',() => {
        expect(dashboardTest).toBeTruthy();
      })
      it('footer test cases exist',() => {
        expect(footerTest).toBeTruthy();
      })
      it('login test cases exist',() => {
        expect(loginTest).toBeTruthy();
      })
      it('register test cases exist',() => {
        expect(registerTest).toBeTruthy();
      })
      it('readNowTest test cases exist',() => {
        expect(readNowTest).toBeTruthy();
      })



      