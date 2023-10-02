import { Box, Button, Stack, Typography } from "@mui/material";
import image from "../assets/images/brands/pig.png";

import { products } from "./allProducts";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        width: 332,
        height: 269,
        borderRadius: "40px",
        boxShadow: "0 0 10px #046a2120",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Stack sx={{ width: 104, alignItems: "center", gap: "10px" }}>
        <img
          src={products[product.image]}
          alt={product.name}
          style={{ width: "100%" }}
        />
        <Button
          sx={{
            width: 56,
            height: 17,
            borderRadius: 15,
            bgcolor: "#046a21",
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 6,
            fontWeight: 600,
            textTransform: "uppercase",
            transition: "0.3s",

            ":hover": {
              bgcolor: "#fff",
              color: "#046a21",
              borderLeft: "solid 1px #046a21",
              borderRight: "solid 1px #046a21",
            },
          }}
        >
          BUY NOW
        </Button>
      </Stack>

      <Stack gap={"7px"}>
        <Typography
          sx={{
            color: "#4c554e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 17,
            fontWeight: 700,
            textTransform: "uppercase",
            maxWidth: 153,
            lineHeight: "19px",
          }}
        >
          {product?.name}
        </Typography>

        <Typography
          sx={{
            color: "#c1cac3",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 10,
            fontWeight: 400,
            width: 153,
            lineHeight: "14px",
          }}
        >
          {product?.description}$
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProductCard;
