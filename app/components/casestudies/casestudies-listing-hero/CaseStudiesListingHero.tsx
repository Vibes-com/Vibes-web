"use client";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

const CaseStudiesListingHero: React.FC = () => {
    return (
        <div className="casestudy-listing-hero-wrapper flex items-center  md:h-[90vh] lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 ">
                        <h1 className="font-poppins font-normal pt-0 mt-[-150px] md:mt-[0px] lg:mt-[0px] lg:pt-15 hero-heading text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            OUR
                            <br />
                            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">CASE STUDIES</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]  max-w-2xl">
                            Real-world case studies highlighting challenges, smart strategies, and measurable outcomes that demonstrate expertise and impact
                        </p>

                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="col-span-12"></div>
                </div>
            </div>
        </div >
    );
};

export default CaseStudiesListingHero;
