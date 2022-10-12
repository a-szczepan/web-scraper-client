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
});
