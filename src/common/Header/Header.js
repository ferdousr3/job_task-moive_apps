import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import data from "../../data/data";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMobileMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bg-white  border-gray-200 shadow-md  py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={data.logoHeader}
              className="mr-3 h-[50px] sm:h-[60px]  "
              alt=" Logo"
            />
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm  bg-bgMain hover:opacity-90 transition-opacity duration-300  text-white py-2.5 px-8 rounded-sm m-2 font-semibold"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              Login
            </button>
            {/* <!-- Dropdown menu --> */}

            <button
              onClick={handleMobileMenu}
              type="button"
              className=" hidden items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
             
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pr-4 pl-3   rounded md:bg-transparent text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-blackGray  rounded md:bg-transparent  md:p-0  hover:text-blue-700"
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
