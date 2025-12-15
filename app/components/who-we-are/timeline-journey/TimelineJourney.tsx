"use client";

import React, { useRef } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const data = [
    {
        year: "2025",
        img: "/assests/img/about/2025.png",
        text: "Today, we stand proud not just for achieving the targets but for fulfilling them in complete alignment with Vibe’s vision.",
    },
    {
        year: "2024",
        img: "/assests/img/about/2024.png",
        text: "We sharpened our focus on targets, aligning our actions with long-term goals.",
    },
    {
        year: "2023",
        img: "/assests/img/about/2023.png",
        text: "This year marked a fresh beginning as we officially launched our branding division, adding it as a new pillar of strength.",
    },
    {
        year: "2022",
        img: "/assests/img/about/2022.png",
        text: "Our journey evolved: digital and tech began charting their individual paths, and EY became one more valued partner.",
    },
    {
        year: "2021",
        img: "/assests/img/about/2021.png",
        text: " The world slowed down with Covid, but our spirit, resilience, and motivation stood stronger than ever.",
    },
    {
        year: "2020",
        img: "/assests/img/about/2020.png",
        text: " Growth followed in naturally, as our digital and tech teams flourished into a 30-member family.",
    },
    {
        year: "2019",
        img: "/assests/img/about/2019.png",
        text: " Widex India joined hands with us in a larger alignment, strengthening our role as a trusted partner.",
    },
    {
        year: "2018",
        img: "/assests/img/about/2018.png",
        text: " Our journey expanded as more brands believed in our digital capabilities and joined us.",
    },
    {
        year: "2017",
        img: "/assests/img/about/2017.png",
        text: " Trust deepened as we handled more technical projects, including the nationally significant Operation Clean Money during demonetization, inaugurated by Shri Arun Jaitley, a milestone we hold with pride.",
    },
    {
        year: "2016",
        img: "/assests/img/about/2016.png",
        text: "Brought our first long-term PwC project, MOHUA, cementing a relationship built on trust.",
    },
    {
        year: "2015",
        img: "/assests/img/about/2015.png",
        text: "The fusion of technology and marketing was no longer just an idea, it became the heart of our story.",
    },
    {
        year: "2014",
        img: "/assests/img/about/2014.png",
        text: " We began exploring a rebranding journey, realizing that growth often comes with reinvention.",
    },
    {
        year: "2013",
        img: "/assests/img/about/2013.png",
        text: " With a team of 4-5 people, we stepped into Digital Marketing Services.",
    },
    {
        year: "2012",
        img: "/assests/img/about/2012.png",
        text: " A breakthrough year for us when PwC entrusted us with our first tech project.",
    },
    {
        year: "2011",
        img: "/assests/img/about/2011.png",
        text: "Our very first dream took shape through Project RX Care.",
    },
    {
        year: "2010",
        img: "/assests/img/about/2010.png",
        text: "Born with a vision, determination, and the courage to create impact.",
    },
];

export default function TimelineVertical() {
    const swiperRef: any = useRef(null);

    return (
        <div className="timeline-journey-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                    Our <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Journey</span>

                </h3>
                <div className="relative ">

                    {/* TOP ARROW */}
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="up-arrow glow-up float-up-down absolute top-[-17px] left-1/2 -translate-x-1/2 z-30 p-3"
                    >
                        <img
                            src="/assests/img/about/up-arrow.png"
                            alt="Up Arrow"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* CENTER DOTTED LINE */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-[2px] border-dashed border-[#535353]"></div>

                    <Swiper
                        direction="vertical"
                        slidesPerView={2}
                        slidesPerGroup={2}
                        spaceBetween={60}
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="h-[760px] mt-16"
                    >
                        {data.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative mt-20 w-full flex items-center justify-between">

                                        {/* LEFT SIDE */}
                                        {isLeft ? (
                                            <div className="w-1/2 flex justify-start pr-10">
                                                <div className="">
                                                    <Image
                                                        src={item.img}
                                                        width={300}
                                                        height={300}
                                                        alt=""
                                                        className="w-full h-[244px] object-contain rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-1/2 flex flex-col ">
                                                <h2 className="font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">{item.year}</h2>
                                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-start  mt-3 w-90">{item.text}</p>
                                            </div>
                                        )}

                                        {/* MIDDLE ICON */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                            <div className="timeline-icon bg-white">
                                                <Image
                                                    src="/assests/img/about/journey.png"
                                                    alt="img" priority unoptimized
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>

                                        {/* RIGHT SIDE */}
                                        {!isLeft ? (
                                            <div className="w-1/2 flex justify-end pl-10">
                                                <div className="">
                                                    <Image
                                                        src={item.img}
                                                        width={300}
                                                        height={300}
                                                        alt=""
                                                        className="w-full h-[244px] object-contain rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className=" flex flex-col ">
                                                <h2 className="font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">{item.year}</h2>
                                                <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-start mt-3 w-90">{item.text}</p>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* BOTTOM ARROW */}
                    <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="arrows-down absolute bottom-0 left-1/2 -translate-x-1/2 z-50  shadow-lg animate-arrowBounce"
                    >

                    </button>

                </div>
            </div>
        </div >
    );
}
