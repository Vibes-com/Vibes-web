"use client";

import Link from "next/link";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

const BrandingDetailsHero: React.FC = () => {
    return (
        <div className="branding-details-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 ">
                        <h1 className="font-poppins font-normal text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Positioning  Brands

                            <br />
                            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Driving Impact.</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF]">
                            From insight to identity, built for business impact
                        </p>
                        <div className=" mt-4">
                            <Link href="contact-us">
                                <Button2 className="mt-5 p-[20px] hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent bg-[#FFFFFF] text-[#204667]">
                                    <span>Create a Stronger Brand</span>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button2>
                            </Link>
                        </div>
                        <div className=" mt-9 max-w-7xl me-auto  flex flex-col md:flex-row items-center justify-center gap-5 w-max">
                            <div className="flex items-center -space-x-5 me-auto">
                                <div className="w-[55px] h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <Image
                                        src="/assests/img/branding-details/brand-client-1.png"
                                        alt="client logo"
                                        width={55}
                                        height={55}
                                        unoptimized
                                    />
                                </div>
                                <div className="w-[55px] h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <Image
                                        src="/assests/img/branding-details/brand-client-2.png"
                                        alt="client logo"
                                        width={55}
                                        height={55}
                                        unoptimized
                                    />
                                </div>
                                <div className="w-[55px] h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <Image
                                        src="/assests/img/branding-details/brand-client-3.png"
                                        alt="client logo"
                                        width={55}
                                        height={55}
                                        unoptimized
                                    />
                                </div>

                                <div className="w-[55px] h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <Image
                                        src="/assests/img/branding-details/brand-client-4.png"
                                        alt="client logo"
                                        width={55}
                                        height={55}
                                        unoptimized
                                    />
                                </div>

                            </div>
                            <h2 className="font-poppins font-semibold text-[16px] leading-[132%] tracking-normal text-[#FFFFFF]">
                                700+ Clients
                            </h2>
                        </div>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="col-span-6"></div>
                </div>
            </div>
        </div >
    );
};

export default BrandingDetailsHero;
