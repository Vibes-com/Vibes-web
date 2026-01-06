"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ---------- TYPES ---------- */

interface CarouselImage {
  src: string;
  alt?: string;
}

interface CarouselHeading {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  heading?: CarouselHeading;
  className?: string;
  imageHeight?: string;
  autoplayDelay?: number;
  slidesPerView?: number;
  breakpoints?: any;
}

/* ---------- COMPONENT ---------- */

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  heading,
  className = "",
  imageHeight = "h-[433px]",
  autoplayDelay = 2500,
  slidesPerView = 2,
  breakpoints = {
    0: { slidesPerView: 1},
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 2.5 },
  },
}) => {
  return (
    <section className={`section-gap ${className}`}>
      {/* ---------- HEADING ---------- */}
      {heading && (
        <div className="container mx-auto px-4 mb-12 text-center">
          {heading.badge && (
            <div className="flex justify-center mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                  {heading.badge}
                </span>
              </div>
            </div>
          )}

          {heading.title && (
            <h3 className="font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
              {heading.title}
            </h3>
          )}

          {heading.description && (
            <p className="text-[#525252] mt-5 max-w-3xl mx-auto">
              {heading.description}
            </p>
          )}
        </div>
      )}

      {/* ---------- SLIDER ---------- */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          slidesPerView={slidesPerView}
          breakpoints={breakpoints}
          className="w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={`${item.src}-${index}`}>
              <div className="overflow-hidden border-[5px] border-white">
                <Image
                  src={item.src}
                  alt={item.alt || "carousel image"}
                  width={720}
                  height={674}
                  priority={index === 0}
                  unoptimized
                  className={`w-full ${imageHeight} object-cover transition-transform duration-700 ease-in-out hover:scale-110`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarousel;
