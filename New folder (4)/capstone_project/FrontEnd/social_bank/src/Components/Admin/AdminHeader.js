import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "../Drawer";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Vivek from "../../images/Vivek_Avatar.jpeg";


const Header = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usertype');
        navigate("/")
    };

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
                    {isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                                Social Bank
                            </Typography>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            {(localStorage.getItem('token') != null) ?
                                <>
                                    <Tabs
                                        sx={{ marginLeft: "auto" }}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        value={value}
                                        onChange={(e, value) => setValue(value)}
                                    >
                                        <Tab label="Home" onClick={() => { navigate("/") }} />
                                        <Tab label="Complaints Dashboard" onClick={() => { navigate("/admin/dashboard") }} />

                                    </Tabs>
                                    <Box sx={{ marginLeft: "auto" }}>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt="Remy Sharp" src={Vivek} />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <List onClick={handleCloseUserMenu}>
                                                <ListItemButton onClick={() => { navigate("/user/profile") }}>
                                                    <ListItemIcon>
                                                        <ListItemText>Profile</ListItemText>
                                                    </ListItemIcon>
                                                </ListItemButton>
                                                <ListItemButton onClick={() => { navigate("/admin/changepassword") }}>
                                                    <ListItemIcon>
                                                        <ListItemText>Change Password</ListItemText>
                                                    </ListItemIcon>
                                                </ListItemButton>
                                                <ListItemButton onClick={logout}>
                                                    <ListItemIcon>
                                                        <ListItemText>Logout</ListItemText>
                                                    </ListItemIcon>
                                                </ListItemButton>

                                            </List>
                                        </Menu>
                                    </Box>
                                </>
                                :
                                <>
                                    <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={() => { navigate("/login") }}>
                                        Login
                                    </Button>
                                    <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={() => { navigate("/register") }}>
                                        SignUp
                                    </Button>
                                </>
                            }
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;