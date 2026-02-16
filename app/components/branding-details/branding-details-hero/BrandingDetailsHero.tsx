"use client";

import Link from "next/link";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import {withImageBase} from "@/app/utils/image";

const BrandingDetailsHero: React.FC = () => {
    return (
        <div className="branding-details-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12">
                        <h1 className="font-poppins font-normal hero-heading pt-0 mt-[-150px] md:mt-[50px] lg:mt-[0px] lg:pt-15 text-[32px] sm:text-[60px] md:text-[30px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] tracking-normal capitalize text-[#FFFFFF]">
                            Positioning  Brands

                            <br />
                            <span className="hero-highlight hero-heading relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[35px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Driving Impact.</span>
                        </h1>

                        <p className="mt-10 font-poppins font-semibold text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[128%] tracking-normal capitalize text-[#FFFFFF] md:max-w-[400px]  lg:max-w-2xl">
                            From insight to identity, built for business impact
                        </p>
                        <div className=" mt-4">
                            <Link href="/contact-for-digital-requirements">
                                <Button2 className="mt-5 hidden md:hidden lg:flex sm:flex cursor-pointer text-[12px] lg:text-[18px]  p-[10px] lg:p-[20px] hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent bg-[#FFFFFF] text-[#204667]">
                                    <span>Create a Stronger Brand</span>
                                    <ArrowUpIcon className="transform rotate-45"/>
                                </Button2>
                            </Link>
                        </div>
                        <div className=" mt-9 max-w-7xl me-auto hidden md:hidden lg:flex sm:flex flex-col md:flex-row items-center justify-center gap-5 w-max">
                            <div className="flex items-center -space-x-5 me-auto">
                                <div className="w-[35px] h-[35px] lg:w-[55px] lg:h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <img
                                         src={withImageBase("/branding-details/logo creation company in Delhi NCR -vibes communications.png")}
                                        alt="logo creation company in Delhi NCR -vibes communications"
                                        width={55}
                                        height={55}
                                    />
                                </div>
                                <div className="w-[35px] h-[35px] lg:w-[55px] lg:h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <img
                                        src={withImageBase("/branding-details/logo design marketing agency-vibes-communications.png")}
                                        alt="logo design marketing agency-vibes-communications"
                                        width={55}
                                        height={55}
                                        
                                    />
                                </div>
                                <div className="w-[35px] h-[35px] lg:w-[55px] lg:h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <img
                                        src={withImageBase("/branding-details/logo desinging company-vibes communicattions.png")}
                                        alt="logo desinging company-vibes communicattions"
                                        width={55}
                                        height={55}
                                        
                                    />
                                </div>

                                <div className="w-[35px] h-[35px] lg:w-[55px] lg:h-[55px] rounded-full border border-white/70 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]">
                                    <img
                                      src={withImageBase("/branding-details/Logo design agency-Vibes  Communications.png")}
                                        alt="Logo design agency-Vibes  Communications"
                                        width={55}
                                        height={55}
                                        
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
