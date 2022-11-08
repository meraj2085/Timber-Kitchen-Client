import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
     const {user} = useContext(AuthContext)
     const [reviews, setReview] = useState([])

     useEffect(()=>{
          fetch(`http://localhost:5000/myReviews/?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setReview(data))
     },[user])

     
     return (
          <div className='grid grid-cols-3 gap-5 mx-20 my-20'>
               {reviews.map(review => <MyReviewCard review={review}></MyReviewCard>)}
          </div>
     );
};

export default MyReviews;