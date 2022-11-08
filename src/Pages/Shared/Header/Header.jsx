import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../.././assets/logo.png";
import { AuthContext } from "../../../Contexts/UserContext";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {
        toast(
          "LogOut successful",
          {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          },
          { duration: 2000 }
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <header className="px-4 text-gray-800">
      <div className="container flex justify-between h-20 mx-auto">
        <div className="flex">
          <img className="sm:h-10 md:h-20" src={logo} alt="" />
          <p className="flex items-center text-2xl">TimberKitchen</p>
        </div>
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

          {user?.uid ? (
            <>
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
              <li className="flex cursor-pointer">
                <p
                  onClick={handleUserSignOut}
                  className="flex items-center px-4  hover:text-orange-600"
                >
                  Log Out
                </p>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
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
