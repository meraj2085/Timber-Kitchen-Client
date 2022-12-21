import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content gap-5">
            <Link to="/dashboard">
              <li className="bg-[#f5ebe0] rounded-md">
                <div className="flex justify-center">Add a service</div>
              </li>
            </Link>
            <Link to="/dashboard/allProducts">
              <li className="bg-[#f5ebe0] rounded-md">
                <div className="flex justify-center">All products</div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;

/* 
<label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
*/
