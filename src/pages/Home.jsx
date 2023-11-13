import { Box, Button, Stack, Typography } from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";
import Carousel from "../components/Carousel";
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
      <Stack
        alignItems={"center"}
        pb={5}
        width={"100vw"}
        sx={{ bgcolor: "#fffffa" }}
      >
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
            flexDirection: { xs: "column", sm: "row-reverse" },
            justifyContent: { xs: "center", sm: "space-between" },
            px: { xs: "45px", sm: "51px" },
            pt: { sm: "120px" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
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
                fontWeight: 600,
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
              width: { xs: "100%", sm: "45%" },
            }}
          >
            <img
              alt=""
              src={layersFeeding}
              style={{
                height: 265,
                width: 195,
                top: 0,
                left: 0,
                maxHeight: "100%",
                objectFit: "cover",
                position: "absolute",
                maxWidth: "100%",
                overflow: "hidden",
                borderRadius: "40px",
              }}
            />
            <img
              src={pigs}
              style={{
                height: 137,
                width: 190,
                top: 183,
                bottom: 0,
                left: "100px",
                maxheight: "100%",
                objectFit: "cover",
                position: "absolute",
                maxWidth: "100%",
                overflow: "hidden",
                borderRadius: "40px",
                border: "solid 10px #fff",
              }}
            />

            <Button
              startIcon={<WhatsApp />}
              sx={{
                position: "absolute",
                top: 140,
                left: -20,
                borderRadius: "25px",
                width: 184,
                height: 61,
                color: "#25d366",
                fontSize: 18,
                fontWeight: 600,
                background: "#fff",
                textTransform: "capitalize",

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
            gap: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              mt: "65px",
              bgcolor: "#046A21",
              width: 286,
              height: 233,
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
              mx: 5,
              pb: { xs: "30px", lg: "85px" },
              mt: "30px",
            }}
          >
            Leveraging state-of-the-art technology, we produce nutritionally
            balanced and high-quality feed that meets the dietary needs of
            livestock, ensuring optimal growth and health.Tailored to your
            livestock's specific needs, our team can formulate custom blends
            that cater to unique dietary requirements, maximizing productivity
            and overall animal health.
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
        <Box
          sx={{
            width: 300,
            // height: 600,
            boxShadow: " 0 0 10px #ccc",
            borderRadius: "15px",
            p: "25px",
          }}
        >
          <Box sx={{ height: 325, display: 'grid',  placeContent: 'center' }}>
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

        {/* Why Choose Us Section */}
        <Box sx={{ bgcolor: "#f0f0f2", py: "50px", px: "60px", mt: "65px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-sarif",
              color: "#212b36",
              fontSize: 41,
              width: 223,
              fontWeight: 700,
              mb: "24px",
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-sarif",
              fontSize: 14,
              lineHeight: "24px",
              mb: "75px",
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
