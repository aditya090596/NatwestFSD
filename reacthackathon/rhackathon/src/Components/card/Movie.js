import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return ( <div>
    <Nav variant="tabs" defaultActiveKey="/home">
    <img src='./images/logo.png' className='img' href='/'width={200} height={40}></img>
      <Nav.Item>
        <Nav.Link href="/Accsummary"><h4>Your accounts</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"href='/Gateway 'className=""><h4>Travel Money</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"href='/Movie 'className=""><h4>Book Your show</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-1"href='/Food 'className="text-underline-hover"><h4>Food & Beverages</h4></Nav.Link>
      </Nav.Item>
      
    </Nav>
    <Carousel className=' mb-1 mt-1'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          img src='/images/mvie2.avif'height={500}
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          img src='/images/mvie1.avif'height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          img src='/images/mvie3.avif'height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className=' d-flex justify-content-evenly '>
    <Card className='' sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        height="550"
        image="./images/img1.avif"
        alt="green iguana"
      />
      <CardContent className='mb-1'>
        <Typography gutterBottom variant="h5" component="div">
         Bhediya
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions >
      <a href="https://in.bookmyshow.com/explore/movies?utm_source=google&utm_medium=cpc&utm_campaign=BAU_Movies_Search_Non-Brand_Focus_Exact_Aug21&utm_adgroup=Movie%20Ticket%20Booking&utm_term=online%20movie%20tickets%20booking&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke682uH59c9Kl05gYjVk7tykxqL1tvMlmxH548nxiAnTOXiyt6OqJngaAvXbEALw_wcB" class="btn btn-primary">Book Now</a>
        
      </CardActions>
    </Card>
    <Card  className=''sx={{ maxWidth: 345 }}>
      <CardMedia className='mx-1'
        component="img"
        height="550"
        image="./images/img2.avif"
        alt="green iguana"
      />
      <CardContent className='mb-1'>
        <Typography gutterBottom variant="h5" component="div">
          Drishyam2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='mx-1'>
      <a href="https://in.bookmyshow.com/buytickets/drishyam-2-national-capital-region-ncr/movie-ncr-ET00331997-MT/20221201" class="btn btn-primary">Book Now</a>
        
      </CardActions>
    </Card>
    <Card className='mx-1'sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="550"
        image="./images/img3.avif"
        alt="green iguana"
      />
      <CardContent className='mx-1 mb-1'>
        <Typography gutterBottom variant="h5" component="div">
          Avatar
        </Typography>
        <Typography className='mx-1'variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='mx-1 '>
      <a href="https://in.bookmyshow.com/explore/movies?utm_source=google&utm_medium=cpc&utm_campaign=BAU_Movies_Search_Non-Brand_Focus_Exact_Aug21&utm_adgroup=Movie%20Ticket%20Booking&utm_term=online%20movie%20tickets%20booking&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke682uH59c9Kl05gYjVk7tykxqL1tvMlmxH548nxiAnTOXiyt6OqJngaAvXbEALw_wcB" class="btn btn-primary">Book Now</a>
        
      </CardActions>
    </Card>
    <Card className='mx-1'sx={{ maxWidth: 345 }}>
      <CardMedia className='mx-1'
        component="img"
        height="550"
        image="./images/mvie4.avif"
        alt="green iguana"
      />
      <CardContent className='mx-1 mb-1'>
        <Typography  gutterBottom variant="h5" component="div">
          Prem Geet 3
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://in.bookmyshow.com/explore/movies?utm_source=google&utm_medium=cpc&utm_campaign=BAU_Movies_Search_Non-Brand_Focus_Exact_Aug21&utm_adgroup=Movie%20Ticket%20Booking&utm_term=online%20movie%20tickets%20booking&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke682uH59c9Kl05gYjVk7tykxqL1tvMlmxH548nxiAnTOXiyt6OqJngaAvXbEALw_wcB" class="btn btn-primary">Book Now</a>
        
      </CardActions>
    </Card>
    <Card className='mx-1'sx={{ maxWidth: 345 }}>
      <CardMedia className='mx-1'
        component="img"
        height="550"
        image="./images/mvie5.avif"
        alt="green iguana"
      />
      <CardContent className='mx-1 mb-1'>
        <Typography  gutterBottom variant="h5" component="div">
          Kantara
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://in.bookmyshow.com/explore/movies?utm_source=google&utm_medium=cpc&utm_campaign=BAU_Movies_Search_Non-Brand_Focus_Exact_Aug21&utm_adgroup=Movie%20Ticket%20Booking&utm_term=online%20movie%20tickets%20booking&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke682uH59c9Kl05gYjVk7tykxqL1tvMlmxH548nxiAnTOXiyt6OqJngaAvXbEALw_wcB" class="btn btn-primary">Book Now</a>
        
      </CardActions>
    </Card>
    </div>
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