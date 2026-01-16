"use client";
import Image from "next/image";
import React from "react";
import {withImageBase} from "@/app/utils/image";
import SlideRight from "../../animations/SlideRight";
import SlideLeft from "../../animations/SlideLeft";

const coreValues = [
    {
        img: "/about/shared-vision.png",
        title: "Shared Vision",
        desc: "Aligning goals to shape purposeful growth and tomorrow’s success.",
    },
    {
        img: "/about/seamless-communication.png",
        title: "Seamless Communication",
        desc: "Building clarity and trust for stronger collaboration in the future.",
    },
    {
        img: "/about/innovation-together.png",
        title: "Innovation Together",
        desc: "Co-creating ideas today that fuel opportunities for tomorrow.",
    },
    {
        img: "/about/sustainable-impact.png",
        title: "Sustainable Impact",
        desc: "Delivering lasting solutions that inspire progress for generations ahead.",
    },
];

const CoreValues = () => {
    return (
        <div className="core-values-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                 
                    <div>
                           <SlideLeft delay={0.5}>
                        <div className="flex justify-start mb-5">

                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Core Values
                                </span>
                            </div>
                        </div>

                        <h2 className="font-poppins font-semibold text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[123%] tracking-[0] text-[#FFFFFF]">
                            Our Core Values,
                        </h2>
                        <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[123%] tracking-[0] text-[#FFFFFF]">Our Driving Force</span>

                        <p className="font-poppins font-normal text-[16px] leading-[130%] tracking-[0] text-[#FFFFFFDB] mt-5">
                            Our core values power every step we take fueling innovation, shaping excellence, and driving us to create meaningful impact for today and a better tomorrow.
                        </p>
                        </SlideLeft>
                    </div>

                 <SlideRight delay={0.5}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        
                        {coreValues.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#FFFFFF] shadow-md rounded-xl p-6 border-b-[5px] border-b-[#F4BE00] hover:-translate-y-1 transition-all"
                            >
                                <div className="flex items-center justify-center h-[60px] w-[60] rounded-sm bg-[#F4BE00]">
                                    <img
                                        src={withImageBase(item.img)}
                                        alt={item.title} 
                                        width={35}
                                        height={35}
                                        className="object-contain"
                                    />
                                </div>

                                <p className="text-[#2b3332] font-semibold text-[18px] leading-[123%]   mt-5">
                                    {item.title}
                                </p>

                                <p className="text-[#707070] font-normal text-[14px] leading-[130%] tracking-[0]  max-w-2xl mx-auto mt-1">{item.desc}</p>
                            </div>
                        ))}
                    
                    </div>
                    </SlideRight>

                </div>
            </div>
        </div>
    );
};

export default CoreValues;
