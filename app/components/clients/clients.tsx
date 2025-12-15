"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const logoConfig: Record<string, string[]> = {
    digital: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],
    branding: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],
    technology: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],
};

const bottomTabs = [
    "healthcare",
    "education",
    "realestate",
    "entertainment",
    "government",
];

export default function MarqueeTabsSlider() {

    const swiperRef = useRef<any>(null);

    const allLogos = useMemo(() => {
        const merged: string[] = [];
        Object.values(logoConfig).forEach((arr) => merged.push(...arr));
        return merged;
    }, []);

    return (
        <section className="w-full section-gap bg-[#466E59] text-white">
            <div className="container mx-auto">

                {/* SINGLE MARQUEE */}
                <div className="overflow-hidden w-[90%] mx-auto mb-14 mt-12">
                    <div className="flex animate-marquee-right gap-5">
                        {[...allLogos, ...allLogos].map((src, i) => (
                            <div
                                key={i}
                                className="min-w-[153px] h-[80px] bg-[#71A68A] flex items-center justify-center px-6 shadow-md border border-[#6f8f7c]"
                            >
                                <img
                                    src={src}
                                    className="max-h-[50px] w-auto hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SLIDER WITH CUSTOM ARROWS */}
                <div className="relative w-full max-w-3xl mx-auto">

                    <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />

                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={3}
                        spaceBetween={20}
                        className="py-6"
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {bottomTabs.map((t) => (
                            <SwiperSlide key={t}>
                                <div className="font-[Poppins] font-medium text-[16px] leading-[1.23] tracking-normal px-2 py-2 rounded-sm  text-center capitalize bg-[#D9D9D908] text-[#FFFFFFA8] cursor-pointer">
                                    {t}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <NextArrow onClick={() => swiperRef.current?.slideNext()} />

                </div>
            </div>

            {/* Animation */}
            <style>{`
                .animate-marquee-right {
                    animation: marquee-right 25s linear infinite;
                }
                @keyframes marquee-right {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}

/* ---------------- CUSTOM ARROWS ---------------- */

const NextArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute right-[-60px] top-[55%] -translate-y-1/2 z-20
            p-2 border border-white/40 cursor-pointer rounded-md bg-[#FFFFFFB0]
        "
    >
        <ArrowRight size={26} color="#FFFFFF" />
    </button>
);

const PrevArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute left-[-60px] top-[55%] -translate-y-1/2 z-20
            p-2 border border-white/40 cursor-pointer rounded-md bg-[#FFFFFFB0]
        "
    >
        <ArrowLeft size={26} color="#FFFFFF" />
    </button>
);
