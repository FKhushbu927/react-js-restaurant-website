import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="md:flex space-x-5 my-5 px-2">
      <img  style={{borderRadius: '0px 150px 150px 150px'}} src={image} alt="" className="w-[200px]" />
      <div className="bg-green-300 flex flex-col items-start justify-start ">
    
        <h3 className="uppercase">{name}------</h3>
        <p>{recipe}</p>
      
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
