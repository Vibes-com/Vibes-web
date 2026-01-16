"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import {withImageBase} from "@/app/utils/image";

const slides = [
    {
        title: "Application Testing",
        desc: "Ensuring flawless performance with rigorous, end-to-end quality checks.",
        icon: "/web-development/built-way-icon-1.png",
    },
    {
        title: "UI/UX Design",
        desc: "Crafting intuitive, user-first designs that elevate every digital interaction.",
        icon: "/web-development/built-way-icon-2.png",
    },
    {
        title: "CMS Development",
        desc: "Building scalable, easy-to-manage content systems tailored to your workflow.",
        icon: "/web-development/built-way-icon-3.png",
    },
    {
        title: "Application Testing",
        desc: "Ensuring flawless performance with rigorous, end-to-end quality checks.",
        icon: "/web-development/built-way-icon-1.png",
    },
    {
        title: "UI/UX Design",
        desc: "Crafting intuitive, user-first designs that elevate every digital interaction.",
        icon: "/web-development/built-way-icon-2.png",
    },
    {
        title: "CMS Development",
        desc: "Building scalable, easy-to-manage content systems tailored to your workflow.",
        icon: "/web-development/built-way-icon-3.png",
    },
];

export default function BuiltWay() {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="built-way-wrapper section-gap bg-[#EEF4EE] ">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Customized Soultions for you
                        </span>
                    </div>
                </div>

                <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">Built <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Your Way</span>

                </h3>
                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mt-5">Vibes offers flexible, modular solutions whether you need a full build or just a specific feature. Every block is delivered with precision, performance, and complete scalability.</p>

                {/* SLIDER */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex % slides.length)
                    }
                    slidesPerView={1.2}
                    centeredSlides
                    loop
                    freeMode
                    speed={6000}
                    spaceBetween={32}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    className="pb-14"
                >
                    {[...slides, ...slides].map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div
                                className="
                    group relative h-[260px] mt-20 mb-10 rounded-2xl p-8
                    transition-all duration-300
                    flex flex-col justify-center cursor-pointer
                    bg-[#FFFFFF] text-[#2B2B2B]
                    hover:bg-[#466E59] hover:text-white 
                  "
                            >
                                {/* ICON */}
                                <div
                                    className="group absolute -top-3 right-[-4px] w-20 h-20 rounded-full flex items-center justify-center transition bg-[#466E59] group-hover:bg-white border-[7px] border-[#EEF4EE]">
                                    <img
                                       src={withImageBase(item.icon)}
                                        alt={item.title}
                                        width={26}
                                        height={26}
                                        className="invert-0 transition-all duration-300 group-hover:invert"
                                    />
                                </div>

                                <h3 className="font-poppins font-semibold text-[24px] leading-[1] tracking-normal mb-3">
                                    {item.title}
                                </h3>

                                <p className="font-poppins font-medium text-[18px] leading-[1.45] tracking-normal">
                                    {item.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* PAGINATION (ACTIVE WORKING) */}
                <div className="flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            className={`
                h-3 rounded-full transition-all duration-300
                ${activeIndex === i
                                    ? "bg-[#F4BE00] w-6"
                                    : "bg-[#9FB7A8] w-3"
                                }
              `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
