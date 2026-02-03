"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { withImageBase } from "@/app/utils/image";

export type BuiltWaySlide = {
  id: string;
  title: string;
  desc: string;
  icon: string;
};

type BuiltWaySliderProps = {
  badgeText: string;
  heading: React.ReactNode;
  description?: string;
  slides: BuiltWaySlide[];
  bgImage?: string;
};

export default function BuiltWaySlider({
  badgeText,
  heading,
  description,
  slides,
  bgImage,
}: BuiltWaySliderProps) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="built-way-wrapper section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
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

        {/* HEADING */}
        <h3 className="text-center font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
          {heading}
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-[#707070] text-[16px] text-center max-w-2xl mx-auto mt-5">
            {description}
          </p>
        )}

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
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
            768: {
              slidesPerView: 1, 
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {[...slides, ...slides].map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
              <div
                className="
                  group relative shadow-sm h-[260px] mt-20 mb-10 rounded-2xl p-4 lg:p-8
                  transition-all duration-300
                  flex flex-col justify-center cursor-pointer
                  bg-white text-[#2B2B2B]
                  hover:bg-[#466E59] hover:text-white
                "
              >
                {/* ICON */}
                <div className="absolute -top-6 right-[-4px] w-20 h-20 rounded-full flex items-center justify-center bg-[#466E59] group-hover:bg-[#F4BE00] border-[7px] border-[#EEF4EE]">
                  <img
                     src={withImageBase(item.icon)}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="brightness-0 invert transition-all duration-300 group-hover:invert-0 group-hover:brightness-0"
                  />
                </div>

                <h3 className="font-poppins font-semibold text-[20px] lg:text-[24px] mb-3">
                  {item.title}
                </h3>

                <p className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[1.45]">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${activeIndex === i ? "bg-[#F4BE00] w-6" : "bg-[#9FB7A8] w-3"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
