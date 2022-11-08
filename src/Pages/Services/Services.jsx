import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-10 mx-36">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
