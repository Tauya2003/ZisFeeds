import React from "react";
import { Box, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { brands } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DropdownMenu = ({
  selected,
  setSelected,
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
            <KeyboardArrowDown
              style={{
                fontSize: 16,
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.5s ease",
              }}
            />
          }
          sx={{
            p: 0,
            m: 0,
            color: fixed ? "#046a21" : "#fff",
            textAlign: "center",
            textTransform: "none",
            transition: "all 0.5s ease",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "13%",
            cursor: "pointer",
            borderBottom: "solid 1px transparent",
            borderRadius: 0,

            ":hover": {
              color: "#dedf21",
              borderBottom: "solid 1px",
              bgcolor: "transparent",
            },
          }}
        >
          Brands
        </Button>

        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Box
              className="section-dropdown"
              sx={{
                position: "absolute",
                width: 150,
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px 0px 10px 10px",
                top: "60px",
                right: 0,
                boxShadow: "0 10px 10px 0 rgba(9, 9, 12, 0.4)",
                zIndex: 2,
                opacity: isDropdownOpen ? 1 : 0,
                pointerEvents: isDropdownOpen ? "auto" : "none",
                transform: isDropdownOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 200ms linear",
                backgroundColor: "#ffffff10",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(1px)",
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
                    color: "#000",
                    fontSize: 12,
                    width: "100%",
                    transition: "0.3s",
                    fontFamily: "Poppins, sans-serif",
                    borderRadius: "14px",
                    border: "solid 2px transparent",

                    ":hover": {
                      bgcolor: "transparent",
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
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default DropdownMenu;
