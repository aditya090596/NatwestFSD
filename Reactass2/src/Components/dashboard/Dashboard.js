import React from 'react'
import { useEffect, useState } from 'react';

import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../header/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { News } from '../services/Data';
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

                    News("top-headlines?country=in", null)
                        .then(res => { setnews(res.data.articles); settopics('Trending News '); })
                }
            });

    }, [])

    function getSports() {
        News("top-headlines?category=sports", null)
            .then(res => {

                setnews(res.data.articles);
                settopics('Sports')

            }).catch((err) => {
                // console.log(err);
            })
    }
    function todaynews() {
        News("top-headlines?category=technology", null)
            .then(res => {
                setnews(res.data.articles);
                settopics('Today News')
            })
    }
    function entertain() {
        News("top-headlines?category=entertainment", null)
            .then(res => {
                setnews(res.data.articles);
                settopics('Entertainment');
            })
    }

    function searchnews(searchkey) {

        News("everything?q=${searchkey}", null)
            .then(res => {

                setnews(res.data.articles);

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
                        news.map(item => <Card key={item.title.toString()} urlToImage={item.urlToImage} submitHandler={forLater} url={item.url} description={item.description} author={item.author} title={item.title} item={item} id={uuidv4()} />)
                    }
                </div>
            </div>
        </div>
    )
}

// 