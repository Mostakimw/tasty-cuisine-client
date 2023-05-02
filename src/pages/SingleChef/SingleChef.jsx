import React from "react";

const SingleChef = ({ chef }) => {
  console.log(chef);
  const { chef_name, chef_picture, likes, num_of_recipes, years_of_exp } = chef;
  return (
    <>
      <div className="border-2 rounded-md col-span-4">
        <div className=" text-left p-4">
          <img
            src="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/10/09/Sat-Bains_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2R0QqM06sRPpbYbf7C3kqhM.png?imwidth=680"
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div>
            <h1 className="text-4xl font-bold my-4">{chef_name}</h1>
            <p className="mtext-secondary my-2">
              Years of Experience: {years_of_exp}
            </p>
            <p className="mtext-secondary">
              Number of Recipes: {num_of_recipes}
            </p>
            <p className="mtext-secondary my-2">Total Likes: {likes}</p>
            <button className="border-2 border-[#1c5c7c] py-3 px-7 rounded-md font-bold mt-3">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
