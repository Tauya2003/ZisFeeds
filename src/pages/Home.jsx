import { Box, Button, Stack, Typography } from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import bg from "../assets/images/bgshapes.png";
import banner from "../assets/images/ads/pigBanner.png";
import layersFeeding from "../assets/images/home/layers-feeding.jpg";
import pigs from "../assets/images/home/pigs.jpg";
import rectangle from "../assets/images/rectangle.png";
import { motion } from "framer-motion";
import { CircleOutlined, WhatsApp } from "@mui/icons-material";
import { products } from "../utils/allProducts";
import pigFeed from "../assets/images/brands/Pigs/PIG CONCENTRATE.png";
import ImageLoader from "../components/ImageLoader";
import chickenBg from "../assets/images/home/chickenBg.png";

const description =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impeditn dolores pariatur nam beatae ut tempora minima cum velit rem. Corporis veritatis possimus voluptas esse ea eum vero eligendi, deserunt porro!";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack alignItems={"center"} pb={5} width={"100vw"}>
        <Box
          component={"section"}
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 340 },
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Carousel /> */}
        </Box>

        <Box
          component={"section"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            flexDirection: { xs: "row", sm: "row-reverse" },
            justifyContent: { xs: "center", sm: "space-between" },
            px: { xs: "45px", sm: 5 },
            pt: { sm: "70px" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "calc(50% - 40px)" } }}>
            <Typography
              sx={{
                color: "#4c554e",
                fontFamily: "Poppins, sans-sarif",
                fontSize: { xs: 12 },
                textTransform: "uppercase",
                letterSpacing: 12,
                fontWeight: "regular",
                mt: "37px",
              }}
            >
              5 years Experience
            </Typography>

            <Typography
              sx={{
                color: "#43a047",
                fontFamily: "Poppins, sans-sarif",
                fontSize: { xs: 43 },
                fontWeight: 900,
                width: 222,
                lineHeight: 1,
                my: "24px",
              }}
            >
              OUR VISION
            </Typography>

            <Typography
              sx={{
                color: "#4c554e",
                fontFamily: "Poppins, sans-sarif",
                fontSize: { xs: 16.91 },
                fontWeight: 500,
              }}
            >
              Welcome to our world of agricultural feed production, where
              quality and sustainability meet nourishment. As a leading provider
              in the industry, we are committed to delivering exceptional feed
              products that optimize animal health, performance, and overall
              productivity. With a focus on innovation, rigorous quality
              control, and a deep understanding of animal nutrition, we are your
              trusted partner in cultivating healthy livestock and maximizing
              your farming operations' success. Experience the difference of our
              premium feed solutions and unlock the full potential of your
              agricultural endeavors.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: { xs: "40px", sm: "60px" },
              position: "relative",
              height: "330px",
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <Box
              sx={{
                height: { xs: 265, sm: 290, lg: 335 },
                width: { xs: 195, sm: 250, lg: 290 },
                top: 0,
                left: { xs: 0, sm: "10%", lg: "20%" },
                position: "absolute",
                overflow: "hidden",
                borderRadius: "40px",
                background: `url(${layersFeeding}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Box
              sx={{
                height: { xs: 137, sm: 181, lg: 235 },
                width: { xs: 190, sm: 247, lg: 282 },
                top: 183,
                bottom: 0,
                left: { xs: "100px", sm: "calc(10% + 100px)", lg: "calc(20% + 100px)" },
                position: "absolute",
                overflow: "hidden",
                borderRadius: { xs: "40px", sm: "50px" },
                border: "solid 10px #fff",
                background: `url(${pigs}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Button
              startIcon={
                <WhatsApp sx={{ width: { sm: 40 }, height: { sm: 40 } }} />
              }
              sx={{
                position: "absolute",
                top: 140,
                left: { xs: -20, sm: "calc(10% - 20px)", lg: "calc(20% - 20px)" },
                borderRadius: "25px",
                width: { xs: 184, sm: 280 },
                height: { xs: 61, sm: 80 },
                color: "#25d366",
                fontSize: { xs: 18, sm: 23 },
                fontWeight: 600,
                background: "#fff",
                textTransform: "capitalize",
                boxShadow: "-7px 5px 10px #0005",

                "&:hover": {
                  background: "#43a047",
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* OUr Brands Section */}
        <Box
          component={"section"}
          sx={{
            mt: { lg: "30px" },
            gap: 1,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              mt: "65px",
              bgcolor: "#046A21",
              width: { xs: 286, sm: "50%" },
              height: { xs: 233, sm: 284 },
              display: "grid",
              placeContent: "center",
            }}
          >
            <Typography
              id="products"
              sx={{
                color: "#fff",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 40.72,
                width: 195,
                lineHeight: 1.2,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              OUR BRANDS
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#4c554e",
              fontFamily: "Poppins, sans-sarif",
              fontSize: 15.63,
              fontWeight: 500,
              fontStyle: "italic",
              width: { sm: "calc(50% - 90px)", lg: "calc(50% - 170px)" },
              mx: { xs: 5, sm: 0 },
              mr: { sm: 5, lg: 7 },
              pb: { xs: "30px", lg: "85px" },
              mt: { xs: "30px", sm: "10%" },
            }}
          >
            Leveraging state-of-the-art technology, we produce nutritionally
            balanced and high-quality feed that meets the dietary needs of
            livestock, ensuring optimal growth and health.
          </Typography>
        </Box>

        {/* <Box
          sx={{
            width: "100%",
            display: { md: "grid" },
            placeContent: { md: "center" },
            height: { xs: 321, sm: 504 },
            background: `url(${rectangle}) no-repeat center center #66bb6a`,
            backgroundSize: "cover",
            px: 2,
          }}
        >
          <Accordion />
        </Box> */}

        {/* Slider Section */}
        <Box sx={{ position: "relative", mt: { sm: -10 } }}>
          <Box
            sx={{
              width: 300,
              // height: 600,
              boxShadow: " 0 0 10px #0009",
              bgcolor: "#fff",
              borderRadius: "15px",
              p: "25px",
            }}
          >
            <Box sx={{ height: 325, display: "grid", placeContent: "center" }}>
              <ImageLoader
                src={pigFeed}
                hash={"LUNdaWNMT#t1p2xaVsR$lBIo#Q$+"}
                alt={"pig-feed"}
                height={265}
                width={130}
              />
            </Box>

            <Typography
              sx={{
                fontSize: 27.63,
                fontWeight: 600,
                textAlign: "left",
                mb: "20px",
              }}
            >
              Pig Feed
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-sarif",
                color: "#95a098",
                fontSize: 17.63,
                fontWeight: 500,
              }}
            >
              {description.slice(0, 150)}...
            </Typography>

            <Button
              endIcon={
                <CircleOutlined
                  sx={{ width: "30px", height: "30px", ml: "20px" }}
                />
              }
              sx={{
                color: "#fff",
                fontFamily: "Poppins, sans-sarif",
                fontSize: 17.48,
                fontWeight: 500,
                bgcolor: "#000",
                textTransform: "capitalize",
                borderRadius: "50px",
                width: 163.6,
                height: 50,
                mt: "20px",

                "&:hover": {
                  bgcolor: "#000",
                },
              }}
            >
              Button
            </Button>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#f0f0f2",
            py: "50px",
            px: "60px",
            mt: "65px",
            pl: { sm: "105px", lg: "227px" },
            pt: { sm: "65px" },
            backgroundImage: `url(${chickenBg})`,
            backgroundSize: { xs: "55%", sm: "75%", lg: "40%" },
            backgroundPosition: {
              xs: "120% 20%",
              sm: "220% 20%",
              lg: "120% 20%",
            },
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-sarif",
              color: "#212b36",
              fontSize: { xs: 41, lg: 64 },
              width: { xs: 223, sm: "auto" },
              fontWeight: 700,
              mb: "24px",
              lineHeight: 1.2,
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-sarif",
              fontSize: { xs: 14, lg: 16 },
              lineHeight: "24px",
              mb: "50px",
              width: { sm: "49%", lg: "69%" },
            }}
          >
            We provide top-quality, nutrient-rich products that boost crop
            yields and promote healthy livestock. Our commitment to excellence
            ensures your farm's success. Trust us for reliable, sustainable, and
            cost-effective solutions tailored to your needs.
          </Typography>
        </Box>

        {/* User Testimonials */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
            mt: "65px",
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
              textAlign: "center",
              width: { sm: 190, lg: 248 },
              pt: "7px",
              mt: { xs: "30px", sm: "40" },
            }}
          >
            TESTIMONIALS
          </Typography>

          {/* <Stack
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
          </Stack> */}

          <TestimonialCard />
        </Box>

        <Footer />
      </Stack>
    </motion.div>
  );
};

export default Home;
