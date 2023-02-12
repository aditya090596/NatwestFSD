import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Scroll from "../Scroll";

const products = [
    {
        name: 'EUR',
        desc: '0.86',
        price: '£ 859.30',
        nofp: '€ 1000',
    },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr Vivek Ranjan' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
    return (
        <>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Summary
                </Typography>
                <List disablePadding>
                    {products.map((product) => (
                        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Currency" secondary={product.name} />
                            <ListItemText primary="Exchange Rate" secondary={product.desc} />
                            <ListItemText primary="Amount" secondary={product.nofp} />
                            <Typography variant="body2">{product.price}</Typography>
                        </ListItem>
                    ))}

                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Charges @ 2%" />
                        <Typography variant="subtitle1">
                            £ 17.18
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            £ 876.48
                        </Typography>
                    </ListItem>
                </List>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Shipping
                        </Typography>
                        <Typography gutterBottom>John Smith</Typography>
                        <Typography gutterBottom>{addresses.join(', ')}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Payment details
                        </Typography>
                        <Grid container>
                            {payments.map((payment) => (
                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.detail}</Typography>
                                    </Grid>
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
            <Scroll />
        </>
    );
}