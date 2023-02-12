import React from 'react'
import Hero from "../images/Screenshot 2022-11-23 160410.jpg";
import logo from "../images/natwest-logo.png";
import Hero2 from "../images/2.jpg";
import Hero3 from "../images/3.jpg";
import search from "../images/search.svg";
import "./CSS/Personal.css"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import p1 from '../images/p1.jfif'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jfif'
import p4 from '../images/p4.jfif'
import p5 from '../images/p5.jfif'
import p6 from '../images/p6.jfif'
import Scroll from "./Scroll";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#673ab7',
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
    transform: scale(1.2);
  }
  `}
`;

export default function Personal() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand pb-2" href="/"><img src={logo} alt="" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active linkss" aria-current="page" href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Help and Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">You and your money</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Banking with us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Climate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Ukrainian refugee</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" psaceholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><img src={search}
                                alt="" /></button>
                        </form>
                    </div>
                </div>
            </nav>
            <img src={Hero} className='img-fluid shadow-4' alt='...' />
            <img src={Hero2} className='img-fluid shadow-4' alt='...' />
            <img src={Hero3} className='img-fluid shadow-4' alt='...' />

            <Container sx={{ p: 3 }}>
                <Grid container spacing={3} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={24}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p1}
                                    alt="Cinema Tickets"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bank Accounts
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Have we got the right bank account for you? <br /><br />
                                        The one that just gets things done.

                                        Basic current account today, access to NatWest's vast offering for your future tomorrow.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/current-accounts.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>

                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p2}
                                    alt="Medicine online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mortgages
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Find a mortgage with NatWest. <br /><br />
                                        NatWest mortgages are available to over 18s. Your home may be repossessed if you do not keep up repayments on your mortgage.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/mortgages.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p3}
                                    alt="Shop online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Savings
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Completely new to the world of savings, or need help kick-starting your journey? Wherever you are in the process, we're here.
                                        <br />
                                        Find out more about different options below - from flexible savings accounts.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/savings.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p4}
                                    alt="Online food delivery"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Loans
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our rates depend on your circumstances and loan amount and may differ from the Representative APR.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/loans.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p5}
                                    alt="malls"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Investments
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The value of investments can fall as well as rise, and you may not get back the full amount you invest. Eligibility criteria, fees and charges apply.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/investments.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>

                    <Grid item>
                        <ThemeProvider theme={customTheme}>
                            <StyledCard sx={{ maxWidth: 345, border: 2, borderColor: 'error.main' }} elevation={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p6}
                                    alt="Forex"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Credit Card
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Choose from our fee-free account or view our full range of accounts.
                                        To apply you must be 18+. Specific account eligibility criteria applies.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="secondary" variant="contained" size="small" href="https://www.natwest.com/credit-cards.html">Know More</Button>
                                </CardActions>
                            </StyledCard>
                        </ThemeProvider>
                    </Grid>
                </Grid>
                <Scroll />
            </Container>
        </>
    )
}
