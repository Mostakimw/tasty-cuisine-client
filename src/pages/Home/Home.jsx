import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat text-center mt-5"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/top-view-burger-fries-with-sauces-copy-space_23-2148784450.jpg?w=1060&t=st=1683013983~exp=1683014583~hmac=804959901f60d16849f52a10439342d48a61d09a44dbf0c19598f1c9da370840")',
        height: `calc(100vh - 100px)`,
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="relative flex h-full items-center justify-around">
          <div className="text-white">
            <h2 className="text-6xl font-semibold">Tasty Cuisine</h2>
            <h4 className="my-10 text-xl font-semibold lg:w-[500px] px-3">
              Your ultimate destination for culinary inspiration. Join us and
              unleash your inner chef!
            </h4>
            <Link
              to="/register"
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Register Now
            </Link>
          </div>
          <div className=" top-0 border border-red-300">
            {/* <img
            src="https://img.freepik.com/premium-vector/cartoon-chef-holding-silver-platter_29190-8165.jpg?w=2000"
            alt=""
            width={"400px"}
        /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
