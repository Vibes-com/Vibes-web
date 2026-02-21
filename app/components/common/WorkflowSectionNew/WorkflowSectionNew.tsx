import Image from "next/image";
import React from "react";
import { withImageBase } from "@/app/utils/image";
import SlideUp from "../../animations/SlideUp";

/* ---------------- TYPES ---------------- */

export type WorkflowStep = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  active?: boolean;
};

type WorkflowSectionNewProps = {
  badgeText: string;
  heading: React.ReactNode;
  description: string;
  steps: WorkflowStep[];
  bgImage?: string;
};

/* ---------------- COMPONENT ---------------- */

const WorkflowSectionNew: React.FC<WorkflowSectionNewProps> = ({
  badgeText,
  heading,
  description,
  steps,
  bgImage,
}) => {
  return (
    <section className="section-gap bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${withImageBase(bgImage)})` : "none",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        {/* BADGE */}
        <div className="flex justify-center mb-5">
          <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
            <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
              {badgeText}
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h3 className="text-center font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23]">
          {heading}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#707070] text-[16px] text-center max-w-2xl mx-auto mb-16 mt-5">
          {description}
        </p>

        {/* STEPS GRID */}
        <SlideUp delay={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
          {steps.map((step) => (
            <div
  key={step.id}
  style={{
    backgroundImage:
      "url(https://d32ze5duxdubbq.cloudfront.net/assets/img/branding-details/logo-frame-work-card-bg.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="
    group relative rounded-sm p-3 min-h-[280px]
    bg-[#3F6B57] text-[#2B2B2B] border-b-[5px] border-[#4B7057]
    shadow-md transition-all duration-300

    hover:bg-gradient-to-br hover:from-[#3F6B57] hover:to-[#2F5443]
    hover:text-white
  "
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundImage = "none";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage =
      "url(https://d32ze5duxdubbq.cloudfront.net/assets/img/branding-details/logo-frame-work-card-bg.jpeg)";
  }}
>
              {/* NUMBER */}
              <span
                className="
                  absolute top-5 right-6 font-poppins font-semibold text-[70px]
                  text-[#466E59] group-hover:text-[#F4BE00]
                "
                style={{ WebkitTextStroke: "1px #466E59" }}
              >
                {step.id}
              </span>

              {/* ICON */}
              <div className="mb-6 mt-20">
                <img
                   src={withImageBase(step.icon)}
                  alt={step.title}
                  width={36}
                  height={36}
                  
                  className="transition group-hover:invert"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-poppins font-semibold text-[18px] mb-3 text-[#4C4C4C] group-hover:text-white">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-poppins text-[12px] leading-[1.3] text-[#575757DB] group-hover:text-[#E6EFEA]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        </SlideUp>

      </div>
    </section>
  );
};

export default WorkflowSectionNew;
