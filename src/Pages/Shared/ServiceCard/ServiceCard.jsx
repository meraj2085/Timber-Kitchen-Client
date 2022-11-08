import React from "react";

const ServiceCard = ({ service }) => {
  const { img, name, details, _id, price } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
