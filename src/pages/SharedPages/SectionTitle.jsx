import React from "react";

const SectionTitle = ({subheading, heading}) => {
  //--From 11.00am to 100.00pm---
  //ORDER ONLINE
  return (
    <div className="w-4/12 mx-auto text-center my-10">
      <p className="mb-2 text-yellow-500">{subheading}</p>
      <h4 className="border-y-2 text-3xl py-4">{heading}</h4>
    </div>
  );
};

export default SectionTitle;
