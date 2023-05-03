import React from "react";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = ({ chefs }) => {
  return (
    <div className="mt-16 text-center lg:w-[1320px] mx-auto">
      <h1 className="mtext-primary">Our Chefs</h1>
      <p className="mtext-secondary my-3">
        Meet the talented chefs behind the delicious recipes on our website
      </p>
      <div className="lg:grid grid-cols-12 gap-5 mt-10 px-3 ">
        {chefs.map((chef) => (
          <SingleChef key={chef._id} chef={chef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
