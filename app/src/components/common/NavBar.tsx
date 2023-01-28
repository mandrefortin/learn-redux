import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import AbcIcon from "@mui/icons-material/Abc";
import React from "react";

//https://react.school/material-ui/appbar
//For instruction and inspiration

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography>NAME</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
