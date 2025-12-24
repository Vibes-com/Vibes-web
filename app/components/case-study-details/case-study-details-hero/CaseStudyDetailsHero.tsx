"use client";

import React from "react";

interface CaseStudyDetailsHeroProps {
   title: string;
  highlightTitle: string;
  description?: string;
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
}

const CaseStudyDetailsHero: React.FC<CaseStudyDetailsHeroProps> = ({
  title,
  highlightTitle,
  description,
  backgroundImage,
  height = "min-h-[70vh]",
  overlay = true,
}) => {
  return (
    <div
      className={`case-study-details-hero-wrapper flex items-center ${height} relative`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center">
          <div
            className={`col-span-12 md:col-span-6`}
          >
            <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
              {title}
              {highlightTitle && (
                <>
                  <br />
                  <span className="hero-highlight1 relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] capitalize text-[#C32B2B]">
                    {highlightTitle}
                  </span>
                </>
              )}
            </h1>

            {description && (
              <p className="mt-10 font-poppins font-semibold text-[16px] leading-[128%] text-white">
                {description}
              </p>
            )}
          </div>

          {/* RIGHT COLUMN (optional future image / video) */}
          <div className="hidden md:block md:col-span-6"></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailsHero;
