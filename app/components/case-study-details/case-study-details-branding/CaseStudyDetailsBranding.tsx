"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

const CaseStudyDetailsBranding = () => {
    return (
        <div className="case-study-details-branding-wrapper ">

            <div className="w-full mb-10">
                <div className="flex-1">
                    <h3 className=" mb-3 pb-5 text-center font-poppins font-medium text-[65px] leading-[1.23] tracking-norma]">
                        <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[48px] leading-[1.23] tracking-normal">Branding</span>
                    </h3>


                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    spaceBetween={8}
                    slidesPerView={1}
                    pagination={{
                        el: ".case-study-pagination-1",
                        clickable: true,
                    }}
                    className="w-full"
                >
                    {[
                        "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                        "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                        "/assests/img/case-study-details/case-study-details-slider-img-1.jpg",
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden">
                                <Image
                                    src={src}
                                    alt="Case Study"
                                    width={720}
                                    height={674}
                                    unoptimized
                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="case-study-pagination-1 mt-4 text-center"></div>
            </div>

            <div className="w-full mb-20">
                <div className="flex-1">
                    <h3 className=" mb-3 pb-5 text-center font-poppins font-medium text-[65px] leading-[1.23] tracking-norma]">
                        <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[48px] leading-[1.23] tracking-normal">Creative Display</span>
                    </h3>


                </div>
                <Swiper
                    modules={[Autoplay]}
                    loop
                    spaceBetween={8}
                    slidesPerView={4}
                    pagination={{
                        el: ".case-study-pagination-2",
                        clickable: true,
                    }}
                    className="w-full"
                >
                    {[
                        "/assests/img/case-study-details/case-study-bottom-img-1.jpg",
                        "/assests/img/case-study-details/case-study-bottom-img-2.jpg",
                        "/assests/img/case-study-details/case-study-bottom-img-3.jpg",
                        "/assests/img/case-study-details/case-study-bottom-img-4.jpg",
                        "/assests/img/case-study-details/case-study-bottom-img-2.jpg",
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden">
                                <Image
                                    src={src}
                                    alt="Case Study"
                                    width={720}
                                    height={674}
                                    unoptimized
                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="case-study-pagination-2 mt-4 text-center"></div>
            </div>


        </div>
    )
}

export default CaseStudyDetailsBranding