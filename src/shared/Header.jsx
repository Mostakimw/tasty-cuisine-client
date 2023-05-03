import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { UserContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(UserContext);
  const [loggedUser, setLoggedUser] = useState("");
  const [error, setError] = useState("");

  const logoutHandle = () => {
    logoutUser()
      .then()
      .catch((err) => setError(err));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:w-[1280px] mx-auto my-3 px-3">
      <nav className="flex items-center justify-between flex-wrap ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Tasty Cuisine
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ps-3 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="text-sm lg:flex gap-4 mx-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/special"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Specials
              </NavLink>
            </li>
          </ul>
          <div>
            {user?.email &&
              (user?.photoUrl ? (
                <img
                  src={user.photoUrl}
                  className="w-9 h-9 rounded-[50%] inline-block mr-3"
                  alt=""
                />
              ) : (
                <p
                  className="
              inline mr-3"
                >
                  null
                </p>
              ))}

            {user?.email ? (
              <button onClick={logoutHandle}>Logout</button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center bg-[#c84c30] border-0 py-2 px-3 rounded-md mt-2 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
