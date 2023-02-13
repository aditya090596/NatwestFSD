import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
export default function Dashboard() {
    const [news,setNews] = useState([])
    const[later,setLater] =useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=341ea389ef9b4f8d964e9f4c440d8a13")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data.articles);
            setNews(data.articles)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    const readLater = (newCard) => {
        fetch('http://localhost:3001/newsdata',{
            'method' : 'POST',
            'body' : JSON.stringify(newCard),
            'headers' : {'Content-Type' : 'application/json'}
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            setLater([...later, data])
        })
        .catch((error)=>{
            console.log(error);
        })
      };
  return (
    <div data-testid="cont" className="container ">
        <div className='row'>
        {
        news.map((item) => <Card urlToImage={item.urlToImage} title={item.title} author={item.author} readLater={readLater} description={item.description} url={item.url}/>)
        }
    </div>
    </div>
    )
}