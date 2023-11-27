import React, { useEffect, useState } from "react";
import SectionTitle from "./SharedPages/SectionTitle";

const Recommended = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section>
      <SectionTitle subheading={"Should Try"} heading={"CHEF RECOMMENDS"} />

      <div className="grid md:grid-cols-3 gap-6 my-12">
        {items.slice(0, 3).map((item) => (
          <div className="card w-80 bg-base-100 shadow-xl" key={item._id}>
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{item?.name}</h2>
              <p className="text-center text-sm text-slate-500 font-medium">{item?.recipe}</p>

              <div className="card-actions justify-center">
                <button className="uppercase btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
