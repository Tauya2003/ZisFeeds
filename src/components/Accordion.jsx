import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";

import image1 from "../assets/images/brands/Chicken/Road Runner Breeder Mash.png";
import image5 from "../assets/images/brands/Pigs/BOAR&SOW.png";
import image3 from "../assets/images/brands/Pigs/PIG CREEP.png";
import image4 from "../assets/images/brands/Chicken/Broiler Starter.png";
import image2 from "../assets/images/brands/Rabbit/Rabbit Pallet.png";

const cards = [image1, image2, image3, image4, image5];

const Accordion = () => {
  const [active, setActive] = useState(2);

  return (
    <Box component={"section"} sx={{ display: "flex", gap: "5px" }}>
      {cards.map((card, index) => (
        <Box
          component={"article"}
          key={index}
          onClick={() => setActive(index)}
          sx={{
            mt: { xs: "65px", sm: 1.5 },
            position: "relative",
            overflow: "hidden",
            bgcolor: active !== index && "#fff",
            width:
              active === index ? { xs: 265, sm: 350 } : { xs: 60, sm: 100 },
            height: { xs: 200, sm: 478.46 },
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-end",
            opacity: active === index ? 1 : 0.9,
            transition: "0.5s",
            boxShadow: "0px 0 10px #046a2150",
          }}
        >
          <img
            src={card}
            alt=""
            style={{
              position: "absolute",
              zIndex: 0,
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
              height: "100%",
              filter: "grayscale(0.5)",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 400,
              zIndex: 1,
              opacity: active === index ? 1 : 0,
              visibility: active === index ? "visible" : "hidden",
              p: "100px 0 2px 2px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              backgroud:
                "linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 80%)",
              transition: "0.25s",
            }}
          >
            <IconButton>
              <Visibility sx={{ color: "#046a21" }} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
