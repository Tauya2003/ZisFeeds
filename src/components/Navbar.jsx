import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import MenuDrawer from "./MenuDrawer";
import NavLinks from "./NavLinks";
import DropdownMenu from "./DropdownMenu";
import { links } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [fixed, setFixed] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const [notBrands, setNotBrands] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cb, setCb] = useState();

  const handleClick = (text) => {
    setCb(), setIsDropdownOpen(false);
    setSelected(text);
    setNotBrands(true);
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(fixed);

  return (
    <AppBar
      // className={fixed ? "fixed" : ""}
      elevation={0}
      sx={{
        position: fixed ? "fixed" : "absolute",
        bgcolor: fixed ? "#fff" : "transparent",
        color: fixed ? "#046a21" : "#fff",
        fontFamily: "Poppins, sans-serif",
        transition: "all 0.5s ease",
      }}
    >
      <Toolbar>
        <Box flexGrow={1}>
          <img src={logo} alt="Zisengwe Feeds Logo" />
        </Box>

        {isMobile ? (
          <MenuDrawer selected={selected} setSelected={setSelected} />
        ) : (
          <Stack alignItems="center" direction="row" gap={3}>
            {links.map((text, id) =>
              text === "Brands" ? (
                <DropdownMenu
                  key={id}
                  notBrands={notBrands}
                  setNotBrands={setNotBrands}
                  selected={selected}
                  setSelected={setSelected}
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  cb={cb}
                  setCb={setCb}
                  fixed={fixed}
                />
              ) : (
                <Typography
                  key={id}
                  onClick={() => handleClick(text)}
                  sx={{
                    p: 0,
                    m: 0,
                    // minWidth: 100,
                    textAlign: "center",
                    textTransform: "none",
                    transition: "all 0.5s ease",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    letterSpacing: 2,
                    cursor: "pointer",
                    borderBottom: "solid 1px transparent",

                    ":hover": {
                      color: "#dedf21",
                      borderBottom: "solid 1px",
                    },
                  }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
