"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button2 } from "@/components/ui/button2";
import { Button3 } from "@/components/ui/button3";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SlideUp from "../animations/SlideUp";

export default function CaseStudies() {
    const cards = [
        {
            title: "Interio Haven",
            img: "/assests/img/home/interio-heaven-img.jpg",
            tags: ["Branding", "Creative", "Product Design"],
        },
        {
            title: "Maha Kumbh Mela 2025",
            img: "/assests/img/home/mahakumbh-img.png",
            tags: ["Branding", "Creative", "Product Design"],
        },
        {
            title: "Tomorrow’s India",
            img: "/assests/img/home/tomarrow-india-img.jpg",
            tags: ["Branding", "Creative", "Product Design"],
        },
        {
            title: "Interio Haven",
            img: "/assests/img/home/interio-heaven-img.jpg",
            tags: ["Branding", "Creative", "Product Design"],
        },
        {
            title: "Maha Kumbh Mela 2025",
            img: "/assests/img/home/mahakumbh-img.png",
            tags: ["Branding", "Creative", "Product Design"],
        },
        {
            title: "Tomorrow’s India",
            img: "/assests/img/home/tomarrow-india-img.jpg",
            tags: ["Branding", "Creative", "Product Design"],
        },
    ];


    return (
        <section className="casestudies-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex justify-start mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full bg-[#F4BE00]"
                        ></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            CASE STUDIES
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-poppins font-medium text-[48px] leading-[123%] tracking-normal">Vision to <span className="highlight font-semibold relative z-9 w-fit">Verified Results</span></h3>
                        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0]  max-w-2xl mx-auto  mt-5">Turning brand challenges into growth stories with strategies to solve, scale, and sustain showing how clear vision and 360° digital expertise drive results.</p>
                    </div>

                    <Button2 className="mt-5 p-[20px] hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent">
                        <span>Explore Case Studies</span>
                        <ArrowUpIcon className="transform rotate-45" />
                    </Button2>
                </div>
                <SlideUp delay={0.5}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 2800 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mt-16 pb-12"
                >
                    
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-2xl mb-5 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                                <div className="relative w-full h-[280px] rounded-xl overflow-hidden group">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-90"
                                    />
                                </div>

                                <h3 className="mt-5 text-[#1F1F1F] font-poppins font-semibold text-[24px] leading-[100%] tracking-[0]">{card.title}</h3>

                                <div className="flex  items-center gap-3 mt-4 justify-between">
                                    <div className="flex  gap-3">
                                        {card.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 bg-[#F2F4F7] text-[10px] rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button3 className="text-[#204667] p-[5px] flex items-center gap-2 hover:text-[#F4BE00]">
                                        <span>View More</span>
                                        <ArrowUpIcon className="transform rotate-45" />
                                    </Button3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    ))}
                    
                </Swiper>
                </SlideUp>
            </div>
        </section>
    );
}
