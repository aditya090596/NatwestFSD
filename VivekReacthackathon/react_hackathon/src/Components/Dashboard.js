import React from 'react'
import logo from "../images/natwest-logo.png";
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Dashboard() {

    let navigate = useNavigate();

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

    const columns = [
        {
            field: 'firstName',
            headerName: 'Your',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Details',
            width: 300,
            editable: true,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Vivek Ranjan', firstName: 'Name' },
        { id: 2, lastName: '03-09-1992', firstName: 'Date of birth' },
        { id: 3, lastName: '123456789', firstName: 'Customer number' },
        { id: 4, lastName: '8802723075', firstName: 'Mobile number' },
        { id: 5, lastName: 'ranjanvivek9@gmail.com', firstName: 'email address' },

    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand pb-2" href="/"><img src={logo} alt="" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/dashboard">Your accounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Your Statements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Payments and Transfers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/wallet">Wallet Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Container sx={{ pt: 2, pb: 1 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Your Personal Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                rowsPerPageOptions={[5]}
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Container>

            <Container sx={{ pt: 2, pb: 1 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Your Current Account - 3985</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Particulars</th>
                                        <th>Type</th>
                                        <th>amount</th>
                                        <th>balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-active">
                                        <td>08-11-2022 </td>
                                        <td>Amazon.com</td>
                                        <td>dr</td>
                                        <td>1500</td>
                                        <td>104100</td>
                                    </tr>
                                    <tr>
                                        <td>08-11-2022 </td>
                                        <td>Zomato.com</td>
                                        <td>dr</td>
                                        <td>450</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>07-11-2022 </td>
                                        <td>Flipkart.com</td>
                                        <td>dr</td>
                                        <td>5000</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>01-11-2022 </td>
                                        <td>salary credited</td>
                                        <td>dr</td>
                                        <td>100000</td>
                                        <td>110600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Your Savings Account - 7845</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Particulars</th>
                                        <th>Type</th>
                                        <th>amount</th>
                                        <th>balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-active">
                                        <td>08-11-2022 </td>
                                        <td>Amazon.com</td>
                                        <td>dr</td>
                                        <td>1500</td>
                                        <td>104100</td>
                                    </tr>
                                    <tr>
                                        <td>08-11-2022 </td>
                                        <td>Zomato.com</td>
                                        <td>dr</td>
                                        <td>450</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>07-11-2022 </td>
                                        <td>Flipkart.com</td>
                                        <td>dr</td>
                                        <td>5000</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>01-11-2022 </td>
                                        <td>salary credited</td>
                                        <td>dr</td>
                                        <td>100000</td>
                                        <td>110600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Your Credit Card - 2578</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Particulars</th>
                                        <th>Type</th>
                                        <th>amount</th>
                                        <th>balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-active">
                                        <td>08-11-2022 </td>
                                        <td>Amazon.com</td>
                                        <td>dr</td>
                                        <td>1500</td>
                                        <td>104100</td>
                                    </tr>
                                    <tr>
                                        <td>08-11-2022 </td>
                                        <td>Zomato.com</td>
                                        <td>dr</td>
                                        <td>450</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>07-11-2022 </td>
                                        <td>Flipkart.com</td>
                                        <td>dr</td>
                                        <td>5000</td>
                                        <td>105600</td>
                                    </tr>
                                    <tr>
                                        <td>01-11-2022 </td>
                                        <td>salary credited</td>
                                        <td>dr</td>
                                        <td>100000</td>
                                        <td>110600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </>
    )
}
