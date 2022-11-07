import React, { createContext } from 'react';

export const AuthContext = createContext()
const UserContext = ({children}) => {
     const user = {name: 'meraj', age: '20'}

     const info = {user}
     return (
          <AuthContext.Provider value={info}>
               {children}
          </AuthContext.Provider>
     );
};

export default UserContext;