import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import brands from "../assets/json/brands.json";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ImageLoader from "../components/ImageLoader";

import pigBanner from "../assets/images/ads/image2.png";
import chickenBanner from "../assets/images/ads/image1.png";
import duckBanner from "../assets/images/ads/image4.png";
import medicineBanner from "../assets/images/ads/image7.png";
import rabbitBanner from "../assets/images/ads/image9.png";

const banners = {
  pig: { url: pigBanner, hash: "LkQS^KsKt7Nf-bM}WakCORs$V@R+" },
  chicken: { url: chickenBanner, hash: "LOQcqkNQ%L%O~FxcWYNLJ]I+s;wc" },
  duck: { url: duckBanner, hash: "LAL5Q?-@0JIn3@wN%3jI00skxvsq" },
  medicine: { url: medicineBanner, hash: "LFLz,G}T4TIaD*rwDOW9TKE4M|xT" },
  rabbit: { url: rabbitBanner, hash: "LRL5HdoOInWV00NYt7oL}_NtW,kB" },
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
          width: "100%",
          mb: "26px",
        }}
      >
        <ImageLoader
          src={banners[brandData.banner].url}
          hash={banners[brandData.banner].hash}
          alt={brandData.name}
          height={{ xs: 236, sm: 410 }}
        />
      </Box>

      <Box
        sx={{
          px: { xs: "34px", sm: "87px" },
          display: { lg: "flex" },
          flexDirection: "column",
          alignItems: { lg: "center" },
        }}
      >
        <Typography
          sx={{
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 17, sm: 21, lg: 23, xl: 28 },
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {brandData.name}
        </Typography>

        <Typography
          sx={{
            mt: { xs: "14px", sm: "21px" },
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 10, sm: 11, lg: 12, xl: 16 },
            fontWeight: 500,
            textAlign: { xs: "justify", lg: "center" },
            width: { xl: 1380 },
          }}
        >
          {brandData?.brief
            ? brandData?.brief
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsu suspendisse ultrices gravida. Risus commodo viverra maecenas accumsa lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}
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
            borderTop: { xs: "solid  #e8f5e9 4px", sm: "solid  #e8f5e9 8px" },
            color: "#4c554e",
            fontSize: { xs: 13, sm: 17, xl: 21 },
            fontWeight: 700,
            fontFamily: "Poppins, sans-sarif",
            textTransform: "uppercase",
            pt: "8px",
            width: { xs: 111, sm: 145, xl: 160 },
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          Products
        </Typography>

        <Stack
          gap={{ xs: 2, sm: 3, lg: 5, xl: 10 }}
          mt={3}
          direction={"row"}
          flexWrap={"wrap"}
          px={"auto"}
          justifyContent={"center"}
        >
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
