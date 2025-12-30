"use client";

import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";

interface SuccessStoryProps {
  title: string;
  subtitle: string;
  buttonText: string;
  arrowImage?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function SuccessStory({
  title,
  subtitle,
  buttonText,
  arrowImage = "/assests/img/technology-details/arrow.png",
  onButtonClick,
  className = "",
}: SuccessStoryProps) {
  return (
    <section className={`w-full pt-15 pb-20 bg-success-story ${className}`}>
      <div className="curve-box max-w-7xl mx-auto px-6 relative">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 px-10">

          {/* Arrow Image */}
          <Image
            src={arrowImage}
            alt="Arrow"
            width={120}
            height={50}
            className="arrow-img"
          />

          {/* Text */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#F4BE00] font-poppins font-semibold text-[35px] leading-[100%]">
              {title}
            </h3>
            <p className="text-[#EEEEEE] mt-3 font-poppins font-medium text-[20px] max-w-xl leading-[100%]">
              {subtitle}
            </p>
          </div>

          {/* Button */}
          <div>
            <Button2
              onClick={onButtonClick}
              className="mt-5 p-[20px] bg-[#fff] cursor-pointer"
            >
              <span className="text-[#000]">{buttonText}</span>
              <ArrowUpIcon className="transform rotate-45 text-[#000]" />
            </Button2>
          </div>

        </div>
      </div>
    </section>
  );
}
