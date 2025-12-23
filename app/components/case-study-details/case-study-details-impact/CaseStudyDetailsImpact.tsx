"use client";

import React from "react";

interface CaseStudyDetailsImpactProps {
  badgeText?: string;
  titleLines: string[];
  highlightText: string;
  impactList: string[];
  bgColor?: string;
}

const CaseStudyDetailsImpact: React.FC<CaseStudyDetailsImpactProps> = ({
  badgeText = "Impact",
  titleLines,
  highlightText,
  impactList,
  bgColor = "#FFFDF7",
}) => {
  return (
    <section
      className="w-full relative overflow-hidden section-gap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                  {badgeText}
                </span>
              </div>
            </div>

            <h3 className="font-poppins font-medium text-[65px] leading-[1.23]">
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}

              <span className="highlight relative z-10 block font-poppins font-semibold text-[65px] w-fit">
                {highlightText}
              </span>
            </h3>
          </div>

          {/* RIGHT LIST */}
          <div className="col-span-12 lg:col-span-5">
            <ul className="space-y-6 text-[#AEAEAE] font-poppins font-medium text-[35px] leading-[123%]">
              {impactList.map((item, index) => (
                <li
                  key={item} // ✅ stable key
                  className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['–'] before:text-[#AEAEAE]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailsImpact;
