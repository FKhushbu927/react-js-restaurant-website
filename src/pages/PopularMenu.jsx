import React, { useEffect, useState } from "react";
import SectionTitle from "./SharedPages/SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [itemMenu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subheading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-3">
        {itemMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="my-8 w-full mx-auto text-center">
        <button className="btn btn-outline  border-0 border-b-2">View Full Menu</button>
      </div>

      <div className="my-5 bg-gray-950">
        <h2 className="text-center text-white text-3xl font-bold py-20">Call Us: +49 000XXX XXXX</h2>
      </div>
    </section>
  );
};

export default PopularMenu;
