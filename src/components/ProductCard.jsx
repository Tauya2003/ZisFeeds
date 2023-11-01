import { Box, Button, Stack, Typography } from "@mui/material";
import { products } from "../utils/allProducts";
import ImageLoader from "./ImageLoader";
import { useState } from "react";
import ReadMoreModal from "./ReadMoreModal";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

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
        <ImageLoader
          src={products[product?.image]?.url}
          hash={products[product?.image]?.hash}
          alt={product?.name}
          height={152}
          width={100}
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
            color: "#5d635e",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 10,
            fontWeight: 400,
            width: 153,
            lineHeight: "14px",
          }}
        >
          {product?.description?.slice(0, 350)}...{" "}
          <Box
            component={"span"}
            onClick={() => setOpen(true)}
            sx={{
              color: "#046a21",
              fontWeight: 600,
              userSelect: "none",
              cursor: "pointer",
            }}
          >
            read more
          </Box>
          <ReadMoreModal
            open={open}
            handleClose={() => setOpen(false)}
            product={product}
          />
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProductCard;
