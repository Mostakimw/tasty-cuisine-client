import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   return (
  //     <div className="bg-gray-50">
  //       <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  //         <div className="relative flex items-center justify-between">
  //           {/* Logo Section */}
  //           <Link to="/" className="inline-flex items-center">
  //             <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
  //               Tasty Cuisine
  //             </span>
  //           </Link>

  //           {/* Nav Items Section */}
  //           <ul className="items-center hidden space-x-8 lg:flex">
  //             <li>
  //               <NavLink
  //                 to="/"
  //                 className={({ isActive }) => (isActive ? "active" : "default")}
  //               >
  //                 Home
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink
  //                 to="/blog"
  //                 className={({ isActive }) => (isActive ? "active" : "default")}
  //               >
  //                 Blog
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink
  //                 to="/login"
  //                 className={({ isActive }) => (isActive ? "active" : "default")}
  //               >
  //                 Login
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink
  //                 to="/register"
  //                 className={({ isActive }) => (isActive ? "active" : "default")}
  //               >
  //                 Register
  //               </NavLink>
  //             </li>
  //             {/* <li>
  //           </li> */}
  //           </ul>
  //           {/* Mobile Navbar Section */}
  //           <div className="lg:hidden">
  //             {/* Dropdown Open Button */}
  //             <button
  //               aria-label="Open Menu"
  //               title="Open Menu"
  //               onClick={() => setIsMenuOpen(true)}
  //             >
  //               <Bars3BottomRightIcon className="w-5 text-gray-600" />
  //             </button>
  //             {isMenuOpen && (
  //               <div className="absolute top-0 left-0 w-full z-10">
  //                 <div className="p-5 bg-white border rounded shadow-sm">
  //                   {/* Logo & Button section */}
  //                   <div className="flex items-center justify-between mb-4">
  //                     <div>
  //                       <Link to="/" className="inline-flex items-center">
  //                         <BoltIcon className="h-6 w-6 text-blue-500" />
  //                         <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
  //                           Tasty Cuisine
  //                         </span>
  //                       </Link>
  //                     </div>
  //                     {/* Dropdown menu close button */}
  //                     <div>
  //                       <button
  //                         aria-label="Close Menu"
  //                         title="Close Menu"
  //                         onClick={() => setIsMenuOpen(false)}
  //                       >
  //                         <XMarkIcon className="w-5 text-gray-600" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                   {/* Mobile Nav Items Section */}
  //                   <nav>
  //                     <ul className="space-y-4">
  //                       <li>
  //                         <Link to="/" className="default">
  //                           Home
  //                         </Link>
  //                       </li>
  //                       <li>
  //                         <Link
  //                           to="/blog"
  //                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
  //                         >
  //                           Blog
  //                         </Link>
  //                       </li>
  //                       <li>
  //                         <Link
  //                           to="/login"
  //                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
  //                         >
  //                           Login
  //                         </Link>
  //                       </li>
  //                       <li>
  //                         <Link
  //                           to="/register"
  //                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
  //                         >
  //                           Register
  //                         </Link>
  //                       </li>
  //                     </ul>
  //                   </nav>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

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
            <Link
              to="/login"
              className="inline-flex items-center bg-[#c84c30] border-0 py-2 px-3 rounded-md mt-2 text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
