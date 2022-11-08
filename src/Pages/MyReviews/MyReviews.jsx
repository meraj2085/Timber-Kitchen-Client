import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user]);


  return (
    <div>
      <div className="text-center text-3xl mt-10">
        <h1>
          My <span className="text-orange-600">reviews</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-20 my-20">
        {reviews.map((review) => (
          <MyReviewCard key={review._id} reviews={reviews} setReview={setReview} review={review}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
