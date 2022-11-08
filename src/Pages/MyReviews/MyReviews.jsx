import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyReviews = () => {
     const {user} = useContext(AuthContext)

     useEffect(()=>{
          fetch(`http://localhost:5000/myReviews/?email=${user?.email}`)
          .then(res => res.json())
          .then(data => console.log(data))
     },[])
     
     return (
          <div>
               <h1>My reviews are here</h1>
          </div>
     );
};

export default MyReviews;