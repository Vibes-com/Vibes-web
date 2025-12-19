"use client";

import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import BrandingMarquee from "../branding-marquee/BrandingMarquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandingCasestudies = () => {
    return (
        <section className="bg-[#F7F7F5] -mt-[50px] ">
            <div className="w-full mx-auto space-y-32">
                <BrandingMarquee />

                <div className="flex justify-between items-center mb-12 px-20">
                    <div className="flex-1">
                        <div className="flex justify-start mb-5">

                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Work Showcase
                                </span>
                            </div>
                        </div>
                        <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal"> Brand Work</span> That Speaks
                        </h3>

                        <p className="text-[#707070] mt-5 max-w-xl">
                            A showcase of branding projects that highlight clear strategy, strong creativity, and real results across industries.

                        </p>

                    </div>


                    <Button2 className="mt-5 p-[20px]">
                        <span>Explore Case Studies</span>
                        <ArrowUpIcon className="transform rotate-45" />
                    </Button2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-0">
                    <div className="overflow-hidden">
                        <Image
                            src="/assests/img/branding-details/branding-case-img-1.png"
                            alt="Luxury Brand Storytelling"
                            width={720}
                            height={674}
                            className="w-full transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="p-20">
                        <div className="flex-1 ">
                            <h3 className="font-poppins font-medium text-[32px] leading-[1.23] tracking-norma]">
                                Building a <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[32px] leading-[1.23] tracking-normal">New-Age Brand</span>
                            </h3>

                            <p className="text-[#525252] mt-5 max-w-lg">
                                A focused branding approach shaped distinct B2B and B2C identities through research-led rebranding, campaigns, and consistent digital presence.
                            </p>

                            <Button2 className="mt-5 p-0! p-[20px] hover:text-[#F4BE00] bg-transparent  text-[#204667] text-[16px]">
                                <Link href=""><span>Read More</span></Link>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>

                        </div>

                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-0">
                    <div className="p-20">
                        <div className="flex-1 ">
                            <h3 className="font-poppins font-medium text-[32px] leading-[1.23] tracking-norma]">
                                Luxury <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[32px] leading-[1.23] tracking-normal">Brand Storytelling</span>
                            </h3>

                            <p className="text-[#525252] mt-5 max-w-lg">
                                From brand identity and visual systems to interior storytelling, Dubai-based luxury brands are shaped to reflect refined aesthetics and premium appeal.

                            </p>

                            <Button2 className="mt-5 p-0! p-[20px] hover:text-[#F4BE00] bg-transparent  text-[#204667] text-[16px]">
                                <Link href=""><span>Read More</span></Link>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>

                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <Image
                            src="/assests/img/branding-details/branding-case-img-2.png"
                            alt="Building a New Age Brand"
                            width={720}
                            height={674}
                            className="w-full transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-2">
                    <div className="overflow-hidden">
                        <Image
                            src="/assests/img/branding-details/branding-case-img-3.png"
                            alt="Integrated Brand Identity"
                            width={720}
                            height={674}
                            className="w-full transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="p-20">
                        <div className="flex-1 ">
                            <h3 className="font-poppins font-medium text-[32px] leading-[1.23] tracking-norma]">
                                Integrated <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[32px] leading-[1.23] tracking-normal">Brand Identity</span>
                            </h3>

                            <p className="text-[#525252] mt-5 max-w-lg">
                                A focused branding approach shaped distinct B2B and B2C identities through research-led rebranding, campaigns, and consistent digital presence.
                            </p>

                            <Button2 className="mt-5 p-0! p-[20px] hover:text-[#F4BE00] bg-transparent  text-[#204667] text-[16px]">
                                <Link href=""><span>Read More</span></Link>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>

                        </div>
                    </div>
                </div>


                <div className="space-y-8 mb-5!">
                    <div className="overflow-hidden">
                        <Image
                            src="/assests/img/branding-details/branding-case-img-4.png"
                            alt="Brand Campaign Execution"
                            width={1440}
                            height={700}
                            className="w-full transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="w-full ps-20 pt-5 pb-5">
                        <div className="flex-1 ">
                            <h3 className="font-poppins font-medium text-[32px] leading-[1.23] tracking-norma]">
                                Complete <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[32px] leading-[1.23] tracking-normal">Brand Framework </span>
                            </h3>

                            <p className="text-[#525252] mt-5">
                                A comprehensive branding strategy covering name, logo, colour palette, and clear brand guidelines to ensure consistency across all platforms.
                            </p>

                            <Button2 className="mt-5 p-0! p-[20px] hover:text-[#F4BE00] bg-transparent  text-[#204667] text-[16px]">
                                <Link href=""><span>Read More</span></Link>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>

                        </div>
                    </div>
                </div>

                <div className="w-full mb-2">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                        spaceBetween={8}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="w-full"
                    >
                        {[
                            "/assests/img/branding-details/branding-bottom-img-1.png",
                            "/assests/img/branding-details/branding-bottom-img-2.png",
                            "/assests/img/branding-details/branding-bottom-img-3.png",
                            "/assests/img/branding-details/branding-bottom-img-4.png",
                            "/assests/img/branding-details/branding-bottom-img-1.png",
                        ].map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="overflow-hidden">
                                    <Image
                                        src={src}
                                        alt="Integrated Brand Identity"
                                        width={720}
                                        height={674}
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default BrandingCasestudies;
