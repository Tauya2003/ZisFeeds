import { Avatar, Box, Stack, Typography } from "@mui/material";
import image from "../assets/images/placeholderAvatar.jpg";

const TestimonialCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        px: "18px",
        minWidth: 260,
        maxWidth: 260,
        height: 131,
        borderRadius: "19px",
        bgcolor: "#67b36b",
      }}
    >
      <Avatar
        src={image}
        alt="Takudzwa Hyut"
        sx={{ width: 67, height: 67, border: "solid 7px #7fd67b" }}
      />

      <Stack gap={1}>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Takudzwa Hyut
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: 6,
            fontStyle: "italic",
            textAlign: "justify",
          }}
        >
          "Since switching to their feed products, we have seen a remarkable
          improvement in the health and performance of our livestock. Our
          animals are thriving, producing better yields, and showing increased
          resistance to diseases. We couldn't be happier with the results!"
        </Typography>
      </Stack>
    </Box>
  );
};

export default TestimonialCard;
