import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import image1 from "../assets/images/ads/image1.png";
import image2 from "../assets/images/ads/image2.png";
import image3 from "../assets/images/ads/image3.jpg";
import image4 from "../assets/images/ads/image4.jpg";
import image5 from "../assets/images/ads/image5.jpg";
import image6 from "../assets/images/ads/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      bullets={false}
      //   style={{height: 100}}
    >
      {images.map((image, index) => (
        <div key={index} data-src={image} />
      ))}
    </AutoplaySlider>
  );
};

export default Carousel;
