import React from 'react';
import logo from "../images/natwest-logo.png";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Scroll from "./Scroll";
import { Box, Grid } from '@mui/material';
import img1 from "../images/ex1.webp";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['border-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    border-color: ${theme.palette.secondary.main};
    transform: scale(1.02);

  }
  `}
`;

export default function Forex() {

    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleNext = () => {
        setLoading(true)
        setOpen(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            navigate("/checkout1");
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
    });


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

            {/* <Box sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
            }}
            > */}
            <Box
                sx={{
                    p: 1,
                    m: 1,
                    height: 'auto',
                    backgroundImage: `url(${img1})`,
                    borderRadius: 1,
                }}
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item>
                        <StyledCard sx={{ maxWidth: 345, bgcolor: '#401664', color: '#ffffff' }} elevation={24}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom constiant="h5" component="div">
                                        Natwest Travel Money
                                    </Typography>
                                    <Typography constiant="caption" align="left" color="#ffffff">
                                        Our Travel Money service offers over 70 currencies with no hidden fees. We partner with eurochange, the foreign exchange experts, to provide this service and your order and payment details will be processed by eurochange.
                                        <br /><br />
                                        <CheckIcon /> Easy. Quick. Secure <br /><br />
                                        <CheckIcon /> Free delivery to your home (on orders over £500) or nearest eurochange branch <br /><br />
                                        <CheckIcon /> Competitive rates<br /><br />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </StyledCard>
                    </Grid>
                    <Grid item >
                        <StyledCard sx={{ maxWidth: 500, border: '5px solid white' }} elevation={24}>
                            <CardContent>
                                <Typography gutterBottom constiant="body1" align="left" component="div">
                                    Buy Travel Money
                                </Typography>
                                <Autocomplete
                                    id="country-select-demo"
                                    sx={{ width: 300 }}
                                    options={currencies}
                                    autoHighlight
                                    getOptionLabel={(option) => option.code}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                alt=""
                                            />
                                            {option.label}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Choose a currency"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { mt: 2, width: '100ch' }, display: 'flex'
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-name"
                                        label="Enter Amount"

                                    />
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Exchanged Value"
                                        sx={{ px: 1 }}

                                    />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        mt: 2,
                                        width: '100ch',
                                        display: 'flex',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <CardActions>
                                        <Button variant="contained" size="medium">Check Rate</Button>
                                    </CardActions>
                                    <CardActions>
                                        <Button variant="contained" size="medium" onClick={handleNext}>Order Now</Button>
                                    </CardActions>
                                </Box>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                </Grid>

            </Box>

            {/* </Box> */}
            <Scroll />
        </>
    )
}

const currencies = [
    { code: 'AUD', label: ' Australian Dollar ' },
    { code: 'AZN', label: ' Azerbaijan Manat ' },
    { code: 'BHD', label: ' Bahraini Dinar ' },
    { code: 'BBD', label: ' Barbadian Dollar ' },
    { code: 'BYN', label: ' Belarusian Ruble ' },
    { code: 'BZD', label: ' Belizean Dollar ' },
    { code: 'BAM', label: ' Bosnian Convertible Mark ' },
    { code: 'BRL', label: ' Brazilian Real ' },
    { code: 'GBP', label: ' British Pound Sterling ' },
    { code: 'BND', label: ' Bruneian Dollar ' },
    { code: 'BGN', label: ' Bulgarian Lev ' },
    { code: 'CAD', label: ' Canadian Dollar ' },
    { code: 'KYD', label: ' Cayman Islands Dollar ' },
    { code: 'HRK', label: ' Croatian Kuna ' },
    { code: 'ANG', label: ' Dutch Guilder ' },
    { code: 'EUR', label: ' Euro ' },
    { code: 'FJD', label: ' Fijian Dollar ' },
    { code: 'GEL', label: ' Georgian Lari ' },
    { code: 'GIP', label: ' Gibraltar Pound ' },
    { code: 'ILS', label: ' Israeili Shekel ' },
    { code: 'JOD', label: ' Jordanian Dinar ' },
    { code: 'KWD', label: ' Kuwaiti Dinar ' },
    { code: 'LYD', label: ' Libyan Dinar ' },
    { code: 'MOP', label: ' Macau Pataca ' },
    { code: 'NZD', label: ' New Zealand Dollar ' },
    { code: 'NOK', label: ' Norwegian Krone ' },
    { code: 'OMR', label: ' Omani Rial ' },
    { code: 'WST', label: ' Samoan Tala ' },
    { code: 'SGD', label: ' Singapore Dollar ' },
    { code: 'CHF', label: ' Swiss Franc ' },
    { code: 'TRY', label: ' Turkish Lira ' },
    { code: 'USD', label: ' United States Dollar ' },
];
