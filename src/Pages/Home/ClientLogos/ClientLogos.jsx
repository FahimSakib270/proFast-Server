import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const ClientLogos = () => {
  const logos = [
    { id: 1, src: logo1, alt: "Amazon" },
    { id: 2, src: logo2, alt: "Google" },
    { id: 3, src: logo3, alt: "Meta" },
    { id: 4, src: logo4, alt: "Netflix" },
    { id: 5, src: logo5, alt: "Airbnb" },
    { id: 6, src: logo6, alt: "Microsoft" },
    { id: 6, src: logo7, alt: "Microsoft" },
  ];

  return (
    <section className="mb-20 ">
      <div className="text-center mb-8 divider">
        <h2 className="text-2xl md:text-3xl font-bold">
          We've helped thousands of sales teams
        </h2>
      </div>

      <Marquee gradient={false} speed={80} pauseOnHover={true} loop={0}>
        {logos.map((logo) => (
          <div key={logo.id} className="mx-16  transition-all duration-300">
            <img src={logo.src} alt={logo.alt} className="h-6 object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientLogos;
