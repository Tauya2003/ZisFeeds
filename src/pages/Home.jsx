import { Box, Stack, Typography } from "@mui/material";
import broilerStart from "../assets/images/BRANCH LAYOUT BROILER.png";
import TestimonialCard from "../components/TestimonialCard";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";

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
        component={"section"}
        sx={{
          bgcolor: "#66bb6a",
          mt: "28px",
          px: "20px",
          gap: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "35px",
          width: { xs: 332 },
          height: { xs: 221 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          OUR VISION
        </Typography>

        <Typography
          sx={{
            color: "#e8f5e9",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 9,
            fontWeight: 500,
            textAlign: "center",
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
            fontSize: 13,
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
            fontSize: 8,
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

      <Box sx={{ width: "100%", height: 321, bgcolor: "#66bb6a", px:2}}>
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
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            pt: "7px",
            mt: "30px",
          }}
        >
          TESTIMONIALS
        </Typography>

        <Stack
          direction={"row"}
          gap={"20px"}
          pl={"20px"}
          pb={"50px"}
          sx={{ width: "100%", overflowX: "auto" }}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
