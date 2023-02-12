import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    return (

        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-2'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: 'rgba(64,22,100)' }}>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </a>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </a>
                    <a href='!#' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                </div>
            </section>

            <section style={{ backgroundColor: 'rgba(64,22,100)' }}>
                <MDBContainer className='text-center text-md-start'>
                    <MDBRow className=''>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Natwest
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Bank Accounts
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Savings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Investments
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Credit Cards
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Life Moments</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Managing your money
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Struggling Financially
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Bereavement
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Financial Health Check
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Bishopsgate, London, EC2M 4AA
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

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(64,22,100)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://www.natwest.com/'>
                    Copyright © National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.
                </a>
            </div>
        </MDBFooter>
    );
}