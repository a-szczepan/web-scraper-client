import { createTheme } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: teal[800],
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      lgxl: 1390,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: ["Karla", "sans-serif"].join(","),
  },
});
