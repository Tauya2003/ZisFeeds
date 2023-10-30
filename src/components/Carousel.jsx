import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import image1 from "../assets/images/ads/image1.jpg";
import image2 from "../assets/images/ads/image2.jpg";
import image3 from "../assets/images/ads/image3.jpg";
import image4 from "../assets/images/ads/image4.jpg";
import image5 from "../assets/images/ads/image5.jpg";
import image6 from "../assets/images/ads/image6.jpg";
import image7 from "../assets/images/ads/image7.jpg";
import image8 from "../assets/images/ads/image8.jpg";
import image9 from "../assets/images/ads/image9.jpg";
import image10 from "../assets/images/ads/image10.jpg";
import image11 from "../assets/images/ads/image11.jpg";
import image12 from "../assets/images/ads/image12.jpg";
import image13 from "../assets/images/ads/image13.jpg";
import image14 from "../assets/images/ads/image14.jpg";
import image15 from "../assets/images/ads/image15.jpg";
import image16 from "../assets/images/ads/image16.jpg";

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
