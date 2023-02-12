import React from 'react';
import "./CSS/Main.css";
import logo from "../images/natwest-logo.png";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/on.png";
import img2 from "../images/22.jpg";
import img3 from "../images/33.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import movies from "../images/movies.webp";
import medicine from "../images/medicine.jpg";
import shop from "../images/shop.jfif";
import food from "../images/food.jfif";
import qr from "../images/qr.jpg";
import forex from "../images/forex.jpg";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Scroll from "./Scroll";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#4fc3f7',
        },
    },
});

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.2);
  }
  `}
`;

export default function Wallet() {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        fetch('http://localhost:8090/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.status === 401) {
                    navigate("/login");
                }
            });
    })

    // const handleNext = () => {
    //     setLoading(true)
    //     setOpen(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //         setOpen(false)
    //         navigate("/cinema");
    //     }, 1000);
    // };

    return (
        <>
            {loading ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop> : null}

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand pb-2" href="/dashboard"><img src={logo} alt="" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">Your accounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Your Statements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Payments and Transfers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/wallet">Wallet Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Carousel className='height-20vh'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container sx={{ p: 3 }}>
                <Grid container spacing={3} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={movies}
                                    alt="Cinema Tickets"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Cinema Tickets
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Book your favorite movie tickets online and avoid the hassle of standing in a line.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small" onClick={() => {
                                        setLoading(true)
                                        setOpen(true)
                                        setTimeout(() => {
                                            setLoading(false)
                                            setOpen(false)
                                            navigate("/cinema");
                                        }, 1000);
                                    }}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={medicine}
                                    alt="Medicine online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Buy medicine online
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Buy medicine online from one of our partner retailer and get it delivered to your doorstep.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small">Buy Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={shop}
                                    alt="Shop online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Shop Online
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Now shop online from one of the top online retailers directly from your online banking.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small">Shop Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={food}
                                    alt="Online food delivery"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Online food delivery
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Hungry?? Now order food online from our partner restauranta and get the hot food delivered directly to your doorstep.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small">Order Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={qr}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pay at store using QR code
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Now pay for your shopping directly from your bank account or card using the QR code of the merchant.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small">Pay now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345 }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={forex}
                                    alt="Forex"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Forex
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Out of country? Don't worry. Use our best rate currency converter to convert to local currency and enjoy your holidays.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small" onClick={() => {
                                        setLoading(true)
                                        setOpen(true)
                                        setTimeout(() => {
                                            setLoading(false)
                                            setOpen(false)
                                            navigate("/forex");
                                        }, 1000);
                                    }}>Exchange now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                </Grid>
            </Container>
            <Scroll />
        </>
    )
}
