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
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '60%',
                        maxWidth: '1000px',
                        padding: '50px 0px',
                    }}
                >
                    <Box>
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
                </Box>
            </Box>
        </Box>
    )
}