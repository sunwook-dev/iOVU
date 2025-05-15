import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Avatar,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

const NavBar = () => {
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/landing"; // LandingPage 여부 확인
  const clickLogo = () => {
    navigate("/search");
  };
  const clicktoLogout = () => {
    navigate("/");
  };

  // 드로어 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 드로어 열기/닫기 토글 함수
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  // 드로어 내용 컴포넌트
  const drawerContent = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
               <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> 
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
      */}
      <Box
        sx={{
          m: 2,
          display: "flex",
          columnGap: 2,
          alignItems: "center",
        }}
      >
        <Avatar></Avatar>
        <Typography>아이디 또는 닉네임</Typography>
      </Box>

      <Divider />
      <List>
        {["SEARCH", "REPORT LIST"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ minHeight: 80, justifyContent: "center", mb: 6 }}
      >
        <Toolbar sx={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}>
          <Box sx={{ justifySelf: "start" }}>
            {!isLandingPage && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)} // 메뉴 아이콘 클릭시 드로어 열기
              >
                <FiMenu />
              </IconButton>
            )}
          </Box>

          <Box
            onClick={clickLogo}
            sx={{
              justifySelf: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h6" component="div">
              iOVU
            </Typography>
          </Box>
          <Box sx={{ justifySelf: "end" }}>
            <Button onClick={clicktoLogout} color="inherit">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 스와이프 가능한 드로어 컴포넌트 */}
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {drawerContent()}
      </SwipeableDrawer>
    </Box>
  );
};

export default NavBar;
