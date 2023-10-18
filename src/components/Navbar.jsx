import {
  AppBar,
  Box,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import MenuDrawer from "./MenuDrawer";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "sticky",
        bgcolor: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Toolbar>
        <Box flexGrow={1}>
          <img src={logo} alt="Zisengwe Feeds Logo" />
        </Box>

        {isMobile ? (
          <MenuDrawer selected={selected} setSelected={setSelected} />
        ) : (
          <NavLinks selected={selected} setSelected={setSelected} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
