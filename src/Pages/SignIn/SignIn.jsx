import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import useTitle from "../../hooks/useTitle";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
  const {userSignIn} = useContext(AuthContext)
  useTitle('SignIn')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("Login successful");
        form.reset();
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 h-screen">
      <div className="w-full max-w-sm p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              SignIn
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <SocialLogin></SocialLogin>
        </div>
        <p className="text-md text-center sm:px-6 text-gray-600">
          Don't have an account?{" "}
          <button className="underline text-gray-800" type="submit">
            <Link to="/signUp">Sign Up</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
