"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------------- TYPES ---------------- */

export type WhyChooseSlide = {
  title: string;
  desc: string;
};

type WhyChooseUsProps = {
  badgeText?: string;
  heading: string;
  highlightText: string;
  description?: string;
  centerText: string;
  slides: WhyChooseSlide[];
  quoteImage?: string;
  backgroundImage?: string;
};

/* ---------------- COMPONENT ---------------- */

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  badgeText = "Why Choose Us",
  heading,
  highlightText,
  description,
  centerText,
  slides,
  backgroundImage,
  quoteImage = "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/quote-img.png",
}) => {
  const settings = {
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 676,
        settings: {
          vertical: false,
          slidesToShow: 1,
          swipe: true,
          draggable: true,
          centerMode: true,
        },
      },
    ],
  };

  return (

    <section
      className="branding-customer-wrapper relative section-gap !pb-40 not-odd:overflow-visible"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">

        {/* BADGE */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badgeText}
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h3 className="text-center font-poppins font-medium text-[40px] leading-[1.23]">
          {heading}{" "}
          <span className="highlight font-poppins font-semibold">
            {highlightText}
          </span>
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-[#707070] text-[16px] text-center max-w-2xl mx-auto mt-5 mb-16">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CIRCLE */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="customer-circle flex items-center justify-center text-center">
              <h6 className="font-poppins font-semibold text-[36px] text-white leading-[1.13]">
                {centerText}
              </h6>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:col-span-7">
            <Slider {...settings} className="customer-slider">
              {slides.map((item, index) => (
                <div key={index} className="customer-slide">
                  <div className="customer-card relative">

                    {/* QUOTE ICON */}
                    <div className="absolute top-4 right-4">
                      <Image
                        src={quoteImage}
                        alt="quote"
                        width={26}
                        height={26}
                      />
                    </div>

                    <div className="customer-inner">
                     <div className="customer-content">
                        <h5 className="font-normal text-[24px] leading-[1.23] tracking-normal text-[#08325A] mb-3">{item.title}</h5>
                        <p className="font-normal text-[18px] leading-[1.23] tracking-normal  text-[#575757DB] ">{item.desc}</p>
                    </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
