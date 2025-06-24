import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../Services/OurServices";
import ClientLogos from "../ClientLogos/ClientLogos";
import Features from "../Features/Features";
import BeMerchant from "../Merchant/BeMerchant";
import FQA from "../FQA/FQA";
import HowItWorks from "../HowItWorks/HowItWorks";
import ReviewsSection from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <ClientLogos></ClientLogos>
      <Features></Features>
      <BeMerchant></BeMerchant>
      <ReviewsSection></ReviewsSection>
      <FQA></FQA>
    </div>
  );
};

export default Home;
