import React from "react";
import {Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CommonButton from "../component/common/CommonButton";
import CommonTitle from "../component/common/CommonTitle";


const LandingPage = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate("/login");
  };
  return (
    
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        backgroundImage: "url('/image/landing.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}    
    > 
    <Container
      sx={{
        width: "1000px",        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",                          
      }}
    >
      <section>
        <CommonTitle
          sx={{
            fontSize: 36,
            pt: "10vh"
          }}>
          AI로 검색을 혁신하세요
        </CommonTitle>                       
        <CommonTitle sx={{ fontSize: 30 }}>
          키워드 분석부터 트렌드까지, 당신의 마케팅을 더 똑똑하게
        </CommonTitle>               
        <CommonButton onClick={clickBtn}
          sx={{  
            mt: 10
          }}>
          Go to Login</CommonButton>
      </section>
      </Container>
      </Box>
  );
};

export default LandingPage;