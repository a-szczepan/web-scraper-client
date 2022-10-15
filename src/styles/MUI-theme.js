import { createTheme } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
