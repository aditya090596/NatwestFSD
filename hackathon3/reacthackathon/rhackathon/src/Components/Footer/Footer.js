import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
  return (<div>

<MDBFooter bgColor='' className='Footer1 text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-5 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 border-bottom'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h3 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Natwest
              </h3>
              <p>
              NatWest Group is a relationship bank for a digital world. We champion potential; breaking down barriers and building financial confidence so the 19 million people, families and businesses we serve in communities throughout the UK and Ireland can rebuild and thrive. If our customers succeed, so will we.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bank accounts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Savings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Investment
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Credit cards
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Buy Now Pay Later
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Reward account and cards
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Life Moments</h6>
              <p>
                <a href='#!' className='text-reset'>
                  View all Life moments
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Managing your money
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bereavement
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Struggling financially
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Travel Guide
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Financial abuse
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Edinburg, Uk
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
    <MDBFooter className='Footer2 text-center text-white' >
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register Now</span>
            <MDBBtn type='button' href='/Register'outline color="light" rounded>
              Sign up!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.
        
      </div>
    </MDBFooter>

    {/* <MDBFooter className=' bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         Copyright @:
        <a className='text-white' href='© National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA'>
        Copyright © National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.

        </a>
      </div>
    </MDBFooter> */}


    {/* <div className="container">
      <div className="footer-sec bg-secondary" style="background-color:azure ;">

        <div className="container text-center">


          <div className="row">

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">

              <h1>ContactUs</h1>
              <h5>
                <a href="https://goo.gl/maps/F2ScatxXmea8ZA6PA" target="_blank"><i
                  className="bi bi-phone-fill "></i></a>
              </h5>


            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">

              <h1>ConnectUs</h1>
              <h5>Located in: Building Candor Techspace
                Address: Building 1, Tower A, Unitech Infospace, <br></br>Old Delhi Gurgaon Rd, Sector 21,
                Gurugram, Haryana 122016 !!!</h5>

            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">

              <h1>ReachUs</h1>
              <h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28052.15141698341!2d77.0569185449082!3d28.49403109551849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1964fdda0243%3A0xea892a7f1201881!2sRBS%20Services%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1665732892118!5m2!1sen!2sin"
                  width="150" height="150" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </h5>

            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  );
}