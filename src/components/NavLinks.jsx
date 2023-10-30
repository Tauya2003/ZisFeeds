import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { links } from "../utils/constants";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

const NavLinks = ({ selected, setSelected }) => {
  const navigate = useNavigate();
  const [notBrands, setNotBrands] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cb, setCb] = useState();

  const handleClick = (text) => {
    setCb(),
    setIsDropdownOpen(false);
    setSelected(text);
    setNotBrands(true);
    navigate("/");
  };

  return (
    <>
      <Stack alignItems="center" direction="row" gap={1}>
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
            />
          ) : (
            <Button
              key={id}
              onClick={() => handleClick(text)}
              sx={{
                p: 0,
                m: 0,
                width: 100,
                height: 35,
                // border: "solid 2px #046a21",
                borderRadius: "14px",
                // bgcolor: text === selected ? "#046a21" : "",
                textTransform: "none",
                color: text === selected ? "#fff" : "#fff",
                transition: "all 0.2s linear",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: 2,

                ":hover": {
                  // backgroundColor: "#046a21",
                  color: "#fff",
                },
              }}
            >
              {text}
            </Button>
          )
        )}
      </Stack>
    </>
  );
};

export default NavLinks;
