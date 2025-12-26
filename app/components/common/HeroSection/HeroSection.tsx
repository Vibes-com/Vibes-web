"use client";

import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";

type HeroSectionProps = {
  title: React.ReactNode;
  description: string;
  bgImage: string;             
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
  height = "h-[90vh]",
  overlay = true,
  showCTA = false,
  ctaText = "Get Started",
  onCtaClick,
}) => {
  return (
    <section
      className={`relative flex items-center ${height} bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Optional Overlay */}
      {overlay && (
        <div className="absolute inset-0 z-0" />
      )}

      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-6">
            <h1 className="font-poppins font-normal text-[60px] leading-[116%] text-white">
              {title}
            </h1>

            <p className="mt-10 font-poppins font-semibold text-[16px] leading-[128%] text-white">
              {description}
            </p>

            {showCTA && (
              <div className="mt-10">
                <Button2 onClick={onCtaClick}>
                  {ctaText}
                  <ArrowUpIcon className="ml-2 rotate-45" size={18} />
                </Button2>
              </div>
            )}
          </div>

          {/* RIGHT (reserved) */}
          <div className="col-span-12 md:col-span-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
