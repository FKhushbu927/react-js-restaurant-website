import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="md:flex space-x-5 ">
      <img
        style={{ borderRadius: "0px 150px 150px 150px" }}
        src={image}
        alt=""
        className="w-[180px] "
      />

      <div className="flex flex-col justify-start items-start ">
        <h3 className="uppercase my-2">{name}------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
