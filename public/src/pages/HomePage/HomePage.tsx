import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Header from "../../modules/Header/Header";

export function HomePage() {
    const videosUrls = [
        'https://www.youtube.com/watch?v=fd-AJZQBHTc',
        'https://www.youtube.com/watch?v=NkZwemcYN78',
        'https://www.youtube.com/watch?v=JCR7gt3AIfs',
        'https://www.youtube.com/watch?v=6L_LCA_zNLo'
    ]
    return (
        <Box>
            <Header pageName="Welcome" />
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
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '60%',
                            maxWidth: '1000px',
                            padding: '50px 0px',
                        }}
                    >
                        <Box sx={{
                            marginBottom: '20px'
                        }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '25px',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                Greeting to you all in the Holy name of our Lord Jesus Christ
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                Welcome to Pretoria Christian Tabernacle...
                                We are a interdenominational - independent - non-profit - registered.
                                At Pretoria Christian Tabernacle, We believe in the fellowship of all children of God worldwide.
                                Therefore everyone is invited to come and hear the Word of God as revealed in the end time.
                                The complete plan of God for the salvation of man as fulfilled in Jesus Christ and unveiled in the Bible,
                                is the center of the our preaching.
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    fontStyle: 'italic'
                                }}
                            >
                                "Gather my saints together unto me; those that have made a covenant with me by sacrifice."  Psalms 50:5
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/*
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '60%',
                        maxWidth: '1000px',
                        padding: '50px 0px',
                    }}
                > <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '25px',
                                textAlign: 'left',
                                fontWeight: 'bold'
                            }}
                        >
                            Recent Sermons:
                        </Typography>
                    </Box>

                    {videosUrls.map((videoUrl, index) => {
                        return (
                            <Box
                                key={index}
                                mt={5}
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Box>
                                    <ReactPlayer
                                        url={videoUrl}
                                        controls={true}
                                    />
                                </Box>

                                <Box ml={5}>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Date:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            26th Decemeber 2021.
                                        </Typography>
                                    </Box>

                                    <Box mt={3}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Topic:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Church Order.
                                        </Typography>
                                    </Box>

                                    <Box mt={3}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Preacher:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Br. Laurent.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })} 
                </Box>*/}
            </Box>
        </Box>
    )
}