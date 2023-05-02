import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-[#9873FF1A]">
      <img
        className="w-1/3 rounded-lg"
        src="https://i.ibb.co/xjRK3wC/error.webp"
        alt=""
      />
      <div className="text-center">
        <h1 className="font-bold text-4xl text-gray-900 mt-4">
          404 - Page Not Found!!!!
        </h1>
        <p className="text-[#757575] mt-3 mb-6 max-w-lg px-3">
          The page you looking for might have been removed had it's name changed
          or is temporary unavailable.
        </p>
      </div>
      <Link to="/">
        <button className="my-btn">Go To Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
