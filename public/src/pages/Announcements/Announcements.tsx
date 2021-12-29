import { Box, Typography } from "@mui/material";
import Header from "../../modules/Header/Header";

export function Announcements(){
    return (
        <Box>
            <Header pageName="Announcements"  activeTab={1}/>
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
                            fontSize: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>

                <Box mt={5}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>


                <Box  mt={5}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}