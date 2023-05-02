import React from "react";

const Chefs = () => {
  return (
    <div className="mt-16 text-center lg:w-[1320px] mx-auto">
      <h1 className="mtext-primary">Our Chefs</h1>
      <p className="mtext-secondary my-3">
        Meet the talented chefs behind the delicious recipes on our website
      </p>
      <div className="grid grid-cols-12 gap-5 mt-10">
        <div className="border-2 rounded-md col-span-4">
          <div className=" text-left p-4">
            <img
              src="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/10/09/Sat-Bains_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2R0QqM06sRPpbYbf7C3kqhM.png?imwidth=680"
              className="max-w-sm rounded-lg shadow-2xl w-full"
            />
            <div>
              <h1 className="text-4xl font-bold my-4">Box Office News!</h1>
              <p className="mtext-secondary my-2">Years of Experience: </p>
              <p className="mtext-secondary">Number of Recipes: </p>
              <p className="mtext-secondary my-2">Total Likes: </p>
              <button className="border-2 border-[#1c5c7c] py-3 px-7 rounded-md font-bold mt-3">
                View Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
