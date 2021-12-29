import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import bible from '../../assets/Bible.jpg';

interface Props {
    pageName: string;
    activeTab?: number;
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

function Header({ pageName, activeTab }: Props) {
    const navigate = useNavigate();
    return (
        <Box
            className="Header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '65vh',
                backgroundImage: `url(${bible})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Box
                className="Navigation"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'calc(100% - 86px)',
                    height: '52px',
                    padding: '29px 43px',
                    position: 'fixed'
                }}
            >
                <Box>
                    <Link
                        underline="none"
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            '&:hover': {
                                cursor: "pointer",
                            }
                        }}
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Pretoria Christian Tabernacle
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    {tabs.map((tab, index) => {
                        return (
                            <Box ml={5} key={index}>
                                <Link
                                    underline="none"
                                    sx={{
                                        fontFamily: 'Poppins',
                                        color: 'white',
                                        fontSize: '20px',
                                        '&:hover': {
                                            cursor: "pointer",
                                        },
                                        borderBottom: `${index === activeTab ? "1px solid white": ""}`
                                    }}
                                    onClick={() => {
                                        navigate(tab.route)
                                    }}
                                >
                                    {tab.name}
                                </Link>
                            </Box>
                        )
                    })}
                </Box>
            </Box>

            <Box
                className="ContentWrapper"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '550px',
                    margin: '0px 72px',
                    padding: '95px 43px',
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
                            fontSize: '64px',
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

export default Header;
