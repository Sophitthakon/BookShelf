import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner: React.FC = () => {
  return (
    <Carousel>
      <div
        style={{ width: "60%", height: "200px", backgroundColor: "red" }}
      ></div>
      <div
        style={{ width: "60%", height: "200px", backgroundColor: "blue" }}
      ></div>
      <div
        style={{ width: "60%", height: "200px", backgroundColor: "green" }}
      ></div>
    </Carousel>
  );
};
