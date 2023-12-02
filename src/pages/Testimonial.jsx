import React, { useEffect, useState } from "react";
import SectionTitle from "./SharedPages/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subheading={"--What our customer Say--"}
        heading={"Testimonials"}
      />

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-16 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  className="mb-12"
                />
                <FaQuoteLeft className="text-5xl text-slate-500" />
                <p className="text-xl text-slate-600 font-sans font-medium my-2">
                  {review.details}
                </p>
                <h4 className="text-3xl text-slate-700">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
