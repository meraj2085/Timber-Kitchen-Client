import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  useTitle("My reviews");
  const { user, userSignOut } = useContext(AuthContext);
  const [reviews, setReview] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews/?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("TimberKitchenToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => setReview(data));
  }, [user]);

  return (
    <div>
      <div className="text-center text-3xl mt-10">
        <h1>
          My <span className="text-orange-600">reviews</span>
        </h1>
      </div>
      {!reviews.length == 0 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 mx-10 my-20">
        {reviews.map((review) => (
          <MyReviewCard
            key={review._id}
            reviews={reviews}
            setReview={setReview}
            review={review}
          ></MyReviewCard>
        ))}
      </div> : <div className="h-screen flex justify-center pt-56"><p className="text-3xl">No reviews were added</p></div>}
    </div>
  );
};

export default MyReviews;
