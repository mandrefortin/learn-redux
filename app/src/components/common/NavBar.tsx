import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import AbcIcon from "@mui/icons-material/Abc";
import React from "react";

//https://react.school/material-ui/appbar
//For instruction and inspiration

const NavBar = () => {
  const emptyBarHeight = "63px";
  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton> */}
          <Typography variant="h5" align="center">
            NAME
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: emptyBarHeight }}></div>
    </Box>
  );
};

export default NavBar;
