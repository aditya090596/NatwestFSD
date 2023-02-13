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

    
  </div>
  );
}