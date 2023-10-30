import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { brands } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const DropdownMenu = ({
  selected,
  setSelected,
  notBrands,
  setNotBrands,
  isDropdownOpen,
  setIsDropdownOpen,
  cb,
  setCb,
  fixed,
}) => {
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setSelected(cb);
    setIsDropdownOpen(!isDropdownOpen);
    setNotBrands(false);
  };

  return (
    <Box>
      <Box
        className="sec-center"
        sx={{
          position: "relative",
          maxWidth: " 100%",
          textAlign: "center",
          zIndex: 200,
        }}
      >
        <Button
          onClick={toggleDropdown}
          endIcon={
            !isDropdownOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />
          }
          sx={{
            p: 0,
            m: 0,
            // minWidth: 100,
            color: fixed ? "#046a21" : "#fff",
            textAlign: "center",
            textTransform: "none",
            transition: "all 0.5s ease",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: 2,
            cursor: "pointer",
            borderBottom: "solid 1px transparent",
            borderRadius: 0,

            ":hover": {
              color: "#dedf21",
              borderBottom: "solid 1px",
            },
          }}
        >
          Brands
        </Button>

        {isDropdownOpen && (
          <Box
            className="section-dropdown"
            sx={{
              position: "absolute",
              width: 150,
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#046a21",
              borderRadius: "10px 0px 10px 10px",
              top: "60px",
              right: 0,
              boxShadow: "0 14px 35px 0 rgba(9, 9, 12, 0.4)",
              zIndex: 2,
              opacity: isDropdownOpen ? 1 : 0,
              pointerEvents: isDropdownOpen ? "auto" : "none",
              transform: isDropdownOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 200ms linear",
            }}
          >
            {brands.map((brand, id) => (
              <Button
                key={id}
                onClick={() => {
                  setCb(brand.name);
                  navigate(`brand/${brand.id}`);
                  setSelected(brand.name);
                  setIsDropdownOpen(false);
                }}
                sx={{
                  justifyContent: "left",
                  textTransform: "none",
                  color: "#fff",
                  fontSize: 12,
                  width: "100%",
                  transition: "0.3s",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: selected === brand.name ? 700 : 400,
                  border:
                    selected === brand.name
                      ? "2px solid #dedf21"
                      : "2px solid #0000",
                  borderRadius: "14px",

                  ":hover": {
                    // fontWeight: 700,
                    borderLeft:
                      selected !== brand.name && "dotted 2px #dedf2190",
                    borderRight:
                      selected !== brand.name && "dotted 2px #dedf2190",
                  },
                }}
              >
                {brand.name}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DropdownMenu;