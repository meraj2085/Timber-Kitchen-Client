import React from "react";

const ReviewsCard = ({ review }) => {
  const { _id, message, userName, userImg, productName, productId } = review;

  return (
    <div className="w-xl md:w-[500px] p-4 max-h-[150px] overflow-y-scroll shadow-md bg-gray-50 text-gray-800">
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
          <p className="leading-snug text-gray-600">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
