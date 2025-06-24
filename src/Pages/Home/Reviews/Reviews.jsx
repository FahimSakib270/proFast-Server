import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customerTop from "../../../assets/customer-top.png";
import imgQuote from "../../../assets/reviewQuote.png";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Awlad Hossin",
      designation: "Senior Product Designer",
      review:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      id: 2,
      name: "Rasel Ahamed",
      designation: "CTO",
      review:
        "The product has significantly improved my posture and reduced back pain. Highly recommended!",
    },
    {
      id: 3,
      name: "Nasir Uddin",
      designation: "CEO",
      review:
        "I've noticed a noticeable improvement in my posture after using this product daily.",
    },
    {
      id: 4,
      name: "Sadia Akter",
      designation: "Marketing Manager",
      review:
        "This posture corrector is comfortable and effective. It helps me stay focused at work.",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="cursor-pointer absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 text-primary"
    >
      <FaArrowLeft className="text-2xl" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="cursor-pointer absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 text-primary"
    >
      <FaArrowRight className="text-2xl" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
    appendDots: (dots) => (
      <div className="pt-6">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    ),
  };

  return (
    <section className="py-16 bg-base-200 mb-10">
      <img className="mx-auto mb-6" src={customerTop} alt="" />
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black mb-2">
          What our customers are saying
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* Reviews Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="px-4">
                <div className="bg-white shadow-lg rounded-xl p-8 text-left h-full flex flex-col justify-between opacity-50 hover:opacity-100 transition duration-300">
                  <div className="text-4xl text-primary mb-4">
                    <img src={imgQuote} alt="" />
                  </div>
                  <p className="text-gray-700 mb-6">{review.review}</p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xl font-semibold text-white">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-black ">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
