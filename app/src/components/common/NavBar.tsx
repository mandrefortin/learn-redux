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

export interface NavBarProps {
  title?: string;
  barBuffer?: string;
  position?: BarPositions;
  color?: "primary" | "secondary" | undefined;
}

export type BarPositions =
  | "fixed"
  | "absolute"
  | "sticky"
  | "static"
  | "relative"
  | undefined;

//https://react.school/material-ui/appbar
//For instruction and inspiration
const NavBar = (props: NavBarProps) => {
  const { title, barBuffer, position, color } = props;
  const emptyBarHeight = barBuffer ? barBuffer : "63px";
  const barPosition = position ? position : "fixed";

  return (
    <Box>
      <CssBaseline />
      <AppBar color={color} position={barPosition}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton> */}
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: emptyBarHeight }}></div>
    </Box>
  );
};

export default NavBar;
