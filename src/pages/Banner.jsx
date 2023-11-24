import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../src/assets/banner1.jpg";
import Banner2 from "../../src/assets/banner2.jpg";
import Banner3 from "../../src/assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="w-full  mx-auto text-center">
      <Carousel>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
