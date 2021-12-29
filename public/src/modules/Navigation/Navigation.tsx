import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import { AboutUs } from "../../pages/AboutUs/AboutUs";
import { MobileAboutUs } from "../../pages/AboutUs/MobileAboutUs";
import { Announcements } from "../../pages/Announcements/Announcements";
import { MobileAnnouncements } from "../../pages/Announcements/MobileAnnouncements";
import { ContactUs } from "../../pages/ContactUs/ContactUs";
import { MobileContactUs } from "../../pages/ContactUs/MobileContactUs";
import { HomePage } from "../../pages/HomePage/HomePage";
import { MobileHomePage } from "../../pages/HomePage/MobileHomePage";
import { Footer } from "../Footer/Footer";

function Navigation() {
    const isDesktop = useScreenSize(1030);
    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Routes>
                <Route path="/" element={isDesktop ? <HomePage /> : <MobileHomePage />} />
                <Route path="/about" element={isDesktop ? <AboutUs /> : <MobileAboutUs />} />
                <Route path="/announcements" element={isDesktop ? <Announcements /> : <MobileAnnouncements />} />
                <Route path="/contacts" element={isDesktop ? <ContactUs /> : <MobileContactUs />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default Navigation;