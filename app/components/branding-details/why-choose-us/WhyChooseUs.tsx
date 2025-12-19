"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        title: "Building Trust",
        desc: "New events or brands struggle to gain audience credibility.",
    },
    {
        title: "Unclear Messaging",
        desc: "Event benefits often fail to communicate value effectively.",
    },
    {
        title: "Quality Leads vs Clicks",
        desc: "Generating impactful leads, not just website traffic, is a challenge.",
    },
    {
        title: "Low Awareness",
        desc: "Even strong promotion efforts sometimes fail to reach the right audience.",
    },
    {
        title: "Targeting the Right Audience",
        desc: "Finding and engaging the ideal online participants remains difficult.",
    },
];

const WhyChooseUs: React.FC = () => {
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
        <section className="branding-customer-wrapper relative bg-[#E6EFE7] py-20 pb-50 overflow-visible">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-5">
                    <div className="
        px-6 py-2 
        rounded-full 
        border border-[#F4BE00] 
        inline-flex items-center gap-2
      ">
                        <span
                            className="w-2 h-2 rounded-full bg-[#F4BE00]"
                        ></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Why Choose Us
                        </span>
                    </div>
                </div>
                <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                    How We <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Elevate Your Brand</span>

                </h3>
                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
                    Combining strategy, creativity, and data-driven insights to build distinctive brands that stand out, connect meaningfully, and drive measurable business impact.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT CIRCLE */}
                    <div className="lg:col-span-5 z-10 education-left-part relative flex justify-center">
                        <div className="customer-circle relative flex items-center justify-center text-center">
                            <h6 className="font-poppins font-semibold text-[36px] leading-[1.13] tracking-normal text-center text-[#FFFFFF]">
                                Branding,
                                <br />
                                Done Right!

                            </h6>
                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="lg:col-span-7">
                        <div className="customer-slider-section z-30 relative">
                            <Slider {...settings} className="customer-slider">
                                {slides.map((item, index) => (
                                    <div key={index} className="customer-slide">
                                        <div className="customer-card">

                                            {/* Quote */}
                                            <div className="absolute top-4 right-4">
                                                <img
                                                    src="https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/quote-img.png"
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
            </div>
        </section>
    );
};

export default WhyChooseUs;
