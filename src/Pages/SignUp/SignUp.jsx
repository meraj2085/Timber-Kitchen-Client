import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const SignUp = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext);

     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const photoURL = form.imageUrl.value;
          
          createUser(email, password)
          .then(result => {
            const user = result.user;
            handleUpdateProfile(name, photoURL)
            form.reset()
            toast.success('SignUp Successful')
          })
          .catch(err => console.error(err.message))
        };

        const handleUpdateProfile = (name, photoURL) => {
          const profile = { displayName: name, photoURL: photoURL };
          updateUserProfile(profile)
            .then(() => {})
            .catch((error) => {
              console.error(error);
            });
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
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
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
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="text" className="block text-gray-600">
                  Image link
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  required
                  placeholder="Image link"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
                />
              </div>
              
              <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              SignUp
            </button>
          </div>
            </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 flex text-center rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-md text-center sm:px-6 text-gray-600">
          Already have an account?{" "}
          <button className="underline text-gray-800" type="submit">
            <Link to="/signUp">SignIn</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
