"use client";
import Image from "next/image";
import Link from "next/link";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BlogCardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    link: string;
}

const blogs: BlogCardProps[] = [
    {
        id: "101",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/101",
    },
    {
        id: "102",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/102",
    },
    {
        id: "103",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/103",
    },
];

export default function OurBlogs() {
    return (
        <section className="blogs-wrapper section-gap relative w-full bg-[#F3EFE4]">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-center mb-12">
                    <div className="flex-1">
                        <div className="flex justify-start mb-5">

                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Blogs
                                </span>
                            </div>
                        </div>
                        <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                            Tech Ideas & Insights
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Insights</span>
                        </h3>

                        <p className="text-[#525252] mt-5 ">
                            Explore curated articles on emerging tech, smart solutions, and expert<br /> perspectives from Vibes built to inform, inspire, and accelerate digital growth.

                        </p>

                    </div>


                    <Button2 className="mt-5 p-[20px]">
                        <span>Explore Our Blogs</span>
                        <ArrowUpIcon className="transform rotate-45" />
                    </Button2>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2500}
                    className="pb-10"
                >
                    {blogs.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-[#ECF3EE] p-8 mb-8 border border-[#E5E5E5] hover:shadow-xl transition-all duration-300">
                                <p className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-[#636060] mb-4">{item.date}</p>
                                <h4 className="font-poppins font-semibold text-[24px] leading-[130%] tracking-[0px] text-[#464646] mb-2">
                                    {item.title}
                                </h4>
                                <p className="font-poppins font-normal text-[14px] leading-[130%] tracking-[0px] text-[#606060]">
                                    {item.description}
                                </p>
                                <Button3 className=" text-[#204667] flex items-center gap-2">
                                    <span>View More</span>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}
