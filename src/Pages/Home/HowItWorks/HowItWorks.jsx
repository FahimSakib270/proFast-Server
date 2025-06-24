import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaTruckMoving,
  FaUserTie,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMapMarkerAlt className="text-primary text-3xl mb-4" />,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMoneyBillAlt className="text-primary text-3xl mb-4" />,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaTruckMoving className="text-primary text-3xl mb-4" />,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaUserTie className="text-primary text-3xl mb-4" />,
    },
  ];

  return (
    <section className="py-12 bg-base-200 mt-20 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">How it Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
