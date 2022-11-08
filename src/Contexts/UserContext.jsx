import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
     const [user, setUser] = useState(null)

     const createUser = (email, password)=>{
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = (profile) => {
          return updateProfile(auth.currentUser, profile);
        };

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });
      
          return () => {
            unsubscribe();
          };
        }, []);

     const info = {createUser, updateUserProfile, user}
     return (
          <AuthContext.Provider value={info}>
               {children}
          </AuthContext.Provider>
     );
};

export default UserContext;