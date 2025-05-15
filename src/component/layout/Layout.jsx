import { useLocation } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const hideNavBar = path === "/login" || path === "/";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {!hideNavBar && <NavBar />}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
