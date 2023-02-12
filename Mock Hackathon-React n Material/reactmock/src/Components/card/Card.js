import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return ( <div className=' d-flex justify-content-evenly '>
    <Card className='' sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        height="140"
        image="./images/mortg1.jpg"
        alt="green iguana"
      />
      <CardContent className=''>
        <Typography gutterBottom variant="h5" component="div">
          Mortgages
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions >
      <a href="https://www.natwest.com/mortgages.html" class="btn btn-primary">Mortgages?</a>
        
      </CardActions>
    </Card>
    <Card  className=''sx={{ maxWidth: 345 }}>
      <CardMedia className='mx-1'
        component="img"
        height="140"
        image="./images/mortg1.jpg"
        alt="green iguana"
      />
      <CardContent className=''>
        <Typography gutterBottom variant="h5" component="div">
          Loan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='mx-1'>
      <a href="https://www.natwest.com/loans.html" class="btn btn-primary">Get Loan</a>
        
      </CardActions>
    </Card>
    <Card className='mx-1'sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./images/Card 2.jpg"
        alt="green iguana"
      />
      <CardContent className='mx-1'>
        <Typography gutterBottom variant="h5" component="div">
          Insurance
        </Typography>
        <Typography className='mx-1'variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='mx-1'>
      <a href="https://www.natwest.com/insurance.html" class="btn btn-primary">Insurance</a>
        
      </CardActions>
    </Card>
    <Card className='mx-1'sx={{ maxWidth: 345 }}>
      <CardMedia className='mx-1'
        component="img"
        height="140"
        image="./images/isaimg.png"
        alt="green iguana"
      />
      <CardContent className='mx-1'>
        <Typography  gutterBottom variant="h5" component="div">
          ISA savings
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.natwest.com/savings/isa-overview/isa-guides.html" class="btn btn-primary">ISA Guide</a>
        
      </CardActions>
    </Card>
    </div>
  );
}



































// import { ClassNames } from '@emotion/react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Cards() {
//   return ( <div className="container d-flex justify-content-between  mb-1 ">
    
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     </div>
//   );
// }

// export default Cards;