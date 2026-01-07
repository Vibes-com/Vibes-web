"use client";

import Image from "next/image";
import {withImageBase} from "@/app/utils/image";

const marqueeOne = [
    "Stand Out. Built to Last.",
    "Brands That Lead. Not Follow.",
    "Turning Vision into Impact.",
];

const marqueeTwo = [
    "Turning Vision into Impact.",
    "Brands That Lead. Not Follow.",
    "Stand Out. Built to Last.",
];

const BrandingMarquee = () => {
    return (
        <div className="relative  branding-marquee">
            {/* TOP MARQUEE */}
            <div className="relative rotate-[4deg] mb-10 -ml-[10px]">
                <div className="bg-[#466E59] py-5 lg:py-10 overflow-hidden">
                    <div className="flex w-max animate-marquee-left">
                        {[...marqueeOne, ...marqueeOne].map((text, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 px-8 font-poppins font-medium text-[40px] lg:text-[65px] leading-[1] tracking-normal whitespace-nowrap text-[#CBE6D8E0]"
                            >
                                <span>{text}</span>
                                <Image
                                     src={withImageBase("/home/star.png")}
                                    alt="star"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTOM MARQUEE */}
            <div className="relative rotate-[-4deg] -ml-[10px] -mt-[50px]">
                <div className="bg-[#204667] py-5 lg:py-10  overflow-hidden">
                    <div className="flex w-max animate-marquee-right">
                        {[...marqueeTwo, ...marqueeTwo].map((text, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 px-8 font-poppins font-medium  text-[40px] lg:text-[65px] leading-[1] tracking-normal whitespace-nowrap text-[#CBE6D8E0]"
                            >
                                <span>{text}</span>
                                <Image
                                    src={withImageBase("/home/star.png")}
                                    alt="star"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingMarquee;
