import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import { Container } from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate("/login");
  };
  return (
    <>
      <Container sx={{ width: "1000px", display: "flex" }}>
        <CommonTitle>Main Page</CommonTitle>
        <CommonButton onClick={clickBtn}> ssss</CommonButton>
      </Container>
    </>
  );
};
export default Main;
