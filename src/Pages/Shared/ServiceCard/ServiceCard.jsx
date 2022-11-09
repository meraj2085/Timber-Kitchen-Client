import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { img, name, details, _id, price } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        {/* <img className="" src={img} alt="service" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {details.length > 100 ? (
            <>{details.slice(0, 100) + "..."}</>
          ) : (
            <>{details}</>
          )}
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <div className="inline-block mr-2 mt-2">
            <Link to={`/services/${_id}`}>
              <button
                type="button"
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
