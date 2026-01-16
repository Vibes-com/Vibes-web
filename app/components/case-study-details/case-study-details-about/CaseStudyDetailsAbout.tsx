"use client";

import Image from "next/image";
import React from "react";
import { withImageBase } from "@/app/utils/image";

interface CaseStudyDetailsAboutProps {
  badgeText?: string;
  title: string;
  highlightTitle?: string;
  imageSrc: string;
  imageAlt?: string;
  points: string[];
  bgImage?: string;
}

const CaseStudyDetailsAbout: React.FC<CaseStudyDetailsAboutProps> = ({
  badgeText = "ABOUT",
  title,
  highlightTitle,
  imageSrc,
  imageAlt = "About image",
  points,
  bgImage = "/web-development/wd-services-bg.jpg",
}) => {
  return (
    <section
      className="w-full section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 lg:gap-14  items-center">

          {/* LEFT IMAGE */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white rounded-xl shadow-[0px_4px_7.6px_0px_#0000001F] ">
              <img
                src={imageSrc}
                alt={imageAlt}
                width={640}
                height={420}
                
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-12  pt-20 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 lg:col-span-6">

            {/* BADGE */}
            <div className="mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                  {badgeText}
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="mb-6 highlight relative z-9 w-fit font-poppins font-medium text-[33px] sm:text-[48px] md:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] leading-[1.23]">
              {title}
              {highlightTitle && (
                <span className="block highlight relative z-10 font-poppins font-semibold text-[40px]">
                  {highlightTitle}
                </span>
              )}
            </h3>

            {/* POINTS */}
            <div className="space-y-6 ">
              {points.map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-2 w-4 h-4 rounded-full border-2 border-[#466E59] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#466E59]" />
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: text }} className="text-[#575757DB] text-base leading-[26px] font-poppins font-normal">
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailsAbout;
