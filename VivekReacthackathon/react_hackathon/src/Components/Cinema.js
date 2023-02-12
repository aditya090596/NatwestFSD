import React from 'react';
import logo from "../images/natwest-logo.png";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import img1 from "../images/mv1.jpg";
import img2 from "../images/mv2.jpg";
import img3 from "../images/mv3.jpg";
import img4 from "../images/mv4.jpg";
import img5 from "../images/mv5.jpg";
import img6 from "../images/mv6.jpg";
import img7 from "../images/mv7.jpg";
import img8 from "../images/mv8.jpg";
import img9 from "../images/mv9.jpg";
import img10 from "../images/mv10.jpg";
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
    background-color: ${theme.palette.secondary.light};
    transform: scale(1.1);
  }
  `}
`;


export default function Dashboard() {

    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleNext = () => {
        setLoading(true)
        setOpen(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            navigate("/checkout");
        }, 1000);
    };


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
                                <a className="nav-link active" aria-current="page" href="/wallet">Wallet Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="!#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Container sx={{ p: 3 }}>
                <Grid container spacing={3} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img1}
                                    alt="Cinema Tickets"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Kantara
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img2}
                                    alt="Medicine online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Wakanda F
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img3}
                                    alt="Shop online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Avatar
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img4}
                                    alt="Online food delivery"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Drishyam 2
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img5}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bheriya
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img6}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Uunchai
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img7}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Strange World
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img8}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Black Adam
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img9}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Doctor G
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={img10}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Nishana
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={handleNext}>Book Now</Button>
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
