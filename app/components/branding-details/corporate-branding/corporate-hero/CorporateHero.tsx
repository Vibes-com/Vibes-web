"use client";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

const CorporateHero: React.FC = () => {
    return (
        <div className="webdevelopment-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 ">
                        <h1 className="font-poppins font-normal text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Corporate
                            <br />
                            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Branding</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[16px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]">
                            Vibes builds secure scalable websites with strong UI/UX and reliable backend systems for seamless user experiences
                        </p>

                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="col-span-6"></div>
                </div>
            </div>
        </div >
    );
};

export default CorporateHero;
