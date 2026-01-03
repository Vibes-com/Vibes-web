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
  height = " h-[65vh] lg:min-h-[70vh] xl:min-h-[70vh] 2xl:min-h-[70vh]",
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
        <div className="grid grid-cols-12 items-center ">
          <div
            className={`col-span-12 md:col-span-6`}
          >
            <h1 className="font-poppins font-normal pt-15 hero-heading text-[32px] sm:text-[35px] md:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[116%] capitalize text-white">
              {title}
              {highlightTitle && (
                <>
                  <br />
                  <span className="hero-highlight1 relative z-10 w-fit font-poppins font-semibold text-[33px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] leading-[116%] capitalize text-white">
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
