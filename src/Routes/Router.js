import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import EditReview from "../Pages/EditReview/EditReview";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://timber-kitchen-server.vercel.app/services"),
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://timber-kitchen-server.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview/:id",
        loader: ({ params }) =>
          fetch(`https://timber-kitchen-server.vercel.app/review/${params.id}`),
        element: <EditReview></EditReview>,
      },
    ],
  },
]);
