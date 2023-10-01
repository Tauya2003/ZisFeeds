import { useState } from "react";
import image1 from "../assets/images/brands/chickenGrowers.jpg";
import image2 from "../assets/images/brands/pig.png";
import image3 from "../assets/images/brands/ZIS LAYERS SACK1.jpg";
import image4 from "../assets/images/brands/chickenStarters.jpg";
import image5 from "../assets/images/brands/rabbit.jpg";
import image6 from "../assets/images/brands/ZIS ROAD RUNNERS sack3.jpg";
import { Box, Button, IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";

const cards = [image1, image2, image3, image4, image5, image6];

const Accordion = () => {
  const [active, setActive] = useState(0);

  return (
    <Box component={"section"} sx={{ display: "flex", gap: "5px" }}>
      {cards.map((card, index) => (
        <Box
          component={"article"}
          key={card}
          onClick={() => setActive(index)}
          sx={{
            mt: "65px",
            position: "relative",
            overflow: "hidden",
            bgcolor: "#fff",
            width: active === index ? 265 : 60,
            height: 200,
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-end",
            opacity: active === index ? 1 : 0.9,
            transition: "0.5s",
            boxShadow: "-2px 9px 21px rgba(0, 0, 0, 0.74)",

            // ".material-symbols-outlined": {
            //   display: "grid",
            //   placeItems: "center",
            //   width: "50px",
            //   height: 50,
            //   background: "rgb(225 225 225 / 80%)",
            //   borderRadius: "50%",
            //   fontSize: "28px",
            // },
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
              <Visibility sx={{ color: "#046a21"}} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
