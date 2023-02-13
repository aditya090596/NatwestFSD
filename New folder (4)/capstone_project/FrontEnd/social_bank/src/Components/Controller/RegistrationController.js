import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../User/Header';
import empImg from '../../images/employee.png'
import cusImg from '../../images/customer.jfif'

const StyledAvatar = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: ${theme.palette.text.secondary};
    transform: scale(1.2);
  }
  `}
`;

export default function FullWidthGrid() {
    return (
        <>
            <Header />

            <Box sx={{ width: 350, margin: "20px auto", marginTop: 40 }}>
                <Grid container spacing={6}>
                    <Grid item xs={6} md={6} sx={{ textAlign: 'center' }}>
                        <StyledAvatar elevation={24}>
                            <a href="/admin/register">
                                <img src={empImg} alt="imgError" />
                            </a>
                            <h3>Admin</h3>
                        </StyledAvatar>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ textAlign: 'center' }}>
                        <StyledAvatar elevation={24}>
                            <a href="/user/register">
                                <img src={cusImg} alt="imgError" />
                            </a>
                            <h3>User</h3>
                        </StyledAvatar>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}