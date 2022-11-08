import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
     {
       path: '/',
       element: <Main></Main>,
       children: [
         {
           path: '/',
           loader: ()=>fetch('http://localhost:5000/services'),
           element: <Home></Home>
         },
         {
           path: '/signIn',
           element: <SignIn></SignIn>
         },
         {
           path: '/signUp',
           element: <SignUp></SignUp>
         },
         {
          path: '/services',
          loader: ()=>fetch('http://localhost:5000/allServices'),
          element: <Services></Services>
         }
       ]
     }
   ])