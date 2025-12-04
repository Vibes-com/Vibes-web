"use client";

import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Button4 } from "@/components/ui/button4";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

interface SectionProps {
  title: string;
  highlight?: string;
  description: string;
  tags: string[];
  buttonText: string;
  images: string[];
  reverse?: boolean;
}

const SectionWithSlider: FC<SectionProps> = ({
  title,
  highlight,
  description,
  tags,
  buttonText,
  images,
  reverse = false,
}) => {

  const swiperRef = useRef<any>(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
    <div className="sticky-wrapper hide-scrollbar">

      <div className="">
        <style>{`
        @keyframes zoomInFade {
            0% { transform: scale(0.85); opacity: 0.3; }
            100% { transform: scale(1.15); opacity: 1; }
        }
        .zoom-small-to-big {
            animation: zoomInFade 4s ease-in-out forwards;
        }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div
            className={`p-15 md:col-span-5 space-y-6 ${reverse ? "md:order-2" : "md:order-1"
              }`}
          >
            <div className="space-y-2">
              <h2 className="font-poppins font-semibold text-[55px] leading-[123%] tracking-[0] text-[#FFFFFF]">
                {title}
              </h2>

              {highlight && (
                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[55px] leading-[123%] tracking-[0] text-[#FFFFFF]">
                  {highlight}
                </span>
              )}
            </div>

            <p className="font-poppins font-normal text-[16px] leading-[130%] tracking-[0] text-[#FFFFFFDB]">
              {description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-2 border border-white/40 text-[#FFFFFF] rounded-full font-medium text-[14px] leading-[100%] tracking-[0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={goPrev}
                className="w-[48px] h-[48px] rounded-xl border border-white/40 flex items-center justify-center text-white cursor-pointer bg-[rgba(255,255,255,0.5)]">
                <ArrowLeft size={22} />
              </button>

              <button
                onClick={goNext}
                className="w-[48px] h-[48px] rounded-xl border border-white/40 flex items-center justify-center text-white cursor-pointer bg-[rgba(255,255,255,0.5)]"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            <Button4 className="mt-3 p-[20px]">
              {buttonText}
              <ArrowUpIcon className="transform rotate-45" />
            </Button4>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div
            className={`relative md:col-span-7 w-full h-[772px] overflow-hidden ${reverse ? "md:order-1" : "md:order-2"
              }`}
          >
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              autoplay={{ delay: 2000 }}
              speed={1500}
              loop
              className="w-full h-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="slide"
                    className="absolute inset-0 w-full h-full object-cover zoom-small-to-big"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWithSlider;
