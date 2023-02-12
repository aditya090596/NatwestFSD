import React from 'react';
// import {
//   Route,
//   BrowserRouter as Router,
// } from "react-router-dom";

import './dashboard.css';
import { Redirect } from 'react-router-dom'

import Card from '../card/Card';

class Dashboard extends React.Component{
  constructor(){
    super();
    this.state = {
      result : []
    }
  }
 componentWillMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=94dbb6860f8245fda2515cea75025cd1")
      .then(res => res.json())
      .then((data) => {
        let list = data.articles.map((dataItem) => {
           return <Card repo = {dataItem}></Card>
         });
        this.setState({result:list})
      })
  }
  render(){
    let token = localStorage.getItem('token');
    if(token)
    return <ul className="list-unstyled">{this.state.result}</ul>;
    else return <Redirect to='/' />
  }
}
export default Dashboard;
