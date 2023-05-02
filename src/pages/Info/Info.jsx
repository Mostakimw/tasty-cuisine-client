import React from "react";

const Info = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-12 px-3 lg:mt-20">
      <h1 className="mtext-primary text-gray-800 text-center mb-10">
        Important Information
      </h1>
      <div className="grid grid-cols-12 gap-8 mt-4">
        <div className="col-span-4">
          <h2 className="mb-8 text-3xl text-gray-900">Events</h2>
          <p className="mtext-secondary">
            We put at your disposal our place and staff to celebrate your
            Birthday, the 10th year anniversary with your colleagues even your
            Weddings.
          </p>
        </div>
        <div className="col-span-4">
          <h2 className="mb-8 text-3xl text-gray-900">Opening Hours</h2>
          <h3 className="text-md font-bold">Saturday-Thursday</h3>
          <p className="mtext-secondary mt-2">10am-10pm</p>
          <h3 className="text-md font-bold mt-3">Friday</h3>
          <p className="mtext-secondary mt-2">3pm-10pm</p>
        </div>
        <div className="col-span-4">
          <h2 className="mb-8 text-3xl text-gray-900">About</h2>
          <p className="mtext-secondary">
            Discover the culinary creations of talented chefs from around the
            world. Our platform brings together experienced chefs and food
            enthusiasts, providing a space to share recipes, cooking techniques,
            and inspiration. From traditional dishes to modern fusion cuisine,
            explore a world of flavors with our community of passionate chefs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
