import React from "react";

const MyReviewCard = ({review}) => {
     const { _id, message, userName, userImg, productName, productId } = review;
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full"
              src={userImg}
              alt="User Img"
            />
            <p className="mx-3 flex items-center text-2xl">{userName}</p>
          </div>
          <p className="leading-snug text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
