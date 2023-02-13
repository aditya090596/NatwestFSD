import React from 'react'

import Button from 'react-bootstrap/Button';


function Card(props) {
    // Values first come to storeItem url-link , desc-desc
    function storeItem (url,desc){
    props.submitHandler(url,desc);
    }
    return (
        <div className="col-md-4  mb-2 " data-testid='card'>
            <div className="card bg-dark text-light">
                <div className="card-body">
                    <img src={props.img} className="card-img-top img" width="100%" alt="can't display" />
                    <h5 className="card-title">{props.author} </h5>
                
                    <p className="card-text">{props.title}</p>
                    
                    {/* Making event */}
                    <Button data-testid='id'onClick={storeItem.bind(this, props.link, props.desc)}variant="primary">Read Later</Button>

                </div>
            </div>
        </div>
    );
}

export default Card;

