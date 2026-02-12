"use client";

import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import { withImageBase } from "@/app/utils/image";

type HeroSectionProps = {
  title: React.ReactNode;
  description: string;
  bgImage: string;
  mobileBgImage?: string;
  height?: string;
  overlay?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bgImage,
  mobileBgImage,
  height = "h-[100vh] lg:h-[90vh]",
  overlay = true,
  showCTA = false,
  ctaText = "Get Started",
  onCtaClick,
}) => {
  const desktopBg = withImageBase(bgImage);
  const mobileBg = mobileBgImage ? withImageBase(mobileBgImage) : desktopBg;

  return (
    <section
      className={`relative flex items-center ${height} bg-cover bg-bottom lg:bg-left xl:bg-right bg-no-repeat service-bg`}
      style={{
        backgroundImage: `url(${mobileBg})`,
      }}
    >
     
      <style jsx>{`
        @media (min-width: 676px) {
          section {
            background-image: url(${desktopBg}) !important;
          }
        }
      `}</style>

      {/* Optional Overlay */}
      {overlay && <div className="absolute inset-0 z-0" />}

      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5">
            <h1 className="font-poppins font-normal hero-heading pt-0 mt-[-150px] lg:mt-[0px] lg:pt-15 text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] text-white">
              {title}
            </h1>

            <p className="mt-10 w-[90%] font-poppins font-semibold text-[11px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[128%] text-white">
              {description}
            </p>

            {showCTA && (
              <div className="mt-10">
                <Button2 className=" cursor-pointer" onClick={onCtaClick}>
                  {ctaText}
                  <ArrowUpIcon className="ml-2 rotate-45" size={18} />
                </Button2>
              </div>
            )}
          </div>

          {/* RIGHT (reserved) */}
          <div className="col-span-12 md:col-span-7" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;