"use client";

import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button4 } from "@/components/ui/button4";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";
import Link from "next/link";
import { TechnologyImage } from "@/types/technologyService.types";

interface SectionProps {
  heading: string;
  title: string;
  highlight?: string;
  description: string;
  tags: string[];
  buttonText: string;
  images: TechnologyImage[];
  reverse?: boolean;
  btnlink?: string;
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
    <div className="relative w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-12 items-stretch gap-6 lg:gap-8 xl:gap-10">

        {/* LEFT SIDE CONTENT */}
        <div
          className={`w-full lg:col-span-5 xl:col-span-5 2xl:col-span-5 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 space-y-4 md:space-y-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-start">
              <div className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F4BE00]"></span>
                <span className="font-[Poppins] font-semibold text-[9px] sm:text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                  {heading}
                </span>
              </div>
            </div>

            <h2 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[50px] leading-[120%] md:leading-[123%] tracking-[0] text-[#FFFFFF]">
              {title}
            </h2>
            
            {highlight && (
              <span className="highlight relative z-9 block w-fit font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[50px] leading-[120%] md:leading-[123%] tracking-[0] text-[#FFFFFF]">
                {highlight}
              </span>
            )}
          </div>

          <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[140%] md:leading-[150%] tracking-[0] text-[#FFFFFFDB]">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 border border-white/40 text-[#FFFFFF] rounded-full font-medium text-[12px] sm:text-[13px] md:text-[14px] leading-[100%] tracking-[0]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <button
              onClick={goPrev}
              className="w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] md:w-[48px] md:h-[48px] rounded-xl border border-white/40 flex items-center justify-center text-white cursor-pointer bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.7)] transition-all"
            >
              <ArrowLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            <button
              onClick={goNext}
              className="w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] md:w-[48px] md:h-[48px] rounded-xl border border-white/40 flex items-center justify-center text-white cursor-pointer bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.7)] transition-all"
            >
              <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>

          <Link href={`${btnlink}`}>
            <Button4 className="mt-2 cursor-pointer p-[16px] sm:p-[18px] hover:text-[#F4BE00] transition-colors">
              {buttonText}
              <ArrowUpIcon className="transform rotate-45 w-4 h-4 sm:w-5 sm:h-5" />
            </Button4>
          </Link>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div
          className={`relative w-full lg:col-span-7 xl:col-span-7 2xl:col-span-7 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[772px] 2xl:h-[800px] ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={0}
            allowTouchMove={false}
            autoplay={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-full  overflow-hidden"
          >
            <style>{`
              :root { --cut-time: 3s; }

              .cut-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
              }

              .img-next,
              .img-current {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
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
                    <img 
                      src={images[nextIndex].url} 
                      className="img-next"
                      alt={images[nextIndex].alt || "Next slide"}
                      loading="lazy"
                    />
                    <img
                      src={img.url}
                      className="img-current ltr"
                      alt={img.alt || "Current slide"}
                      onAnimationEnd={handleAnimationEnd}
                      loading="lazy"
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