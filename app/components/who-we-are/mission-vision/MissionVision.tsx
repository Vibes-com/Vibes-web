"use client";

import Image from "next/image";
import React from "react";
import {withImageBase} from "@/app/utils/image";
import SlideRight from "../../animations/SlideRight";
import SlideLeft from "../../animations/SlideLeft";

const MissionVision: React.FC = () => {
    return (
        <div className="mission-vision-wrapper section-gap bg-[#F7F2E7]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="grid grid-cols-12 gap-0 lg:gap-10 items-center">
                  
                    <div className="col-span-12 md:col-span-12 lg:col-span-6 relative ">
                           <SlideLeft delay={0.5}>
                        <div className="rounded-xl overflow-hidden p-1">
                            <img
                                src={withImageBase("/about/together-img-1.jpg")}
                                alt="vibes Team"  
                                width={390}
                                height={510}
                                className="rounded-xl shadow-xl border-[5px] border-white w-[70%] "
                            />
                        </div>

                        <div className="absolute bottom-[-35px] right-[25px] md:right-[80px] lg:right-[90px] xl:right-[90px] 2xl:right-[90px] rounded-xl overflow-hidden shadow-xl">
                            <img
                                 src={withImageBase("/about/together-img-2.jpg")}
                                alt="vibes Team"  
                                width={220}
                                height={330}
                                className="border-[5px] border-white rounded-xl together-small-img object-cover"
                            />
                        </div>
                        </SlideLeft>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-6 mt-16 md:mt-0 ps-0 md:ps-10">
                        <SlideRight delay={0.5}>
                        <div className="flex justify-start md:pt-10 lg:pt-0 mb-5">

                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Mission Vision

                                </span>
                            </div>
                        </div>

                        <h3 className=" font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-norma]">
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal">Stronger Growth,</span><br/> Shared Future

                        </h3>

                        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                            We harness creativity, technology, and strategy to build meaningful growth, trust, and long-term success.
                        </p>

                        <div className="grid grid-cols-12 mt-8 gap-4">
                            <div className="col-span-12 md:col-span-1  flex items-center justify-center h-[40px] w-[40] rounded-full bg-[#F4BE00]">
                                <img
                                     src={withImageBase("/about/mission.png")}
                                    alt="Vibes mission"  
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-11 ps-3">
                                <h4 className="text-[#2b3332] font-semibold text-[20px] leading-[123%] mb-3">Mission</h4>
                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                                    Our mission is to empower businesses with innovative strategies and digital excellence, fostering collaboration, trust, and measurable growth that creates lasting impact for clients and communities.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 mt-8 gap-4">
                            <div className="col-span-2 md:col-span-1 flex items-center justify-center h-[40px] w-[40] rounded-full bg-[#F4BE00]">
                                <img
                                    src={withImageBase("/about/vision.png")}
                                    alt="Vibes vision"  
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-11 ps-3">
                                <h4 className="text-[#2b3332] font-semibold text-[20px] leading-[123%] mb-3">Vision</h4>
                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                                    Our vision is to be a trusted partner in digital transformation, uniting creativity and technology to shape impactful journeys that inspire progress, connection, and sustainable success.
                                </p>
                            </div>
                        </div>
                  </SlideRight>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MissionVision;
