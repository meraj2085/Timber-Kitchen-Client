import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const EditReview = () => {
  useTitle('Edit review')
  const review = useLoaderData();
  const navigate = useNavigate()

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.review.value;

    fetch(`http://localhost:5000/review/${review?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          navigate('/myReviews')
        }
      });
  };

  return (
    <div className="flex justify-center my-20">
      <form className="w-1/2" onSubmit={handleReview}>
        <textarea
          name="review"
          id="message"
          defaultValue={review?.message}
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
    </div>
  );
};

export default EditReview;
