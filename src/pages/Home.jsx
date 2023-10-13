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
          width: "100%",
          height: { md: "calc(100vh -)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel />
      </Box>

      <Box
        id="vision"
        component={"section"}
        sx={{
          bgcolor: "#66bb6a",
          mt: { xs: "28px", sm: "60px" },
          px: "20px",
          gap: { xs: 1, sm: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "35px",
          width: { xs: 332, sm: 630 },
          height: { xs: 221, sm: 325 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 20, sm: 25.62 },
            fontWeight: 700,
          }}
        >
          OUR VISION
        </Typography>

        <Typography
          sx={{
            color: "#e8f5e9",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 9, sm: 12.87 },
            fontWeight: 500,
            textAlign: "center",
            width: { sm: 541.45 },
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
          sx={{
            mt: "42px",
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 13, sm: 18.75 },
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
            fontSize: { xs: 8, sm: 11.52 },
            width: { sm: 560 },
            fontStyle: "italic",
            textAlign: "center",
            mx: 5,
            pb: "30px",
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
            borderTop: "solid 4px #4c554e",
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 13, sm: 18 },
            fontWeight: 700,
            textTransform: "uppercase",
            width: { sm: 190 },
            textAlign: "center",
            pt: "7px",
            mt: {xs:"30px", sm:'40'},
          }}
        >
          TESTIMONIALS
        </Typography>

        <Stack
          direction={"row"}
          gap={"20px"}
          pl={"20px"}
          pb={"30px"}
          sx={{ width: "100%", overflowX: "auto" }}
        >
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
