import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Carousel from 'react-bootstrap/Carousel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import './Gateway.css'
// import Button from 'react-bootstrap/Button';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,

}
  from 'mdb-react-ui-kit';

export default function InputAdornments() {
  let navigate = useNavigate();
  const [values, setValues] = React.useState({
    amount: '',

    currency: '',
    currencyRange: '',

  });

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const top100Films = [
    { label: 'Pounds' },
    { label: 'Euro' },
    { label: 'US Dollars' },
    { label: 'Indian Rupee' },
    { label: 'Yen' },
    { label: 'Ringet' }

  ]

  return (
    <div >

      <Nav variant="tabs" defaultActiveKey="/home">
        <img src='./images/logo.png' className='img' href='/' width={200} height={40}></img>
        <Nav.Item>
          <Nav.Link href="/Accsummary"><h4>Your accounts</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='/Gateway ' className=""><h4>Travel money</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='/Movie ' className=""><h4>Book Your show</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1"href='/Food 'className="text-underline-hover"><h4>Food & Beverages</h4></Nav.Link>
        </Nav.Item>
      </Nav>
      
      <div> <img src='./images/travelmoney.PNG' className=' img-fluid w-100'></img></div>
      <Box
                display="flex"
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                 >

      <MDBContainer className=" d-flex my-2  mb-1 ps-2 pb-0">


        <MDBCard >
          <MDBRow className='g-col-6'>

            <MDBCol md='5' >
              <MDBCardImage src='./images/Fxpageimg.PNG' alt="login form" className='rounded-start w-100 h-100  ' />
            </MDBCol>

            <MDBCol md='5'>
              <MDBCardBody className='d-flex flex-column '>

                <div className='order '> <h5 className="fw-normal my-3 pb-1 text-center text-light" style={{ letterSpacing: '1px' }}>Buy Travel Money</h5></div>

                <div className="container mt-3 d-flex">
                  <div className="row">
                    <div className="fw-normal my-4  pb-3">
                      <div className=" order  text-light py-2 mb-4 text-center rounded">
                        <h2>Calculate exchange rates</h2>
                      </div>
                      <form>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          <div>
                            <Box>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 450, ml: 1, mb: 1 }}
                                renderInput={(params) => <TextField {...params} label="Your Currency" />}
                              />
                            </Box>
                            <Box>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 450, ml: 1 }}
                                renderInput={(params) => <TextField {...params} label="Native currency" />}
                              />
                              {/* Countries



              Countries  */}
                            </Box>
                            <TextField
                              label="Your amount"
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch', mt:2}}
                              InputProps={{
                                startAdornment: <InputAdornment position="start">£1000.00</InputAdornment>,
                              }}
                            />

                            <FormControl sx={{ m: 1, width: '25ch',mt:2 }} variant="outlined">
                              <OutlinedInput
                                id="outlined-adornment-currency"
                                value={values.currency}
                                onChange={handleChange1('currency')}
                                endAdornment={<InputAdornment position="end"> €1122.20</InputAdornment>}
                                aria-describedby="outlined-currency-helper-text"
                                inputProps={{
                                  'aria-label': 'currency',
                                }}
                              />
                              <FormHelperText id="outlined-currency-helper-text">You'll get €1121.90 </FormHelperText>
                            </FormControl>


                            <Box
                              component="form"
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  label="Amount"
                                  id="outlined-size-normal"
                                  defaultValue="£1000"
                                  size="Amount"
                                />
                                <TextField label="Amount" id="outlined-size-normal" defaultValue="$1166.71" />
                              </div>
                              <div>
                                <TextField
                                  label="Amount"
                                  id="filled-size-normal"
                                  defaultValue="£1000"
                                  variant="filled"
                                  size="normal"
                                />
                                <TextField
                                  label="Amount"
                                  id="filled-size-normal"
                                  defaultValue="INR 89137.9"
                                  variant="filled"
                                />
                              </div>
                              <div>
                                <TextField
                                  label="Amount"
                                  id="standard-size-normal"
                                  defaultValue="£1000"
                                  size="Amount"
                                  variant="standard"
                                />
                                <TextField
                                  label="Amount"
                                  id="standard-size-normal"
                                  defaultValue="¥ 8090.09"
                                  variant="standard"
                                />

                                <div className=" d-flex mb-5">
                                  <Button variant="contained" sx={{ p: 3, mt: 2, mx: 2,bgcolor:'#4a148c' }}href="https://www.eurochange.co.uk/branches">Click & Collect
                                  </Button>
                                  <Button variant="contained" sx={{ p: 3, mt: 2, mx: 5,bgcolor:'#4a148c' }} href="/Checkout">Home Delievery</Button>
                                </div>
                                <a href='https://www.natwest.com/global/commercial-currency-rates.html'>Check the latest exchange Rates</a>
                              </div>
                            </Box>

                          </div>
                        </Box>
                      </form>
                    </div>
                  </div>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
      </Box>
      <div><img src='./images/trvlcontact.PNG' className=' img-fluid w-100 mb-1' ></img></div>

    </div>
  );
}
