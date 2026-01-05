"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface MarqueeTabsSliderProps {
  badgeText: string;
  title: string;
  highlightTitle?: string;
  description: string;
  logos: string[];
  tabs: string[];
  bgColor?: string;
}

const MarqueeTabsSlider = ({
  badgeText,
  title,
  highlightTitle,
  description,
  logos,
  tabs,
  bgColor = "#466E59",
}: MarqueeTabsSliderProps) => {
  const swiperRef = useRef<any>(null);

  const marqueeLogos = useMemo(() => {
    return [
      "/assests/img/digital-m-details/digital-icon-1.png",
      "/assests/img/digital-m-details/digital-icon-2.png",
      "/assests/img/digital-m-details/digital-icon-3.png",
      "/assests/img/digital-m-details/digital-icon-4.png",
      "/assests/img/digital-m-details/digital-icon-5.png",
      "/assests/img/digital-m-details/digital-icon-6.png",
      "/assests/img/digital-m-details/digital-icon-7.png",
      "/assests/img/digital-m-details/digital-icon-1.png",
      "/assests/img/digital-m-details/digital-icon-2.png",
      "/assests/img/digital-m-details/digital-icon-3.png",
      "/assests/img/digital-m-details/digital-icon-4.png",
      "/assests/img/digital-m-details/digital-icon-5.png",
      "/assests/img/digital-m-details/digital-icon-6.png",
      "/assests/img/digital-m-details/digital-icon-7.png",

    ];
  }, [logos]);

  return (
    <section
      className="clients-wrapper section-gap">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        {/* BADGE */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badgeText}
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-center font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[123%] text-white">
          {highlightTitle && (
            <span className="highlight relative z-9">{highlightTitle} </span>
          )}
          {title}
        </h3>

        {/* DESC */}
        <p className="text-[#FFFFFFDB] text-[16px] text-center max-w-2xl mx-auto mt-5 mb-16">
          {description}
        </p>

        {/* MARQUEE */}
        <div className="overflow-hidden w-[95%] mx-auto my-12">
          <div className="flex animate-marquee-right gap-5">
            {marqueeLogos.map((src, i) => (
              <div
                key={i}
                className="min-w-[153px] h-[80px] bg-[#71A68A]
                flex items-center justify-center px-6
                shadow-md border border-[#6f8f7c]"
              >
                <img src={src} className="max-h-[50px] w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* TABS SLIDER */}
        <div className="relative w-full max-w-3xl mx-auto">
          <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            spaceBetween={20}
            className="py-6"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {tabs.map((tab) => (
              <SwiperSlide key={tab}>
                <div
                  className=" mx-15 lg:mx-0 font-poppins font-medium text-[16px]
                  px-2 py-2 rounded-sm text-center capitalize
                  bg-[#D9D9D908] text-[#FFFFFFA8] cursor-pointer"
                >
                  {tab}
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
};

export default MarqueeTabsSlider;

/* ---------- ARROWS ---------- */

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-[0px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-20
    p-2 border border-white/40 rounded-md bg-[#FFFFFFB0]"
  >
    <ArrowRight size={26} color="#FFFFFF" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-[0px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-20
    p-2 border border-white/40 rounded-md bg-[#FFFFFFB0]"
  >
    <ArrowLeft size={26} color="#FFFFFF" />
  </button>
);
