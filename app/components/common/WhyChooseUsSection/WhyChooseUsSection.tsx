import React from "react";
import { withImageBase } from "@/app/utils/image";
import SlideLeft from "../../animations/SlideLeft";

export type WhyChooseCard = {
  title: string;
  desc: string;
  dark?: boolean;
};

type WhyChooseUsSectionProps = {
  badgeText: string;
  heading: React.ReactNode;
  description: string;
  bgImage?: string;
  cards: WhyChooseCard[];
};

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  badgeText,
  heading,
  description,
  cards,
  bgImage,
}) => {
  return (
    <section className="relative w-full section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 gap-4 items-center">

          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-center lg:justify-start mb-5">
              <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                  {badgeText}
                </span>
              </div>
            </div>

            <h3 className=" text-center lg:text-left font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
              {heading}
            </h3>

            <p className="text-[#525252] mt-5">
              {description}
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-span-12 lg:col-span-7">
            <SlideLeft delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`h-[233px] rounded-2xl p-7 shadow-md transition-all
                    ${card.dark ? "bg-[#4E6F5C] text-white" : "bg-white text-[#1F2D27]"}`}
                >
                  <h3
                    className={`font-poppins font-semibold text-[21px] mb-4
                      ${card.dark ? "text-white" : "text-[#373737]"}`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`font-poppins font-medium text-[16px] leading-[145%]
                      ${card.dark ? "text-[#FFFFFFA6]" : "text-[#585858A6]"}`}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
            </SlideLeft>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
