import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ChefDetails = () => {
  const details = useLoaderData();
  const {
    _id,
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    years_of_exp,
    description,
    recipes,
  } = details;
  return (
    <div className="mt-10">
      <h1 className="mtext-primary text-center text-gray-800">
        A Taste of <span className="text-[#c84c30]">{chef_name}</span>{" "}
        Expertise: Chef Profile
      </h1>
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row space-x-6">
          <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="py-3 text-[#757575] max-w-sm">
              <span className="font-bold text-gray-800">Description/Bio: </span>
              {description}
            </p>
            <p className="py-3 text-[#757575]">
              <span className="font-bold text-gray-800">
                Number of Recipes:
              </span>{" "}
              {num_of_recipes}
            </p>
            <p className="py-3 text-[#757575]">
              <span className="font-bold text-gray-800">
                Year of Experience:
              </span>{" "}
              {""}
              {years_of_exp}
            </p>
          </div>
        </div>
      </div>
      {/* // ! details of recipes */}
      <div>
        <h1 className="text-3xl text-gray-800 font-bold text-center my-8">
          Recipes Details
        </h1>
        <div className="overflow-x-auto w-[1250px] mx-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Recipe Name</th>
                <th>Ingredients</th>
                <th>Cooking Method</th>
                <th>Rating</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="text-xl font-semibold text-gray-800 my-font">
                  {recipes[0].name}
                </td>
                <td>
                  <ul>
                    <li>{recipes[0]?.ingredients[0]}</li>
                    <li>{recipes[0]?.ingredients[1]}</li>
                    <li>{recipes[0]?.ingredients[2]}</li>
                    <li>{recipes[0]?.ingredients[3]}</li>
                    <li>{recipes[0]?.ingredients[4]}</li>
                  </ul>
                </td>
                <td className="max-w-xs">
                  <p className="w-full whitespace-pre-line">
                    {recipes[0].method}
                  </p>
                </td>
                <td className="text-[#c84c30] font-semibold">
                  {recipes[0].rating}
                </td>
                <td>
                  <button className="btn btn-outline btn-error hover:text-white">
                    <FaHeart className="mr-2 inline-block text-[#c84c30] text-xl " />
                    <span>Add to Favourite</span>
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="text-xl font-semibold text-gray-800 my-font">
                  {recipes[1].name}
                </td>
                <td>
                  <ul>
                    <li>{recipes[1]?.ingredients[0]}</li>
                    <li>{recipes[1]?.ingredients[1]}</li>
                    <li>{recipes[1]?.ingredients[2]}</li>
                    <li>{recipes[1]?.ingredients[3]}</li>
                    <li>{recipes[1]?.ingredients[4]}</li>
                  </ul>
                </td>
                <td className="max-w-xs">
                  <p className="w-full whitespace-pre-line">
                    {recipes[1].method}
                  </p>
                </td>
                <td className="text-[#c84c30] font-semibold">
                  {recipes[1].rating}
                </td>
                <td>
                  <button className="btn btn-outline btn-error hover:text-white">
                    <FaHeart className="mr-2 inline-block text-[#c84c30] text-xl " />
                    <span>Add to Favourite</span>
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="text-xl font-semibold text-gray-800 my-font">
                  {recipes[2].name}
                </td>
                <td>
                  <ul>
                    <li>{recipes[2]?.ingredients[1]}</li>
                    <li>{recipes[2]?.ingredients[2]}</li>
                    <li>{recipes[2]?.ingredients[0]}</li>
                    <li>{recipes[2]?.ingredients[3]}</li>
                    <li>{recipes[2]?.ingredients[4]}</li>
                  </ul>
                </td>
                <td className="max-w-xs">
                  <p className="w-full whitespace-pre-line">
                    {recipes[2].method}
                  </p>
                </td>
                <td className="text-[#c84c30] font-semibold">
                  {recipes[2].rating}
                </td>
                <td>
                  <button className="btn btn-outline btn-error hover:text-white">
                    <FaHeart className="mr-2 inline-block text-[#c84c30] text-xl " />
                    <span>Add to Favourite</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
