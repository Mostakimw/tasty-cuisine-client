import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const SingleChef = ({ chef }) => {
  const { _id, chef_name, chef_picture, likes, num_of_recipes, years_of_exp } =
    chef;
  return (
    <>
      <div className="border-2 rounded-md col-span-4 mb-6 ">
        <div className=" text-left p-4">
          <LazyLoad threshold={0.95}>
            <img
              src={chef_picture}
              className="max-w-sm rounded-lg shadow-2xl w-full"
            />
          </LazyLoad>
          <div>
            <h1 className="text-4xl font-bold my-font mt-6 mb-3">
              {chef_name}
            </h1>
            <p className="mtext-secondary my-2">
              Years of Experience: {years_of_exp}
            </p>
            <p className="mtext-secondary">
              Number of Recipes: {num_of_recipes}
            </p>
            <p className="mtext-secondary my-2">Total Likes: {likes}</p>
            <Link to={`/chefs/${_id}`}>
              <button className="border-2 border-[#1c5c7c] py-3 px-7 rounded-md font-bold mt-3">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
