"use client";

import Image from "next/image";
import React from "react";

const MissionVision: React.FC = () => {
    return (
        <div className="mission-vision-wrapper section-gap bg-[#F7F2E7]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="grid grid-cols-12 gap-10 items-center">

                    <div className="col-span-12 md:col-span-6 relative ">
                        <div className="rounded-xl overflow-hidden p-1">
                            <Image
                                src="/assests/img/about/together-img-1.jpg"
                                alt="team main" priority unoptimized
                                width={390}
                                height={510}
                                className="rounded-xl shadow-xl border-[5px] border-white "
                            />
                        </div>

                        <div className="absolute bottom-[-35px] right-[20px] md:right-[90px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/assests/img/about/together-img-2.jpg"
                                alt="team small" priority unoptimized
                                width={220}
                                height={330}
                                className="border-[5px] border-white rounded-xl together-small-img object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-16 md:mt-0 ps-0 md:ps-10">
                        <div className="flex justify-start mb-5">

                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Mission Vision

                                </span>
                            </div>
                        </div>

                        <h3 className=" font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Stronger Growth,</span>Shared Future

                        </h3>

                        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                            We harness creativity, technology, and strategy to build meaningful growth, trust, and long-term success.
                        </p>

                        <div className="grid grid-cols-12 mt-8 gap-4">
                            <div className="col-span-2 md:col-span-1  flex items-center justify-center h-[40px] w-[40] rounded-full bg-[#F4BE00]">
                                <Image
                                    src="/assests/img/about/mission.png"
                                    alt="mission icon" priority unoptimized
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div className="col-span-10 md:col-span-11 ps-3">
                                <h4 className="text-[#2b3332] font-semibold text-[20px] leading-[123%] mb-3">Mission</h4>
                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                                    Our mission is to empower businesses with innovative strategies and digital excellence, fostering collaboration, trust, and measurable growth that creates lasting impact for clients and communities.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 mt-8 gap-4">
                            <div className="col-span-2 md:col-span-1 flex items-center justify-center h-[40px] w-[40] rounded-full bg-[#F4BE00]">
                                <Image
                                    src="/assests/img/about/vision.png"
                                    alt="vision icon" priority unoptimized
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div className="col-span-10 md:col-span-11 ps-3">
                                <h4 className="text-[#2b3332] font-semibold text-[20px] leading-[123%] mb-3">Vision</h4>
                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">
                                    Our vision is to be a trusted partner in digital transformation, uniting creativity and technology to shape impactful journeys that inspire progress, connection, and sustainable success.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MissionVision;
