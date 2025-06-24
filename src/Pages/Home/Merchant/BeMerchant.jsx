import React from "react";
import { Link } from "react-router";
import location from "../../../assets/Location/location-merchant.png";

const BeMerchant = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-4xl bg-[#03464D] p-20 mb-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-gray-200">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="gap-2 flex flex-row">
            <Link className="btn btn-outline rounded-4xl font-bold text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black">
              {" "}
              Become a Merchant
            </Link>
            <Link className="btn btn-outline  rounded-4xl  text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black">
              {" "}
              Earn with Profast Courier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
