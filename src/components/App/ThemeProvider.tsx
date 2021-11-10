import * as React from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";
import "date-fns";
import { ResetStylesheet, AppCss } from "../../mainStyles";

export default function ThemeProvider({ children }) {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: "#2387de",
          light: "#6ec6ff",
          dark: "#0069c0",
          contrastText: "#fff",
        },
        // secondary: {
        //   main: "#d32f2f",
        //   light: "#ff6659",
        //   dark: "#9a0007",
        //   contrastText: "#fff",
        // },
      },
    },
    esES
  );
  return (
    <>
      <ResetStylesheet />
      <AppCss />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
}
