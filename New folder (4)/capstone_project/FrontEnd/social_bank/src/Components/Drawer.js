import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Vivek from "../images/Vivek_Avatar.jpeg";

const DrawerComp = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();
    const [isLogin, setLogin] = useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                {isLogin ?
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 6 }}>
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
                                <ListItemButton onClick={() => { }}>
                                    <ListItemIcon>
                                        <ListItemText>Profile</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton onClick={() => { navigate("/changepassword") }}>
                                    <ListItemIcon>
                                        <ListItemText>Change Password</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton onClick={() => { setLogin(false) }}>
                                    <ListItemIcon>
                                        <ListItemText>Logout</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>

                            </List>
                        </Menu>
                        <List>
                            <ListItemButton onClick={() => { setLogin(true) }}>
                                <ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton onClick={() => { navigate("/register") }}>
                                <ListItemIcon>
                                    <ListItemText>Your Dashboard</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton onClick={() => { navigate("/register") }}>
                                <ListItemIcon>
                                    <ListItemText>Contact Us</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton onClick={() => { navigate("/register") }}>
                                <ListItemIcon>
                                    <ListItemText>FAQs</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        </List>
                    </Box>
                    :

                    <List>
                        <ListItemButton onClick={() => { setLogin(true) }}>
                            <ListItemIcon>
                                <ListItemText>Login</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton onClick={() => { navigate("/register") }}>
                            <ListItemIcon>
                                <ListItemText>Register</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>

                    </List>
                }
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="white" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;