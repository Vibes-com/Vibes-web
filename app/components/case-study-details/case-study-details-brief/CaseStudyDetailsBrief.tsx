"use client";

import React from "react";

interface BriefBlock {
  badgeText: string;
  title: string;
  points: string[];
  dotColor: string;
  textColor?: string;
}

interface CaseStudyDetailsBriefProps {
  leftBlock: BriefBlock;
  rightBlock: BriefBlock;
  bgImage?: string;
}

const CaseStudyDetailsBrief: React.FC<CaseStudyDetailsBriefProps> = ({
  leftBlock,
  rightBlock,
  bgImage = "/assests/img/technology-details/common-casestudy-bg.jpg",
}) => {
  const renderBlock = (block: BriefBlock) => (
    <>
      {/* HEADER */}
      <div className="mb-5">
        <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
          <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
            {block.badgeText}
          </span>
        </div>
      </div>

      <h3 className="mb-6 font-poppins font-medium text-[48px] leading-[1.23]">
        <span className="highlight relative z-10 font-poppins font-semibold text-[40px]">
          {block.title}
        </span>
      </h3>

      {/* POINTS */}
      <div className="space-y-6 ">
        {block.points.map((text, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className="mt-2 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{ borderColor: block.dotColor }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: block.dotColor }}
              />
            </div>

            <p
              className="text-base leading-[26px] font-poppins font-normal"
              style={{ color: block.textColor ?? "#575757DB" }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section
      className="w-full section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 gap-0 lg:gap-14 xl:gap-14 2xl:gap-14 items-start">

          {/* LEFT BLOCK */}
          <div className="col-span-12 lg:col-span-6">
            {renderBlock(leftBlock)}
          </div>

          {/* RIGHT BLOCK */}
          <div className="col-span-12 lg:col-span-6">
            {renderBlock(rightBlock)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailsBrief;
