"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { SwiperModule } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";

export interface BrandingSliderSection {
  title: string;
  images: string[];
  slidesPerView?: number;
  paginationId: string;
  autoplay?: boolean;
  altTags?: string[];
}

interface CaseStudyDetailsBrandingProps {
  sections: BrandingSliderSection[];
}

const CaseStudyDetailsBranding: React.FC<CaseStudyDetailsBrandingProps> = ({
  sections,
}) => {

  return (
    <div className="case-study-details-branding-wrapper">
      {sections.map((section) => {
        const swiperModules: SwiperModule[] = section.autoplay
          ? [Autoplay, Pagination]
          : [Pagination];
        if (sections && section.images.length > 0) {
          return (
            <div key={section.paginationId} className="w-full mb-13 lg:mb-20 ">

              {/* TITLE */}
              <h3 className="mb-3 pb-5 text-center font-poppins font-medium text-[65px]">
                <span className="highlight font-semibold text-[28px] lg:text-[48px] relative">
                  {section.title}
                </span>
              </h3>

              {/* SLIDER */}
              <Swiper
                modules={swiperModules}
                loop
                autoHeight
                spaceBetween={8}
                slidesPerView={section.slidesPerView ?? 1}
                autoplay={section.autoplay ? { delay: 1500 } : false}
                pagination={{
                  el: `.${section.paginationId}`,
                  clickable: true,
                }}
                onSlideChange={(swiper) => swiper.updateAutoHeight()}
              >
                {section.images.map((src) => (
                  <SwiperSlide key={src}>
                    <div className="overflow-hidden">
                      <img
                        src={src}
                        alt={section.altTags?.[section.images.indexOf(src)] || section.title}
                        width={720}
                        height={674}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={`${section.paginationId} mt-4 text-center`} />
            </div>
          );
        } else {
          return null
        }
      })}
    </div>
  );
};

export default CaseStudyDetailsBranding;