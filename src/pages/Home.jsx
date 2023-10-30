import { Box, Stack, Typography } from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Stack alignItems={"center"} pb={5} width={"100vw"}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // height: { lg: 362 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            zIndex: 1000,
            boxSizing: "border-box",
            backgroundColor: "#000",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
          }}
        />
        <Carousel />
      </Box>

      <Box id="vision" />

      <Box
        component={"section"}
        sx={{
          bgcolor: "#66bb6a",
          mt: { xs: "55px", sm: "60px", lg: "72px" },
          px: "20px",
          gap: { xs: 1, sm: 4, lg: 2 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: { xs: "35px", lg: "77px", xl: "81px" },
          width: { xs: 332, sm: 630, lg: 1034, xl: 1466.98 },
          height: { xs: 221, sm: 325, lg: 316, xl: 350 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 20, sm: 26, lg: 38 },
            fontWeight: 700,
          }}
        >
          OUR VISION
        </Typography>

        <Typography
          sx={{
            color: "#e8f5e9",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 9, sm: 13, xl: 16 },
            fontWeight: 500,
            textAlign: "center",
            width: { sm: 542, lg: 904, xl: 996.62 },
          }}
        >
          Welcome to our world of agricultural feed production, where quality
          and sustainability meet nourishment. As a leading provider in the
          industry, we are committed to delivering exceptional feed products
          that optimize animal health, performance, and overall productivity.
          With a focus on innovation, rigorous quality control, and a deep
          understanding of animal nutrition, we are your trusted partner in
          cultivating healthy livestock and maximizing your farming operations'
          success. Experience the difference of our premium feed solutions and
          unlock the full potential of your agricultural endeavors.
        </Typography>
      </Box>

      <Box
        component={"section"}
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          id="products"
          sx={{
            mt: { xs: "42px", lg: "58px" },
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 13, sm: 18.75, lg: 26.72, xl: 30.72 },
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          OUR BRANDS
        </Typography>

        <Typography
          sx={{
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 8, sm: 11.52, lg: 15.63 },
            width: { sm: 560, lg: 793.51, xl: 1098.55 },
            fontStyle: "italic",
            textAlign: "center",
            mx: 5,
            pb: { xs: "30px", lg: "85px" },
          }}
        >
          Leveraging state-of-the-art technology, we produce nutritionally
          balanced and high-quality feed that meets the dietary needs of
          livestock, ensuring optimal growth and health.Tailored to your
          livestock's specific needs, our team can formulate custom blends that
          cater to unique dietary requirements, maximizing productivity and
          overall animal health.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: { md: "grid" },
          placeContent: { md: "center" },
          height: { xs: 321, sm: 504 },
          bgcolor: "#66bb6a",
          px: 2,
        }}
      >
        <Accordion />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <Typography
          sx={{
            borderTop: { xs: "solid 4px #4c554e", lg: "solid 8px #4c554e" },
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 13, sm: 18, lg: 25.36, xl: 30.98 },
            fontWeight: 700,
            textTransform: "uppercase",
            width: { sm: 190, lg: 248 },
            textAlign: "center",
            pt: "7px",
            mt: { xs: "30px", sm: "40" },
          }}
        >
          TESTIMONIALS
        </Typography>

        <Stack
          direction={"row"}
          gap={{ xs: "20px", xl: "40px" }}
          pl={"20px"}
          pb={"30px"}
          sx={{ width: "100%", overflowX: "auto" }}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Stack>
      </Box>

      <Footer />
    </Stack>
  );
};

export default Home;
