import React from "react";
import { Link } from "react-router-dom";
import logo from '../../.././assets/logo.png'

const Header = () => {
  return (
    <header className="px-4 text-gray-800">
      <div className="container flex justify-between h-20 mx-auto">
        <img className="sm:h-10 md:h-20" src={logo} alt="" />
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4   hover:text-orange-600"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/services"
              className="flex items-center px-4  hover:text-orange-600"
            >
              Services
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/blog"
              className="flex items-center px-4  hover:text-orange-600"
            >
              Blog
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/reviews"
              className="flex items-center px-4  hover:text-orange-600"
            >
              My reviews
            </Link>
          </li>
          
          <li className="flex">
            <Link
              to="/addService"
              className="flex items-center px-4  hover:text-orange-600"
            >
              Add Service
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/signIn"
              className="flex items-center px-4  hover:text-orange-600"
            >
              SignIn
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/signUp"
              className="flex items-center px-4  hover:text-orange-600"
            >
              SignUp
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/logOut"
              className="flex items-center px-4  hover:text-orange-600"
            >
              Log Out
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
