import { createTheme } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: ["Karla", "sans-serif"].join(","),
  },
});
