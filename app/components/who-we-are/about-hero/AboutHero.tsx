"use client";

import Link from "next/link";
import React from "react";

const AboutHero: React.FC = () => {
    return (
        <div className="about-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-7 ">

                        <h1 className="font-poppins font-normal text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Shaping Tomorrow’s
                            <br />
                            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Digital Success</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]">
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
                    <div className="col-span-5"></div>
                </div>
            </div>
        </div >
    );
};

export default AboutHero;
