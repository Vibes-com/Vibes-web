"use client";

import { FC, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button4 } from "@/components/ui/button4";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";
import Link from "next/link";

interface SectionProps {
  heading: string;
  title: string;
  highlight?: string;
  description: string;
  tags: string[];
  buttonText: string;
  images: string[];
  reverse?: boolean;
  btnlink?:string;
}

const SectionWithSlider: FC<SectionProps> = ({
  heading,
  title,
  highlight,
  description,
  tags,
  buttonText,
  images,
  reverse = false,
  btnlink
}) => {
  const swiperRef = useRef<any>(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  const handleAnimationEnd = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="sticky-wrapper hide-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-0">

        {/* LEFT SIDE CONTENT */}
        
        <div
          className={`p-15 md:col-span-5 space-y-6 ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          <div className="space-y-2">
            <div className="flex justify-start mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                  {heading}
                </span>
              </div>
            </div>
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

          <div className="flex items-center gap-4 mt-4">
            
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
          <Link href={`${btnlink}`}>
            <Button4 className="mt-1 cursor-pointer p-[18px] hover:text-[#F4BE00]">
              {buttonText}
              <ArrowUpIcon className="transform rotate-45" />
            </Button4>
          </Link>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div
          className={`relative md:col-span-7 w-full h-[772px] overflow-hidden ${reverse ? "md:order-1" : "md:order-2"}`}
        >
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={0}
            allowTouchMove={false}
            autoplay={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-full"
          >
            <style>{`
              :root { --cut-time: 3s; }

              .cut-wrapper {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
              }

              .img-next,
              .img-current {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              /* LEFT → RIGHT animation */
              .ltr {
                animation: cutLTR var(--cut-time) linear forwards;
              }

              

              @keyframes cutLTR {
                0%   { clip-path: inset(0 100% 0 0); } 
                100% { clip-path: inset(0 0 0 0); }
              }

              
            `}</style>

            {images.map((img, i) => {
              const nextIndex = (i + 1) % images.length;


              return (
                <SwiperSlide key={i}>
                  <div className="cut-wrapper">
                    <img src={images[nextIndex]} className="img-next" alt="next" />
                    <img
                      src={img}
                      className={`img-current ltr`}
                      alt="current"
                      onAnimationEnd={handleAnimationEnd}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default SectionWithSlider;
