"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import SlideUp from "../animations/SlideUp";
import { withImageBase } from "@/app/utils/image";

const counters = [
    { value: 15, label: "Years of Operation" },
    { value: 700, label: "Projects Delivered" },
    { value: 500, label: "Clients Served" },
    { value: 50, label: "Team Members" },
    { value: 8, label: "Average period of client collaboration (years)" },
];

const galleryImages = [
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
    "/home/miles-bg-1.png",
];

export default function MilestoneSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setStartCount(true),
            { threshold: 0.3 }
        );
        sectionRef.current && observer.observe(sectionRef.current);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full section-gap overflow-hidden">

            <Image
               src={withImageBase("/home/milestone-bg.png")} fill alt="main-bg" priority unoptimized className="absolute inset-0 object-cover z-0" />

           <div className="absolute z-99 inset-0 hidden lg:grid grid-cols-14 grid-rows-5 gap-0 pointer-events-none">
                {galleryImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full pointer-events-auto"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {/* <Image
                             src={withImageBase(src)}
                            alt="Vibes Milestone"
                            fill
                            className={` object-cover transition-opacity duration-[900ms] ease-out
    ${activeIndex === index ? "opacity-60" : "opacity-0 delay-[400ms]"}
  `}
                        /> */}
                   {/* gradient color */}
      <div
  className={`absolute inset-0 transition-opacity duration-700 ease-out
    ${activeIndex === index ? "opacity-90" : "opacity-0"}
    blur-[22px]
  `}
  style={{
    background:
      "linear-gradient(135deg, rgba(92,121,108,0.9), rgba(92,121,108,0.8), rgba(244,190,0,0.8))",
  }}
></div>
                 {/* gradient color */}

                    </div>
                ))}
            </div>

            <div className="relative z-40 max-w-6xl mx-auto text-center px-6">
                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Key Performance Insights
                        </span>
                    </div>
                </div>
                <h3 className="font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]  leading-[123%] tracking-normal text-[#FFFFFF]"><span className="highlight-title relative z-9 w-fit">Milestone</span> Metrics</h3>

                <p className="text-[#FFFFFFDB] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-3xl mx-auto mb-5 sm:mb-15  md:mb-15 lg:mb-15 xl:mb-15 2xl:mb-5 mt-5">
                    A clear snapshot of the brands, projects, and successes we’ve built together, reflecting the scale of our partnerships and the momentum powering every milestone.
                </p>
                {/* helloworld */}
                <div className="lg:grid grid-cols-5 gap-10">
                    {counters.map((item, idx) => (
                        <CounterBox key={idx} value={item.value} label={item.label} animate={startCount} />
                    ))}
                </div>
            </div>

            {/* <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/20 z-30"></div> */}
        </section>
    );
}

function CounterBox({ value, label, animate }: { value: number; label: string; animate: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animate) return;
        let current = 0;
        const speed = value > 300 ? 6 : 2;
        const timer = setInterval(() => {
            current += speed;
            console.log(speed)
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 20);
    }, [animate, value]);

    return (
        <SlideUp delay={0.5}>
            <div className="flex flex-col items-center text-center">
                <p className="pt-4 text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] font-semibold text-[#FFFFFF] leading-none">{count}+</p>
                <p className="pb-5 text-sm text-[#FFFFFF] mt-3 max-w-[170px] leading-snug">{label}</p>
            </div>
        </SlideUp>
    );
}
