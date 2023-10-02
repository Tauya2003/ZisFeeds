import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import brands from "../assets/json/brands.json";
import { useEffect, useState } from "react";
import pigBanner from "../assets/images/ads/image2.png";
import chickenBanner from "../assets/images/ads/image1.png";
import duckBanner from "../assets/images/ads/image4.png";
import medicineBanner from "../assets/images/ads/image7.png";
import rabbitBanner from "../assets/images/ads/image9.png";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const banners = {
  pig: pigBanner,
  chicken: chickenBanner,
  duck: duckBanner,
  medicine: medicineBanner,
  rabbit: rabbitBanner,
};

const Brand = () => {
  const { brand } = useParams();
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const currentBrand = brands.find((item) => item.id === brand);

    currentBrand && setBrandData(currentBrand);
  }, [brand]);

  if (!brandData)
    return (
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ color: "#046a21" }} />
      </Box>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 3,
      }}
    >
      <Box
        sx={{
          width: 375,
          mb: "26px",
        }}
      >
        <img
          src={banners[brandData.banner]}
          alt="brand banner"
          style={{ width: "100%" }}
        />
      </Box>

      <Box sx={{ px: "34px" }}>
        <Typography
          sx={{
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 17,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {brandData.name}
        </Typography>

        <Typography
          sx={{
            mt: "14px",
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 10,
            fontWeight: 500,
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 5,
        }}
      >
        <Typography
          sx={{
            borderTop: "solid  #e8f5e9 6px",
            color: "#4c554e",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "Poppins, sans-sarif",
            textTransform: "uppercase",
            pt: "8px",
            width: 111,
            textAlign: "center",
          }}
        >
          Products
        </Typography>

        <Stack gap={2} mt={3}>
          {brandData.products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </Stack>
      </Box>

      <Footer />
    </Box>
  );
};

export default Brand;
