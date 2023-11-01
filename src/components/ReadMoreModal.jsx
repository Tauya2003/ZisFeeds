import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Slider, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import ImageLoader from "./ImageLoader";
import { products } from "../utils/allProducts";

export default function ReadMoreModal({ open, handleClose, product }) {
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#046a21",
            color: "#fff",
            outline: "none",
            boxShadow: 24,
            borderRadius: "24px",
            width: { xs: 300 },
            maxHeight: { xs: "90vh" },
            py: 4,
            px: 3,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              top: 15,
              p: 0,
              color: "#dedf21",
            }}
          >
            <Close sx={{ fontSize: 20 }} />
          </IconButton>

          <Stack direction={"row"} alignItems={"center"} gap={2} my={2}>
            <ImageLoader
              src={products[product?.image]?.url}
              hash={products[product?.image]?.hash}
              alt={product?.name}
              height={100}
              width={75}
            />

            <Stack gap={"7px"}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-sarif",
                  fontSize: 17,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "19px",
                }}
              >
                {product?.lname ? product?.lname : product?.name}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-sarif",
                  fontSize: 10,
                  fontWeight: 400,
                  width: 153,
                  lineHeight: "14px",
                  //   textAlign: "justify",
                }}
              >
                {product?.description}
              </Typography>
            </Stack>
          </Stack>

          <Stack sx={{ height: "100%", overflowY: "auto" }}>
            {product?.specs?.map((slider, index) => (
              <Stack key={index} direction="row" alignItems="center" gap={1}>
                <Typography>{slider.label}</Typography>
                <Slider size="small" value={slider.value} step={1} disabled />
                <Typography>{slider.value}%</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
