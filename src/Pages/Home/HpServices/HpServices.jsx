import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const HpServices = ({ services }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-16 gap-10 mx-36">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <button class="py-2 px-6 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HpServices;
