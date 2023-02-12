import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import image1 from "../images/permier3.jpg";
import Autocomplete from '@mui/material/Autocomplete';
import Carousel from 'react-bootstrap/Carousel';

export default function Gateway() {

    const top100Films = [
        { label: 'Credit Card' },
        { label: 'Debit Card' },
        { label: 'Wallet' }
    ]

    return (
        <>
            {/* <Box
                component="img"
                sx={{
                    height: 350,
                    width: 1300,
                    maxHeight: { xs: 233, md: 200, lg: 350 },
                    maxWidth: { xs: 350, md: 800, lg: 1300 },
                }}
                alt="The house from the offer."
                src={image1}
            /> */}

             <Carousel className='container mb-1 mt-1'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          img src='/images/debitcard.png'height={500}
          alt="First slide"
        />
        <Carousel.Caption>
        <button type="button" class="btn btn-primary" href='https://www.natwest.com/mortgages.html?intcam=PC_HP-P4-1-ALL-DEF'>Personal</button>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          img src='/images/payment.png'height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
        <button type="button" class="btn btn-primary" href='https://www.natwest.com/mortgages.html?intcam=PC_HP-P4-1-ALL-DEF'>Premier</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          img src='/images/Rewardcard.jpg'height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
        <button type="button" class="btn btn-primary" href='https://www.natwest.com/mortgages.html?intcam=PC_HP-P4-1-ALL-DEF'>Business</button>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            <Box>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 225, ml:6,mt:5 }}
                    renderInput={(params) => <TextField {...params} label="Payment Options" />}
                />
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch'  }, p: 2, ml:3
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        fullname
                        id="outlined-Full Name"
                        label="Full Name"
                        // sx={{  }}
                        defaultValue=""
                    />
                    <TextField
                        cardnumber
                        id="outlined-Card Number"
                        label="Card Number"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-expiry-input"
                        label="CVV"
                        type="CVV"
                        autoComplete=""
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>

                <Stack spacing={2} direction="row">
                    <Button sx={{ ml: 1 }} variant="contained">Submit</Button>
                </Stack>
            </Box>
        </>
    );
}