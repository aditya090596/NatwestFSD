import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

export default function Food() {

    let navigate =useNavigate();
  React.useEffect(() => {

    const isLoggedin = localStorage.getItem('token');
  
    if (isLoggedin === null) {
       navigate ("/Login")
    };
  })
    return (
        <div>
             <Nav variant="tabs" defaultActiveKey="/home">
      <img src='./images/logo.png' className='img' href='/'width={200} height={40}></img>
      <Nav.Item>
      
        <Nav.Link href="/Accsummary"className="text-underline-hover"><h4>Your accounts</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"href='/Gateway 'className="text-underline-hover"><h4>Travel Money</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"href='/Movie 'className="text-underline-hover"><h4>Book Your show</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-1"href='/Food 'className="text-underline-hover"><h4>Food & Beverages</h4></Nav.Link>
      </Nav.Item>
      
    </Nav>
            <div><img src='./images/foodcarousel.PNG' className=' img-fluid w-100 mb-1' ></img></div>
         <div><img src='./images/foodsection.PNG' className=' img-fluid w-100 mb-1' ></img></div>
            <Container sx={{ p: 3 }}>
                <Grid container spacing={0} rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item>
                        <Card sx={{ maxWidth: 350 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./images/food1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                               
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small"href="https://www.eatsure.com/">Order now</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ maxWidth: 350 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./images/food2.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small"href="https://www.eatsure.com/">Order now</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ maxWidth: 350 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./images/food3.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"href="https://www.eatsure.com/">Order now</Button>
                                {/* <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                  
                </Grid>
            </Container>
        </div>
    )
}
