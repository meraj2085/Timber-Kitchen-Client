import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyReviewCard = ({ review, reviews, setReview }) => {
  const {
    _id,
    message,
    userName,
    userImg,
    productImg,
    productName,
    productId,
  } = review;

  const handleReviewDelete = (id) => {
    const agree = window.confirm("Are you sure you want to delete?");
    if (agree) {
      fetch(`https://timber-kitchen-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReview(remaining);
            toast.success("Deleted successfully", {
              duration: 2000,
            });
          }
        });
    }
  };

  return (
    <div className="max-w-lg max-h-[200px] overflow-y-scroll px-4 py-6 shadow-md bg-gray-50 text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full"
                src={productImg}
                alt="User Img"
              />
              <p className="mx-3 flex items-center text-2xl">{productName}</p>
            </div>
            <div className="flex py-2">
              <div onClick={() => handleReviewDelete(_id)}>
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              <p className="mx-5">|</p>
              <div>
                <Link to={`/editReview/${_id}`}>
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p className="leading-snug text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
