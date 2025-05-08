import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import { Container } from "@mui/material";

const Login = () => {
  return (
    <Container sx={{ width: "1000px", display: "flex" }}>
      <CommonTitle>로그인</CommonTitle>
    </Container>
  );
};
export default Login;
