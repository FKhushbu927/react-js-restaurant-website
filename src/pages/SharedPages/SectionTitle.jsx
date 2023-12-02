import React from "react";

const SectionTitle = ({ subheading, heading }) => {
  //--From 11.00am to 100.00pm---
  //ORDER ONLINE
  return (
    <div className="w-4/12 mx-auto text-center my-10">
      <p className="mb-2 text-yellow-500 italic">{subheading}</p>
      <h4 className="border-y-2 md:text-3xl sm:text-sm py-4 uppercase">{heading}</h4>
    </div>
  );
};

export default SectionTitle;
