import { Avatar, Box, Stack, Typography } from "@mui/material";
import image from "../assets/images/placeholderAvatar.jpg";

const TestimonialCard = () => {
  return (
    <Box
      sx={{
        width: 335,
        height: 251,
        borderRadius: "16px",
        display: "flex",
        gap: "16px",
        padding: "16px",
        boxShadow: "0 0 10px #c4c4c4",
        bgcolor: "#FFF",
        mb: "44px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "grid",
          alignItems: "center",
        }}
      >
        <Avatar
          src={image}
          alt={"Hannah Chimuti"}
          sx={{ width: 112, height: 127 }}
        />
      </Box>

      <Stack gap={"12px"} justifyContent={'center'}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-sarif",
            fontSize: 20,
            fontWeight: 600,
            width: 153,
            color: "#3d3d3d",
          }}
        >
          Hannah Chimuti
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-sarif",
            fontSize: 12,
            color: "#3d3d3d",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt tellus lacus. Duis quis mi ante. Fusce sed arcu euismod.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-sarif",
            fontSize: 12,
            color: "#525252",
          }}
        >
          May 8, 2020
        </Typography>
      </Stack>
    </Box>
  );
};

export default TestimonialCard;
