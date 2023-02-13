import React from 'react'
export default function Card(props) {
    const saveNews = () => {
        const newCard = {
            description: props.description,
            url: props.url
        }
        props.readLater(newCard);
    };
    return (
        <div className="container py-4 col-md-3">
            <div className='row'>
            <div data-testid="card" className="card" style={{ width: "18rem" }}>
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <a href={props.url} className="btn btn-primary">Read Now</a>
                    <br /><br />
                    <button data-testid="id" type="submit" className="btn btn-primary" onClick={() => {
                        saveNews();
                    }}>Read Later</button>
                </div>
            </div>
        </div>
        </div>
    )
}