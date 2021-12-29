import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import MobileHeader from "../../modules/Header/MobileHeader";

export function MobileHomePage() {
    const videosUrls = [
        'https://www.youtube.com/watch?v=fd-AJZQBHTc',
        'https://www.youtube.com/watch?v=NkZwemcYN78',
        'https://www.youtube.com/watch?v=JCR7gt3AIfs',
        'https://www.youtube.com/watch?v=6L_LCA_zNLo'
    ]
    return (
        <Box>
            <MobileHeader pageName="Welcome" />
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
                        margin: '10px 5px',
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
                                    flexDirection: 'column'
                                }}
                            >
                                <Box>
                                    <ReactPlayer
                                        url={videoUrl}
                                        controls={true}
                                        width="350px"
                                        height="200px"
                                    />
                                </Box>

                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Date:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            &nbsp;26th Decemeber 2021.
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Topic:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            &nbsp;Church Order.
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Preacher:
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            &nbsp;Br. Laurent.
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