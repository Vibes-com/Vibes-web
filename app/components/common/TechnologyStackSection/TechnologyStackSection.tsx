"use client";

import React from "react";
import {withImageBase} from "@/app/utils/image";

type  tlogo ={
    alt:string;
    imgurl:string;
  }
type TechnologyStackProps = {
  badgeText: string;
  heading: React.ReactNode;
  description: string;
  topLogos: tlogo[];
  bottomLogos?: tlogo[];
  marqueeSpeed?: number;
  bgImage?: string;

};

const TechnologyStackSection: React.FC<TechnologyStackProps> = ({
  badgeText,
  heading,
  description,
  topLogos,
  bottomLogos=[],
  bgImage,
  marqueeSpeed = 25,
}) => {
  return (
    <section className="section-gap overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        {/* HEADER */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badgeText}
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h3 className="text-center font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[123%] text-white">
          {heading}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#FFFFFFDB] text-[16px] text-center max-w-3xl mx-auto mb-16 mt-5">
          {description}
        </p>

        {/* MARQUEE TOP */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-6 w-max animate-marquee-left"
            style={{ animationDuration: `${marqueeSpeed}s` }}
          >
            {[...topLogos, ...topLogos].map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>
        </div>

        {/* MARQUEE BOTTOM */}
        {bottomLogos.length > 0 && (
          <div className="overflow-hidden mx-5 lg:mx-20">
            <div
              className="flex gap-6 w-max animate-marquee-right"
              style={{ animationDuration: `${marqueeSpeed}s` }}
            >
              {[...bottomLogos, ...bottomLogos].map((logo, index) => (
                <LogoCard key={index} logo={logo} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SAFE SCOPED STYLES */}
      <style>{`
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TechnologyStackSection;

/* ---------------------------------- */
/* LOGO CARD */
/* ---------------------------------- */
const LogoCard = ({ logo }: { logo: tlogo }) => (
  <div className="min-w-[180px] h-[96px] bg-white rounded-sm flex items-center justify-center shadow">
    <img src={withImageBase(logo.imgurl)} alt={logo.alt} className="h-15 w-auto" />
  </div>
);
