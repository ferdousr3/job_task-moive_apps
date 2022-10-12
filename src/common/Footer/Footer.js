import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

const Footer = () => {
  return (
    <>
      <div className="bg-blackGray">
        <div className="container mx-auto md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={data.logoFooter} className="mr-3 h-[100px]" alt="Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              {data.footer.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-borderColor sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}
            <a href="/" className="hover:underline pl-1">
              {data.name}
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
