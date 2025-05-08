import React from "react";
import { Button } from "@mui/material";

const CommonButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          maxWidth: 600,
          m: 1,
        }}
      >
        내보내기
      </Button>
    </>
  );
};
export default CommonButton;
