import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  //   const navigate = useNavigate();
  // const clickLogo = () ={
  //     navigate('/');
  // }
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ minHeight: 80, justifyContent: "center", mb: 6 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FiMenu />
          </IconButton>
          <Typography
            // onClick={clickLogo}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            iOVU
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
