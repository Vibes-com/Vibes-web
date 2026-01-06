"use client";

import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

interface SuccessStoryProps {
  title: string;
  subtitle: string;
  buttonText: string;
  arrowImage?: string;
  onButtonClick?: () => void;
  className?: string;
  btnlink:string;
}

export default function SuccessStory({
  title,
  subtitle,
  buttonText,
  arrowImage = "/assests/img/technology-details/arrow.png",
  onButtonClick,
  className = "",
  btnlink
}: SuccessStoryProps) {
  return (
    <section className={`w-full pt-10 lg:pt-15  pb-10 lg:pb-20 bg-success-story ${className}`}>
      <div className="curve-box max-w-7xl mx-auto px-2 lg:px-6 relative">
        <div className="h-full flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-between gap-8 px-2 lg:px-10">

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
            <h3 className="text-[#F4BE00] font-poppins font-semibold text-[20px] lg:text-[35px] leading-[100%]">
              {title}
            </h3>
            <p className="text-[#EEEEEE] mt-3 font-poppins font-medium text-[15px] lg:text-[20px] max-w-xl leading-[100%]">
              {subtitle}
            </p>
          </div>

          {/* Button */}
          <div>
            <Link href={btnlink}>
            <Button2
              onClick={onButtonClick}
              className=" mt-0 h-6 md:h-9 lg:h-9 xl:h-9 2xl:h-9 lg:mt-5 p-[10px] lg:p-[20px] bg-[#fff] cursor-pointer"
            >
              <span className="text-[#000] cursor-pointer">{buttonText}</span>
              <ArrowUpIcon className="transform rotate-45 text-[#000]" />
            </Button2>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
