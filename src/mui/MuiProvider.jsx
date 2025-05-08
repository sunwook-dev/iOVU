import React from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
// import { StylesProvider, createGenerateClassName } from "@mui/styles";
import getColorTheme from "./color";
// import { ReactNode } from "react";
import { useMemo } from "react";

// const generateClassName = createGenerateClassName({
//   productionPrefix: "c",
// });

const MuiProvider = ({ children }) => {
  const theme = createTheme(getColorTheme());
  return (
    // <StylesProvider generateClassName={generateClassName} injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </StylesProvider>
  );
};

export default MuiProvider;
