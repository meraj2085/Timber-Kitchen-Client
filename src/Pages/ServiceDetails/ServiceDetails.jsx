import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, name, details, _id, price } = service;
 useTitle('Details')
  return (
    <div>
      <div className=" bg-slate-50">
        <div className="pt-5 pb-14">
          <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg rounded-xl mt-16">
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <img
                  className="w-auto rounded-lg h-[100px] shadow-md"
                  src={img}
                  alt="service img"
                />
              </div>
              <div className="card-body">
                <h4 className="font-semibold text-2xl">{name}</h4>
                <p className="mb-4">{details}</p>
                <p className="font-semibold">Price: ${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews service={service}></Reviews>
    </div>
  );
};

export default ServiceDetails;
