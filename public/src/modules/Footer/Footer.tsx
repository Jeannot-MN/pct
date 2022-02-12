import { Box, Link, Typography } from "@mui/material";
import { useScreenSize } from "../../hooks/useScreenSize";
import YouTubeIcon from '@mui/icons-material/YouTube';

export function Footer() {
    const isDesktop = useScreenSize(1030);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                height: "150px",
                position: 'relative',
                bottom: '0',
                marginTop: isDesktop ? '100px' : '60px',
                backgroundColor: 'rgba(54,33,15,0.7)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >

                <Box>
                    <Link
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: isDesktop ? '20px' : '14px',
                            textAlign: 'center',
                            '&:hover': {
                                cursor: "pointer",
                            },
                        }}
                        href="https://www.google.com/maps/search/2+Robert+Sobukwe+St,+Sunnyside,+Pretoria,+0002,+South+Africa/@-25.7499271,28.1981422,17z/data=!3m1!4b1"
                        target={"_blank"}
                    >
                        2 Robert Sobukwe, Sunnyside, Pretoria, 0002, South Africa
                    </Link>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: isDesktop ? '20px' : '14px',
                            textAlign: 'center',
                        }}
                    >
                        +27(0) 7 31 30 0406
                    </Typography>
                </Box>

                <Box
                    display='flex'
                    justifyContent = 'center'
                >
                    <Link
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            textAlign: 'center',
                            '&:hover': {
                                cursor: "pointer",
                            },
                        }}
                        href="https://www.youtube.com/c/PretoriaChristianTabernacle"
                        target={"_blank"}
                    >
                        <YouTubeIcon fontSize="large" />
                    </Link>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'white',
                            fontSize: isDesktop ? '18px' : '14px',
                            textAlign: 'center',
                        }}
                    >
                        Pretoria Christian Tabernacle &copy; {`${new Date().getFullYear()}`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}