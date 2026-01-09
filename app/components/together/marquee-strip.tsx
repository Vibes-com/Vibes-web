"use client";
import React from "react";
import Image from 'next/image'
import {withImageBase} from "@/app/utils/image";

const items = [
    "Technology",
    "Creative Excellence",
    "Digital Marketing",
    "UI/UX",
    "Branding",
];

const MarqueeTabs = () => {
    return (
        <div className="w-full overflow-hidden bg-[#2E5C3F] py-4 relative border-y border-white/30">
            <div className="flex gap-20 whitespace-nowrap animate-marquee">
                {items.map((label, index) => (
                    <span
                        key={index}
                        className="text-white text-[18px] font-medium flex items-center gap-10"
                    >
                        {label}
                        <Image
                            src={withImageBase("/home/star.png")}
                            alt=''
                            width={100}
                            height={100}
                        />
                    </span>
                ))}

                {items.map((label, index) => (
                    <span
                        key={`duplicate-${index}`}
                        className="text-white text-[18px] font-medium flex items-center gap-10"
                    >
                        {label}
                        <Image
                           src={withImageBase("/home/star.png")}
                            alt=''
                            width={100}
                            height={100}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MarqueeTabs;
