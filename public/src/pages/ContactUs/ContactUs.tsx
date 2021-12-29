import { Box, Typography } from "@mui/material";
import Header from "../../modules/Header/Header";

export function ContactUs() {
    return (
        <Box>
            <Header pageName="Contacts" activeTab={2} />
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
                        width: '70%',
                        maxWidth: '1200px',
                        padding: '50px 0px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex'
                        }}
                    >
                        <Box>
                            <iframe
                                title="Location"
                                width="600"
                                height="500"
                                src="https://maps.google.com/maps?q=77%20Meintjies%20St,%20Sunnyside,%20Pretoria,%200002,%20South%20Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            />
                        </Box>
                        <Box
                            ml={5}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Our Address:
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    77 Meintjies St, Sunnyside
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Pretoria, 0002, South Africa
                                </Typography>
                            </Box>

                            <Box mt={5}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Our Schedule:
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Wednesdays and Thursdays: 6PM - 8PM
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Sundays: 9AM - 12AM
                                </Typography>
                            </Box>

                            <Box mt={5}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Our Contacts:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    T: +27(0) 7 31 30 0406
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    E: pretoriachristiantabernacle@gmail.com
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}