import React from "react";
import SectionTitle from "./SharedPages/SectionTitle";
import featuredImg from "../../src/assets/featured.jpg";
import './featured.css';

const Featured = () => {
  return (
    <div className="my-12 featured-section py-8 text-white">
      <section className="mt-5">
        <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"} />
     
      <div className="md:flex justify-center items-center gap-5 md:p-8 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <p className="text-xl font-medium py-2">November 2023</p>
          <h4 className="text-2xl font-bold py-2">WHERE CAN I GET SOME ?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            dolore praesentium maiores atque iusto totam accusantium voluptas
            adipisci suscipit et.
          </p>
          <div className="pt-5">
            <button className="btn btn-outline border-0 border-b-2">
              Read More
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Featured;
