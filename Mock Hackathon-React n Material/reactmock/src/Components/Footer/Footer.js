import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (<div>
    <MDBFooter className=' bg-dark text-center text-white'>
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
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>


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