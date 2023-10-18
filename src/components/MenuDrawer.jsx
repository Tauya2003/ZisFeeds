import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { KeyboardArrowDown, KeyboardArrowUp, Menu } from "@mui/icons-material";
import { Collapse, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { brands, links } from "../utils/constants";

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
        bgcolor: "#046a21",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack alignItems="center" my={5} gap={1}>
        {links.map((text, id) =>
          text === "Brands" ? (
            <Box key={id}>
              <Button
                onClick={handleExpand}
                endIcon={
                  !expanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />
                }
                sx={{
                  textTransform: "none",
                  width: 182,
                  height: 35,
                  justifyContent: "space-between",
                  px: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                }}
              >
                {text}
              </Button>
              <Collapse in={expanded} sx={{ pl: 4.75 }}>
                <Stack>
                  {brands.map((brand, id) => (
                    <Button
                      key={id}
                      onClick={() => {
                        navigate(`brand/${brand.id}`);
                        setState({ ...state, ["right"]: false });
                        setSelected(brand.name);
                      }}
                      sx={{
                        justifyContent: "left",
                        textTransform: "none",
                        color: "#fff",
                        fontSize: 10,
                        transition: "0.3s",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: selected === brand.name ? 700 : 400,
                        border:
                          selected === brand.name
                            ? "2px solid #dedf21"
                            : "2px solid #0000",
                        borderRadius: "14px",
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
              onClick={() => handleClick(text)}
              sx={{
                textTransform: "none",
                width: 182,
                height: 35,
                borderRadius: "14px",
                justifyContent: "left",
                pl: 4,
                fontSize: 13,
                fontWeight: 700,
                color: selected === text ? "#046a21" : "#fff",
                bgcolor: selected === text ? "#dedf21" : undefined,
                transition: "all 0.2s linear",
                fontFamily: "Poppins, sans-serif",

                ":hover": {
                  bgcolor: "#dedf21",
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
