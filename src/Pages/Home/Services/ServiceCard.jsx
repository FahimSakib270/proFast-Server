import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
      <div className="card-body text-center items-center">
        <div className="mb-4 ">{icon}</div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
