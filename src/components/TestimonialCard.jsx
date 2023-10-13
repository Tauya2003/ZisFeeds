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
        px: {xs: "18px", lg: '25px'},
        minWidth: { xs: 260, sm: 355, lg: 421.48 },
        maxWidth: { xs: 260, sm: 355, lg: 421.48 },
        height: { xs: 131, sm: 175, lg: 227.9 },
        borderRadius: { xs: "19px", lg: "34px" },
        bgcolor: "#67b36b",
      }}
    >
      <Avatar
        src={image}
        alt="Takudzwa Hyut"
        sx={{
          width: { xs: 67, lg: 100 },
          height: { xs: 67, lg: 100 },
          border: "solid 7px #7fd67b",
        }}
      />

      <Stack gap={1}>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 13, lg: 16 },
            fontWeight: 700,
          }}
        >
          Takudzwa Hyut
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Poppins, sans-sarif",
            fontSize: { xs: 6, lg: 12 },
            fontStyle: "italic",
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
