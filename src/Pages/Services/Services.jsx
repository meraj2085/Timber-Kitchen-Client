import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import Spinner from "../Shared/Spinner/Spinner";

const Services = () => {
  useTitle('Services')
  const [loading, setLoading] = useState(true)
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setServices(data);
      });
  }, []);

  return (
    <div>
      {loading && <Spinner></Spinner>}
      <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-10 mx-36">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
    </div>
  );
};

export default Services;
