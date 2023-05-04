import React from "react";
import { Link } from "react-router-dom";

const Special = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-12 lg:mt-24">
      <h1 className="mtext-primary text-gray-800 text-center mb-16">
        Special From Our Chefs
      </h1>
      <div
        className="hero min-h-[calc(100vh-40vh)] rounded-md"
        style={{
          backgroundImage: `url("https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/gallery_promo_image/Top%2010%20August%20Recipes_Dessert%20Recipes.jpg?itok=o3He36C7")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase my-font">
              Tasty Desserts
            </h1>
            <p className="mb-5 my-font">
              Weather you crave sweet, savory, decadent or healthy, We have
              hundreds of rated dessert recipes to satisfy your taste buds
            </p>
            <Link to="/register" className="btn btn-primary px-12">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
