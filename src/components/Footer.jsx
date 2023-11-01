import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/Logo.svg";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Footer = () => {
  function handleClick(e, hash) {
    e.preventDefault();

    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const topOffset =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  }

  return (
    <Box
      component={"footer"}
      sx={{
        borderTop: "1px solid #0002",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "75vw",
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <Stack
          direction={"row"}
          gap={{ xs: "31px", sm: "90px" }}
          alignItems={"center"}
        >
          <img src={logo} alt="zisfeeds logo" style={{ width: 35 }} />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={{ xs: "22px", sm: "87px", bgcolor: 'green', width: '100%' }}
          >
            {/* Vision Link */}
            <MuiLink
              style={{ textDecoration: "none" }}
              onClick={(e) => handleClick(e, "#vision")}
            >
              <Typography
                sx={{
                  color: "rgba(76, 85, 78, 0.58)",
                  fontFamily: "Poppins, sans-sarif",
                  fontSize: 9,
                  fontWeight: 700,

                  ":hover": {
                    color: "#4c554e",
                  },
                }}
              >
                Vision
              </Typography>
            </MuiLink>

            {/* Products Link */}
            <MuiLink
              style={{ textDecoration: "none" }}
              onClick={(e) => handleClick(e, "#products")}
            >
              <Typography
                sx={{
                  color: "rgba(76, 85, 78, 0.58)",
                  fontFamily: "Poppins,sans-sarif",
                  fontSize: 9,
                  fontWeight: 600,
                  cursor: "pointer",

                  ":hover": {
                    color: "#4c554e",
                  },
                }}
              >
                Products
              </Typography>
            </MuiLink>

            {/* Contact Us Link */}
            <Link
              to="https://api.whatsapp.com/send?phone=+263779662088"
              target="_blank"
              style={{ display: "flex", textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "rgba(76, 85, 78, 0.58)",
                  fontFamily: "Poppins,sans-sarif",
                  fontSize: 9,
                  fontWeight: 600,

                  ":hover": {
                    color: "#4c554e",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          gap={{ xs: "46px", sm: "100px" }}
          sx={{ borderBottom: "1px solid #0002", pb: "11px" }}
        >
          <Box>
            <Typography
              sx={{
                color: "#4c554e",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 9,
                fontWeight: 700,
                mb: "5px",
              }}
            >
              Address
            </Typography>

            <Typography
              sx={{
                color: "rgba(76, 85, 78, 0.41)",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              Chikomo Industrial
            </Typography>

            <Typography
              sx={{
                color: "rgba(76, 85, 78, 0.41)",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              Chitungwiza
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#4c554e",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 9,
                fontWeight: 700,
                mb: "5px",
              }}
            >
              Phone number
            </Typography>

            <Typography
              sx={{
                color: "rgba(76, 85, 78, 0.41)",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              +263 77 966 2088
            </Typography>

            <Typography
              sx={{
                color: "rgba(76, 85, 78, 0.41)",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              +263 71 578 3553
            </Typography>
          </Box>
        </Stack>

        <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
          <Facebook sx={{ color: "#046a21", width: 20 }} />
          <Instagram sx={{ color: "#046a21", width: 20 }} />

          <Link
            to="https://api.whatsapp.com/send?phone=+263779662088"
            target="_blank"
            style={{ display: "flex" }}
          >
            <WhatsApp sx={{ color: "#046a21", width: 20 }} />
          </Link>

          <Typography
            flexGrow={1}
            sx={{
              color: "#046a21",
              FontFamily: "Poppins, sans-sarif",
              fontSize: { xs: 5, md: 10 },
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Zisfeeds
          </Typography>

          <Typography
            sx={{
              color: "#4c554e",
              FontFamily: "Poppins, sans-sarif",
              fontSize: { xs: 5, md: 10 },
              fontWeight: 700,
            }}
          >
            Copyright @ZisFeeds
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
