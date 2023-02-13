import React from 'react'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
export default function DisplayCard(props) {
  function Get(item){
    // const id='';
    props.deleteHandler(item);
  }
  return (

   <div className="col-md-4  mb-2 ">
    <div className="card bg-dark text-light">
        <div className="card-body">
            <img src={props.img} className="card-img-top img" width="100%" alt="can't display" />
            <h5 className="card-title">{props.author} </h5>
        
            <p className="card-text">{props.title}</p>
            
            <Button variant="primary "href={props.link}target="_blank">Read Now</Button>
            <Button variant="primary mx-3" onClick={Get.bind(this, props.id)}>Delete</Button>

        </div>
    </div>
</div>

    // <Card style={{ width: '20rem' , height:'50vh' }}>
    //   <Card.Img variant="top" src={props.img} />
    //   <Card.Body>
    //     <Card.Title> {props.title}</Card.Title>
    //     <Card.Text>
    //   <p className="card-text">{props.author}</p> 
    //          {/* <p className="card-text">{props.link}</p>  */}
    //     </Card.Text>
    //     <Button variant="primary"href={props.link}target="_blank">Read Now</Button>
    //   </Card.Body>
    // </Card>
  );
}

// export default DisplayCard;

//   )
// }
