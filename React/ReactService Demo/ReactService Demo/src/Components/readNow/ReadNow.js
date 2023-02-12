import React from 'react';
import DisplayCard  from '../displayCard/DisplayCard'
import { Redirect } from 'react-router-dom'

class ReadNow extends React.Component{
  constructor(){
    super();
    this.state = {
      result : []
    }
  }
  componentWillMount() {
    let token = localStorage.getItem('token');
    if(token){
      fetch("http://localhost:3001/api/v1/news",{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }})
          .then(res => res.json())
          .then((data) => {
            let list = data.map((dataItem) => {
               return <DisplayCard repo = {dataItem}></DisplayCard>
             });
            this.setState({result:list})
          })
    }
  
  }
  render(){
    let token = localStorage.getItem('token');
    if(token){
      return <ul className="list-unstyled">{this.state.result}</ul>;
    }else  return <Redirect to='/' />
    
    
}
}
export default ReadNow;
