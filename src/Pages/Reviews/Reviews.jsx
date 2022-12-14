import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import ReviewsCard from "./ReviewsCard";
import empty from "../../assets/undraw_no_data_re_kwbl.svg";

const Reviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { name, _id, img } = service;
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.review.value;
    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const email = user?.email;
    const review = {
      message,
      userName,
      userImg,
      email,
      timestamp: new Date(),
      productName: name,
      productImg: img,
      productId: _id,
    };

    fetch("https://timber-kitchen-server.vercel.app/addReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setToggle(!toggle);
          form.reset();
          toast.success("Review added", { duration: 2000 });
        }
      });
  };

  useEffect(() => {
    fetch(`https://timber-kitchen-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [toggle]);

  return (
    <div className="lg:flex justify-between mx-20 my-20">
      <div>
        <h1 className="text-3xl">
          <span className="text-orange-600 font-semibold">|</span> Customer
          reviews
        </h1>
        <div className="flex my-3">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p className="mx-5">Based on 1000+ reviews</p>
        </div>
        <div className="mb-3">
          <h1 className="text-xl font-semibold">Share your thoughts</h1>
          <p>
            If you have used this product, share your thoughts with <br /> other
            customers.
          </p>
        </div>
        {user?.uid ? (
          <>
            <form onSubmit={handleReview}>
              <textarea
                name="review"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="px-8 py-1 mb-5 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <Link to="/signIn" state={{ from: location }} replace>
            <div className="flex my-10">
              <p className="mx-2 text-teal-600 font-semibold">!</p>
              <p className="hover:underline hover:text-teal-600">
                Please signIn to add review.
              </p>
            </div>
          </Link>
        )}
      </div>
      {!reviews.length == 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {reviews?.map((review) => (
            <ReviewsCard key={review._id} review={review}></ReviewsCard>
          ))}
        </div>
      ) : (
        <div className="flex md:justify-end justify-center">
          <img className="md:w-1/2 w-3/4" src={empty} alt="" />
        </div>
      )}
    </div>
  );
};

export default Reviews;
