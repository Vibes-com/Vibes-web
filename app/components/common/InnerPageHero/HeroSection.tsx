"use client";

import React from "react";

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
  height = "h-[90vh]",
}) => {
  return (
    <section
      className={`flex items-center ${height} bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 items-center">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-8">
            {title}

            {description && (
              <p className="mt-10 font-poppins font-semibold text-[18px] leading-[128%] text-white">
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
