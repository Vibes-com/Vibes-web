"use client";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

const BlogListingHero: React.FC = () => {
    return (
        <div className="blog-listing-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 ">
                        <h1 className="font-poppins font-normal pt-15 hero-heading text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Future-Ready
                            <br />
                            <span className=" hero-heading hero-highlight relative z-9 w-fit font-poppins font-semibold text-[32px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#f4be00]">Digital Solutions</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold max-w-2xl  text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]">
                            Vibes builds secure scalable websites with strong UI/UX and reliable backend systems for seamless user experiences
                        </p>

                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="col-span-12"></div>
                </div>
            </div>
        </div >
    );
};

export default BlogListingHero;
