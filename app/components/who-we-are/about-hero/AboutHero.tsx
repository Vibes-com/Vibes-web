"use client";

import Link from "next/link";
import React from "react";

const AboutHero: React.FC = () => {
    return (
        <div className="about-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 text-white">
                        <h1 className="text-[55px] font-semibold leading-tight text-[#FFFFFF] ">
                            Shaping <br /> Tomorrow’s Digital <br /> Success
                        </h1>

                        <p className="mt-6 font-poppins font-normal text-[16px] leading-[130%] tracking-[0] text-[#FFFFFFDB]">
                            We blend creativity, technology, and strategy to craft impactful digital
                            journeys that drive growth, build trust, and create lasting value.
                        </p>

                        <div className="mt-6 flex text-[#F4BE00] font-semibold text-lg">
                            <Link
                                href="#"
                                className="pr-4 border-r border-[#F4BE00] last:border-r-0 hover:text-white transition text-[23px] font-semibold leading-tight"
                            >
                                Innovate
                            </Link>

                            <Link
                                href="#"
                                className="px-4 border-r border-[#F4BE00] last:border-r-0 hover:text-white transition text-[23px] font-semibold leading-tight"
                            >
                                Deliver
                            </Link>

                            <Link
                                href="#"
                                className="px-4 border-r border-[#F4BE00] last:border-r-0 hover:text-white transition text-[23px] font-semibold leading-tight"
                            >
                                Sustain
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-span-6"></div>
                </div>
            </div>
        </div >
    );
};

export default AboutHero;
