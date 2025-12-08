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
        text: "Today, we stand proud not just for achieving the targets but for fulfilling them in complete alignment with Vibe’s vision.",
    },
    {
        year: "2023",
        img: "/assests/img/about/2024.png",
        text: "A year of strategic advancements.",
    },
    {
        year: "2022",
        img: "/assests/img/about/2025.png",
        text: "Expansion phase with new teams.",
    },
    {
        year: "2021",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2020",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2019",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2018",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2017",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2016",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2015",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2014",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2013",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2012",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2011",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
    {
        year: "2010",
        img: "/assests/img/about/2025.png",
        text: "Rebranding and process improvement.",
    },
];

export default function TimelineVertical() {
    const swiperRef: any = useRef(null);

    return (
        <div className="timeline-journey-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="relative ">

                    {/* TOP ARROW */}
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-50 bg-yellow-500 p-3 rounded-full shadow-lg"
                    >
                        <ArrowUp size={22} className="text-white" />
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
                                                <h2 className="text-3xl font-bold text-gray-700">{item.year}</h2>
                                                <p className="text-gray-600 text-sm mt-3 w-72">{item.text}</p>
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
                                                <h2 className="text-3xl font-bold text-gray-700">{item.year}</h2>
                                                <p className="text-gray-600 text-sm mt-3 w-72">{item.text}</p>
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
