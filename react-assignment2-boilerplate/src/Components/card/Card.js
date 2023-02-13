import React from 'react'

import Button from 'react-bootstrap/Button';


function Card(props) {
    // Values first come to storeItem url-link , desc-desc
    function storeItem (item,id){
        const id1 = { "id": id }
        const value = { ...item, ...id1 }
    props.submitHandler(value);
    }
    return (
        <div className="col-md-4  mb-2 "data-testid='card'>
            <div className="card bg-dark text-light">
                <div className="card-body">
                    <img src={props.urlToImage} className="card-img-top img" width="100%" alt="can't display" />
                    <h5 className="card-title">{props.author} </h5>
                
                    <p className="card-text">{props.title}</p>
                    {/* <p className="card-text">{props.description}</p> */}
                    
                    {/* Making event */}
                    <Button data-testid='id' onClick={storeItem.bind(this, props.item,props.id)}variant="primary">Read Later</Button>

                </div>
            </div>
        </div>
    );
}

export default Card;
