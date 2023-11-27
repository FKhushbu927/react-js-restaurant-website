import React from "react";
import SectionTitle from "./SharedPages/SectionTitle";
import featuredImg from "../../src/assets/featured.jpg";
// import imgg from '../../src/assets/featuredimg.jpg'

const Featured = () => {
  return (
    <div className="my-12">
      <section>
        <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"} />
      </section>
      <div className="md:flex justify-center items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>November 2023</p>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            dolore praesentium maiores atque iusto totam accusantium voluptas
            adipisci suscipit et.
          </p>
          <div className="pt-5">
            <button className="btn btn-outline border-b-2 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
