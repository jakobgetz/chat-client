import { createTheme } from "@material-ui/core";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#006064",
    },
    secondary: {
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 600
  },
});
