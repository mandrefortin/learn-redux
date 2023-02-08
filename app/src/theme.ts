//@ts-nocheck
import { createTheme } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#430057",
    },
    secondary: {
      main: "#ff9200",
    },
  },
  status: {
    danger: orange[500],
  },
  emptyNav: {
    minHeight: "63px",
  },
});
