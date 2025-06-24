import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../Services/OurServices";
import ClientLogos from "../ClientLogos/ClientLogos";
import Features from "../Features/Features";
import BeMerchant from "../Merchant/BeMerchant";
import FQA from "../FQA/FQA";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <ClientLogos></ClientLogos>
      <Features></Features>
      <BeMerchant></BeMerchant>
      <FQA></FQA>
    </div>
  );
};

export default Home;
