import React from "react";

const Steps = () => {
  return (
    <section className="py-8 my-16 text-gray-800 mx-20">
      <div className="container mx-auto">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h2 className="text-2xl font-bold leading-none sm:text-4xl">
            How to order?
          </h2>
          <p className="px-8 my-4">
            Want to order one of my product? Follow these steps bellow.
          </p>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
        </div>
        <div className="p-4 md:p-8">
          <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>

              <h5 className="text-xl font-semibold">SignIn Or SignUp</h5>
              <p>
                You must signUp if you are new here or if you already have an
                account you must signIn to proceed.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <h5 className="text-xl font-semibold">
                Choose any of my service
              </h5>
              <p>
                Choose any of my service from here. There are plenty of dishes
                here.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <h5 className="text-xl font-semibold">Check review</h5>
              <p>
                You can check review to know how your desired meal tests like.
                And buy it.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <h5 className="text-xl font-semibold">Give your feedback.</h5>
              <p>
                If you have tried one of my service. Please give a review. Share
                your experience with everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
