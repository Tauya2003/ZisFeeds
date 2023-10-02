import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import brands from "../assets/json/brands.json";
import { useEffect, useState } from "react";
import image from "../assets/images/ads/image2.png";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Brand = () => {
  const { brand } = useParams();
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const currentBrand = brands.find((item) => item.id === brand);

    currentBrand && setBrandData(currentBrand);
  }, [brand]);

  if (!brandData) return <div>Brand not found</div>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 3,
      }}
    >
      <Box sx={{ width: 375, mb: "26px" }}>
        <img src={image} alt="brand banner" style={{ width: "100%" }} />
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
