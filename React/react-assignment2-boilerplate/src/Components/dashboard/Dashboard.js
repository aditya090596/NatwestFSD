import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../header/Navbar'
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
    const navigate = useNavigate();

    const [news, setnews] = useState([]);
    const [topics, settopics] = useState([]);// state and action

    // making api call by adding API token as header provided by API provider
    useEffect(() => {
        fetch('http://localhost:3001/auth/v1/isAuthenticated', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.isAuthenticated === false) {
                    navigate("/");
                }
                else {

                    axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')
                        .then(res => {
                            // Got the response from api call and extracting the data 
                            setnews(res.data.articles);
                            settopics('Trending News ');

                        }).catch((err) => {
                            console.log(err);
                        })
                }
            });

    }, [])

    function getSports() {
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')
            .then(res => {

                setnews(res.data.articles);
                settopics('Sports')

            }).catch((err) => {
                // console.log(err);
            })
    }
    function todaynews() {
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&apikey=4b550f319d2442b989f8b67f978d6e8e&page=2')
            .then(res => {

                setnews(res.data.articles);
                settopics('Today News')

            }).catch((err) => {
                // console.log(err);
            })
    }
    function entertain() {
        axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&apikey=4b550f319d2442b989f8b67f978d6e8e&page=1')
            .then(res => {

                setnews(res.data.articles);
                settopics('Entertainment');

            }).catch((err) => {
                // console.log(err);
            })
    }
 function searchnews(searchkey){
    // const name=key;
    // console.log(searchkey);

    axios.get(`https://newsapi.org/v2/everything?q=${searchkey}&apiKey=4b550f319d2442b989f8b67f978d6e8e&language=en&page=1`)
        .then(res => {

            setnews(res.data.articles);

        }).catch((err) => {
            // console.log(err);
        })
 }

    function forLater(item) {
        
        fetch('http://localhost:3001/api/v1/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // changing details to json
            },
            body: JSON.stringify(item) // stringy the values which was in json
        })
            .then(res => res.json())
            .then(data => { alert('News saved Successfully') })

    }
    

    return (
        <div>
            <Navbar sportsnews={getSports} entertainment={entertain} todaynews={todaynews} search={searchnews} />
            <div data-testid='cont' className="container mt-3">

                <div className="row">
                    <h2 id="heading1" className="text-center">{topics}</h2>
                    {
                        news.map(item => <Card key={item.title.toString()} urlToImage={item.urlToImage} submitHandler={forLater} url={item.url} description={item.description} author={item.author} title={item.title} item={item} id={uuidv4()}/>)
                    }
                </div>
            </div>
        </div>
    )
}

// 