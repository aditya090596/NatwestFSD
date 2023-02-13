import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Homepage() {
  
  return (
        <div >
          <img src='./images/Capture.PNG' className=' img-fluid w-100 mb-1' ></img>
          <div className=' d-flex justify-content-evenly '>
    <Card className='' sx={{ maxWidth: 345,mb:1 }}>
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
    <Card  className=''sx={{ maxWidth: 345, mb:1}}>
      <CardMedia className='mx-1'
        component="img"
        height="140"
        image="./images/card1.jpg"
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
    <Card className='mx-1'sx={{ maxWidth: 345, mb:1 }}>
      <CardMedia
        component="img"
        height="140"
        image="./images/Card2.jpg"
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
    <Card className='mx-1'sx={{ maxWidth: 345 ,mb:1 }}>
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
    <Card className='' sx={{ maxWidth: 345, mb:1 }}>
      <CardMedia 
        component="img"
        height="140"
        image="./images/FHC.png"
        alt="green iguana"
      />
      <CardContent className=''>
        <Typography gutterBottom variant="h5" component="div">
        Financial Health checkup
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions >
      <a href="https://www.natwest.com/financial-health-check.html?q=financial+health+checkup&brand=NATWEST&section=personal&enginekey=wYnTjXmfABgYKBU6GMG3" class="btn btn-primary">Book your appointment</a>
        
      </CardActions>
    </Card>

  

    
   </div>
   </div>
  );
}

export default Homepage;


