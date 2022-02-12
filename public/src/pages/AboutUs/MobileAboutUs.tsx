import { Box, Link, Typography } from "@mui/material";
import MobileHeader from "../../modules/Header/MobileHeader";
import WMB from '../../assets/WMB.png';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function MobileAboutUs() {
    return (
        <Box>
            <MobileHeader pageName="About us" />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                        margin: '20px 10px',
                    }}
                >
                    <Box display="flex" flexDirection="column" mb="25px">
                        <Box mb="10px">
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                Jesus Christ
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }}
                            >
                                We believe that Jesus Christ is THE SON OF GOD.
                                The fullness of the Godhead dwelt in human flesh.
                                <br />Colossians 2:9
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" mb="25px">
                        <Box mb="10px">
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                The Church
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }}
                            >
                                We believe that the Church was inaugurated on the day of Pentecost
                                and that this church of Pentecost is the pattern during all the dispensation of the gentiles.
                                The church is built on the Foundation of the apostles and the prophets
                                , Jesus Christ being the Chief Cornerstone.
                                <br /> Ephesians 2:19-22
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" mb="25px">
                        <Box mb="10px">
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                William M. Branham
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }}
                            >
                                We believe that William Marrion Branham is the Prophet promised in Malachi 4:5-6,
                                the Messenger of the Laodicean Church of Revelation 3:14
                            </Typography>
                            <Box display="flex" justifyContent="center" mt="10px">
                                <img
                                    src={WMB}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column">
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                Youtube Channel
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Link
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: 'red',
                                    textAlign: 'center',
                                    '&:hover': {
                                        cursor: "pointer",
                                    },
                                }}
                                href="https://www.youtube.com/c/PretoriaChristianTabernacle"
                                target={"_blank"}
                            >
                                <YouTubeIcon
                                    sx={{
                                        fontSize: '60px',
                                        padding: '0px'
                                    }}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}