import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Circle,
  Home,
  Info,
  Newspaper,
  Extension,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Menu,
} from "@mui/icons-material";
import { Collapse, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { brands, links } from "../utils/constants";
import logo from "../assets/Logo.svg";
import chickenBg from "../assets/images/home/chickenBg.png";

const icons = {
  Home: <Home />,
  "About Us": <Info />,
  News: <Newspaper />,
  Brands: <Extension />,
};

const MenuDrawer = ({ selected, setSelected }) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClick = (text) => {
    setSelected(text);
    navigate("/");
    setExpanded(false);
    setState({ ...state, ["right"]: false });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
        bgcolor: "#fdfdfd",
        backgroundImage: `url(${chickenBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "70%",
        backgroundPosition: "50% 90%",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          pt: "45px",
          pl: "45px",
          width: "100%",
        }}
      >
        <img src={logo} alt="logo" style={{ width: 50, height: 40 }} />
      </Box>

      <Stack alignItems="center" my={3} gap={1}>
        {links.map((text, id) =>
          text === "Brands" ? (
            <Box key={id}>
              <Button
                onClick={handleExpand}
                startIcon={<Extension />}
                endIcon={
                  !expanded ? (
                    <KeyboardArrowDown sx={{ ml: 5 }} />
                  ) : (
                    <KeyboardArrowUp sx={{ ml: 5 }} />
                  )
                }
                sx={{
                  textTransform: "none",
                  width: 225,
                  height: 35,
                  justifyContent: "left",
                  px: 4,
                  fontSize: 13,
                  fontFamily: "Poppins, sans-serif",
                  color: "#707070",
                  borderRadius: "30px",
                  gap: 1,
                }}
              >
                {text}
              </Button>
              <Collapse in={expanded} sx={{ pl: 7 }}>
                <Stack>
                  {brands.map((brand, id) => (
                    <Button
                      key={id}
                      startIcon={<Circle sx={{ width: 5, height: 5 ,mr: 1}} />}
                      onClick={() => {
                        navigate(`brand/${brand.id}`);
                        setState({ ...state, ["right"]: false });
                        setSelected(brand.name);
                      }}
                      sx={{
                        justifyContent: "left",
                        textTransform: "none",
                        color: selected === brand.name ? "#000" : "#7d7d7d",
                        fontSize: 12,
                        transition: "0.3s",
                        fontFamily: "Poppins, sans-serif",

                        borderRadius: "0",
                      }}
                    >
                      {brand.name}
                    </Button>
                  ))}
                </Stack>
              </Collapse>
            </Box>
          ) : (
            <Button
              key={id}
              startIcon={icons[text]}
              endIcon={<Circle sx={{ color: "#0000" }} />}
              onClick={() => handleClick(text)}
              sx={{
                textTransform: "none",
                width: "90%",
                height: 35,
                borderRadius: "30px",
                justifyContent: "left",
                gap: 1,
                pl: 4,
                fontSize: 13,
                color: selected === text ? "#000" : "#707070",
                bgcolor: selected === text ? "#efefef" : undefined,
                transition: "all 0.2s linear",
                fontFamily: "Poppins, sans-serif",

                ":hover": {
                  bgcolor: "#707070",
                },
              }}
            >
              {text}
            </Button>
          )
        )}
      </Stack>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Menu sx={{ color: "#6bbc6f" }} onClick={toggleDrawer("right", true)} />
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MenuDrawer;
