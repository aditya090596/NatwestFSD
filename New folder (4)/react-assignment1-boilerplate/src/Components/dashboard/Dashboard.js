import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import Header from '../header/Header';
// import Footer from '../footer/Footer'

export default function Dashboard() {

  const [news, setnews] = useState([]);
  const [topics, settopics] = useState([]);// state and action

  // making api call by adding API token as header provided by API provider
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')

      // got this link from postman by entering the trending new link there and key 

    
      .then(res => {
        // Got the response from api call and extracting the data 
        setnews(res.data.articles);
        settopics('Trending News ');
        //   console.log(res.data.articles);
        //articles was an array showing in postman
      }).catch((err) => {
        console.log(err);
      })


  }, [])

  function getSports() {
    axios.get('https://newsapi.org/v2/top-headlines?category=sports&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')
    .then(res => {

      setnews(res.data.articles);
      settopics('Sports')

    }).catch((err) => {
      console.log(err);
    })
  }
  function entertain() {
    axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')
    .then(res => {

      setnews(res.data.articles);
      settopics('Entertainment');

    }).catch((err) => {
      console.log(err);
    })
  }
  
  // Parameters are optionals but will be same in values (right side). Limited to thi functions only
  function forLater(url, desc) {
    const value = {
      Url: url,
      Description: desc
    }
    fetch('http://localhost:3001/News', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // changing details to json
      },
      body: JSON.stringify(value) // stringy the values which was in json
    })
      .then(res => res.json())
      .then(data => { alert('News saved Successfully') })

  }

  return (
    <div>
      <Header sportsnews={getSports} entertainment={entertain} />
      <div data-testid='cont'className="container mt-3">

        <div className="row">
          <h2 id="heading1" className="text-center">{topics}</h2>
          {
            news.map(item => <Card key={item.title.toString()} img={item.urlToImage} submitHandler={forLater} link={item.url} desc={item.description} author={item.author} title={item.title} />)
          }


        </div>


      </div>
    </div>
  )
}
// // 'id' is chnaged to title and will convert it to string coz every newd don't have id

// // first S.No 55 then S.No 31