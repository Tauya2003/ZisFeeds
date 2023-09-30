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

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const myTabs = ["Home", "About Us", "News", "Contact Us", "Brands"];

  const CustomeTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "#dedf21",
    },
  });

  const CustomTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    color: "#6bbc6f",
    transition: "ease-in-out 0.9s",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,

    "&.Mui-selected": {
      color: "#dedf21",
    },
  }));

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
          <MenuDrawer />
        ) : (
          <Stack>
            <CustomeTabs value={value} onChange={(e, value) => setValue(value)}>
              {/* <CustomTab label="Home" />
              <CustomTab label="About Us" />
              <CustomTab label="Brands" />
              <CustomTab label="News" />
              <CustomTab label="Contact Us" /> */}

              {myTabs.map((item, id) => (
                <CustomTab key={id} label={item} />
              ))}
            </CustomeTabs>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
