"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import "swiper/css";
import SlideUp from "../../animations/SlideUp";

export type VideoSlide = {
  type: "video";
  src: string;
};

export type ImageSlide = {
  type: "images";
  images: {
    src: string;
    alt?: string;
  }[];
};

export type SlideItem = VideoSlide | ImageSlide;


interface MarqueeStorySectionProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
  slides: SlideItem[];
  ctaText: string;
  bgImage: string;
  speed?: number;
}

const MarqueeStorySection = ({
  badge,
  title,
  highlightTitle,
  description,
  slides,
  ctaText,
  bgImage,
  speed = 7000,
}: MarqueeStorySectionProps) => {
  useEffect(() => {
    const swiper = new Swiper(".marquee-swiper", {
      modules: [Autoplay],
      slidesPerView: "auto",
      loop: true,
      speed,
      allowTouchMove: false,
      spaceBetween: 30,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    swiper.wrapperEl.style.transitionTimingFunction = "linear";
  }, [speed]);

  return (
    <section
      className="section-gap overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* BADGE */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badge}
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-center font-poppins font-medium text-[40px] leading-[1.23]">
          {highlightTitle && (
            <span className=" w-fit z-9 relative highlight font-semibold">{highlightTitle} </span>
          )}
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#707070] text-center max-w-2xl mx-auto mt-5 mb-16">
          {description}
        </p>
      </div>

      {/* MARQUEE */}
      <SlideUp delay={0.5}>
        <div className="marquee-swiper swiper mt-10">
          <div className="swiper-wrapper items-center">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                {slide.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-[220px] rounded-[10px]"
                  >
                    <source src={slide.src} />
                  </video>
                ) : (
                  <div className="flex flex-col gap-4">
                    {slide.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt || ""}
                        width={200}
                        height={220}
                        className="rounded-[10px] shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SlideUp>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button2 className="p-[20px] hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent">
          <span>{ctaText}</span>
          <ArrowUpIcon className="rotate-45" />
        </Button2>
      </div>

      {/* SLIDE FIXES */}
      <style jsx>{`
        .swiper-slide {
          width: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default MarqueeStorySection;
