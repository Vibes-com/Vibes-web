"use client";

import React from "react";
import { withImageBase } from "@/app/utils/image";

interface HeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  description?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  height = "h-[65vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh]",
}) => {
  return (
    <section
      className={`flex items-center ${height} bg-cover bg-left sm:text-bg-center md:text-bg-center] lg:text-bg-center xl:text-bg-center 2xl:bg-center bg-no-repeat service-bg`}
      style={{
        backgroundImage: `url(${withImageBase(backgroundImage)})`,
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-8">
            {title}

            {description && (
              <p className="mt-10 font-poppins max-w-2xl font-semibold text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[128%] text-white">
                {description}
              </p>
            )}
          </div>

          {/* RIGHT COLUMN (optional space for image/illustration) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
