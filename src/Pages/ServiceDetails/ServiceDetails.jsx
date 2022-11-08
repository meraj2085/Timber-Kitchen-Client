import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, name, details, _id, price } = service;

  return (
    <div>
      <div class="min-h-screen bg-slate-50">
        <div className="pt-5">
          <div class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class="card-header mx-4 -mt-6">
                <img
                  class="w-auto rounded-lg h-[100px] shadow-md"
                  src={img}
                  alt="service img"
                />
              </div>
              <div class="card-body">
                <h4 class="font-semibold text-2xl">{name}</h4>
                <p class="mb-4">{details}</p>
                <p class="font-semibold">Price: ${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
