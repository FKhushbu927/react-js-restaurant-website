import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import slider1 from '../../src/assets/slider1.jpg'
import slider2 from '../../src/assets/slider2.jpg'
import slider3 from '../../src/assets/slider3.jpg'
import slider4 from '../../src/assets/slider4.jpg'
import slider5 from '../../src/assets/slider5.jpg'


const Category = () => {
  return (
    <div className="w-5/6 mx-auto border my-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Category;
