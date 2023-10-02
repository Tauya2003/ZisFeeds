import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import image1 from "../assets/images/ads/image1.png";
import image2 from "../assets/images/ads/image2.png";
import image3 from "../assets/images/ads/image3.png";
import image4 from "../assets/images/ads/image4.png";
import image5 from "../assets/images/ads/image5.png";
import image6 from "../assets/images/ads/image6.png";
import image7 from "../assets/images/ads/image7.png";
import image8 from "../assets/images/ads/image8.png";
import image9 from "../assets/images/ads/image9.png";
import image10 from "../assets/images/ads/image10.jpg";
import image11 from "../assets/images/ads/image11.png";
import image12 from "../assets/images/ads/image12.png";
import image13 from "../assets/images/ads/image13.png";
import image14 from "../assets/images/ads/image14.png";
import image15 from "../assets/images/ads/image15.png";
import image16 from "../assets/images/ads/image16.png";

const images = [
  image9,
  image10,
  image1,
  image3,
  image13,
  image14,
  image4,
  image5,
  image6,
  image7,
  image8,
  image11,
  image12,
  image15,
  image16,
  image2,
];
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      bullets={false}
    >
      {images.map((image, index) => (
        <div key={index} data-src={image} />
      ))}
    </AutoplaySlider>
  );
};

export default Carousel;
