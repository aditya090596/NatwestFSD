// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayCard from '../displayCard/DisplayCard';

import { useNavigate } from 'react-router-dom';

export default function Readnow() {
    const navigate = useNavigate();
    const [news, setnews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/news', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.message !== "Unauthorized") {
                    setnews(data);
                    // console.log(data);
                } else {
                    navigate('/')
                }

            });

    }, [])

    function Deletenews(id) {

        fetch(`http://localhost:3001/api/v1/news/${id}`,{ 
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(id)
        }).then(res => res.json)
            .then(data => {
                let res = news.filter(item => item.id !== id);

                setnews(res);
                console.log(res);

            });
    }
    return (

        <div className="container mt-3">

            <div className="row">
                <h2 id="heading1" className="text-center">!!Saved News!!</h2>
                {
                    news.map(item => <DisplayCard deleteHandler={Deletenews} key={item.id} img={item.urlToImage} id={item.id} desc={item.description} author={item.author} title={item.title} />)
                }


            </div>


        </div>

    )
}
