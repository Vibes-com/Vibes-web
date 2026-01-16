"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { withImageBase } from "@/app/utils/image";
import SlideUp from "../../animations/SlideUp";

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
  badgeText,
  heading,
  highlightText,
  description,
  centerText,
  slides,
  backgroundImage,
  quoteImage = "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/quote-img.png",
}) => {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 676);
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
 const settings = {
  dots: true,
  infinite: true,

  vertical: !isMobile,
  verticalSwiping: !isMobile,

  slidesToShow: isMobile ? 1 : 3,
  slidesToScroll: 1,

  centerMode: true,
  centerPadding: "0px",

  swipeToSlide: true,
  swipe: isMobile,
  draggable: isMobile,

  arrows: false,
  speed: 600,
};

  return (

    <section
      className="branding-customer-wrapper relative section-gap !pb-30 lg:!pb-40 not-odd:overflow-visible"
      style={{
        backgroundImage: backgroundImage
          ? `url(${withImageBase(backgroundImage)})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

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
        <h3 className="text-center font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
          {heading}{" "}<br />
          <span className="highlight relative w-fit z-9  font-poppins font-semibold">
            {highlightText}
          </span>
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-[#707070] text-[16px] text-center max-w-2xl mx-auto mt-5 mb-16">
            {description}
          </p>
        )}
          <SlideUp delay={0.5}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CIRCLE */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="customer-circle flex items-center justify-center text-center">
              <h6 className="font-poppins font-semibold text-[30px] lg:text-[36px] text-white leading-[1.13]">
                {centerText}
              </h6>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:col-span-7 z-99">
            <Slider {...settings} className="customer-slider">
              {slides.map((item, index) => (
                <div key={index} className="customer-slide">
                  <div className="customer-card relative">

                    {/* QUOTE ICON */}
                    <div className="absolute top-4 right-4">
                      <img
                        src={withImageBase(quoteImage)}
                        alt={item.title}
                        width={26}
                        height={26}
                      />
                    </div>

                    <div className="customer-inner">
                      <div className="customer-content">
                        <h5 className="font-semibold text-[18px] lg:text-[20px] leading-[1.23] tracking-normal text-[#404040] mb-3">{item.title}</h5>
                        <p className="font-normal text-[14px] leading-[1.23] tracking-normal  text-[#575757DB] ">{item.desc}</p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default WhyChooseUs;
