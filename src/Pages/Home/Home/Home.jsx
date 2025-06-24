import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../Services/OurServices";
import ClientLogos from "../ClientLogos/ClientLogos";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <ClientLogos></ClientLogos>
      <Features></Features>
    </div>
  );
};

export default Home;
