import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Link, List, ListItem, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import bible from '../../assets/Bible.jpg';


interface Props {
    pageName: string;
}

interface NavTab {
    name: string;
    route: string;
}

const tabs: NavTab[] = [
    {
        name: 'About Us',
        route: '/about'
    },

    {
        name: 'Announcements',
        route: '/announcements'
    },

    {
        name: 'Contact Us',
        route: '/contacts'
    }
];

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

function MobileHeader({ pageName }: Props) {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box
            className="Header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '55vh',
                backgroundImage: `url(${bible})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Drawer
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Link
                        underline="none"
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#000000',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            '&:hover': {
                                cursor: "pointer",
                            }
                        }}
                        onClick={() => {
                            navigate("/");
                            handleDrawerClose();
                        }}
                    >
                        Pretoria Christian Tabernacle
                    </Link>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        alignItems: 'center',
                    }}
                >
                    {tabs.map((tab, index) => (
                        <ListItem
                            button
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link
                                underline="none"
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#000000',
                                    fontSize: '30px',
                                    '&:hover': {
                                        cursor: "pointer",
                                    }
                                }}
                                onClick={() => {
                                    navigate(tab.route);
                                    handleDrawerClose();
                                }}
                            >
                                {tab.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                className="Navigation"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'calc(100% - 10px)',
                    height: '52px',
                    padding: '15px 5px'
                }}
            >
                <Box>
                    <Link
                        underline="none"
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            '&:hover': {
                                cursor: "pointer",
                            }
                        }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Pretoria Christian Tabernacle
                    </Link>
                </Box>

                <Box>
                    <IconButton
                        onClick={handleDrawerOpen}
                        sx={{
                            color: 'white'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box
                className="ContentWrapper"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '45%',
                    padding: '45px 5px',
                    backgroundColor: 'rgba(60,35,17,0.2)'
                }}
            >
                <Box
                    className="Content"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold'
                        }}
                    >
                        {pageName}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default MobileHeader;
