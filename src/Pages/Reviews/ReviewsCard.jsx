import React from "react";

const ReviewsCard = () => {
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex">
            <img
              className="w-10 h-10"
              src="https://i.pinimg.com/474x/f4/8d/26/f48d2639982101005f924f2038364055.jpg"
              alt=""
            />
            <p className="mx-3 flex items-center text-2xl">Aiana</p>
          </div>
          <p className="leading-snug text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellat, excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
