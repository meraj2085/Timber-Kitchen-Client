import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../.././assets/logo.png";
import { AuthContext } from "../../../Contexts/UserContext";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="container relative flex justify-between h-20 mx-auto">
        <div className="flex">
          <img className="sm:h-10 md:h-20" src={logo} alt="logo" />
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
              to="/dashboard"
              className="flex items-center px-4  hover:text-orange-600"
            >
              Dashboard
            </Link>
          </li>

          {user?.uid ? (
            <>
              <li className="flex">
                <Link
                  to="/myReviews"
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
        <button
          className="flex justify-end p-4 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10 sm:hidden block">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="#"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <img className="w-[50px]" src={logo} alt="" />
                    <span className="ml-2 text-xl font-semibold tracking-wide text-gray-800">
                      TimberKitchen
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
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
                      to="/dashboard"
                      className="flex items-center px-4  hover:text-orange-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {user?.uid ? (
                    <>
                      <li className="flex">
                        <Link
                          to="/myReviews"
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
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
