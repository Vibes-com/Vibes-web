"use client";

import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import CaseStudiesCard, {
  SingleCaseStudyCard,
} from "../CaseStudiesCard/CaseStudiesCard";
import Link from "next/link";
// import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";

interface CaseStudiesSectionProps {
  badgeText: string;
  title: string;
  highlightTitle: string;
  description: string;
  buttonText: string;
  // cards: SingleCaseStudyCard[];
  bgImage?: string; // ✅ add this
}

const CommonCasestudy = ({ badgeText, title, highlightTitle, description, buttonText, bgImage}: CaseStudiesSectionProps) => {
  // // ✅ RTK QUERY
  // const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

  // // ✅ MAP API RESPONSE → CARD TYPE
  // const cards: SingleCaseStudyCard[] =
  //   data?.data?.map((item) => ({
  //     id: item.id,
  //     img: item.thumbnail,
  //     title: item.client_name,
  //     slug: item.slug || item.client_slug,
  //     tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
  //     buttonText: "Inside The Project",
  //   })) || [];
  
  return (
    <section className="section-gap bg-no-repeat bg-cover bg-center" style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-12 relative">

          {/* LEFT CONTENT */}
          <div className="col-span-12 md:col-span-6 md:sticky top-0 h-screen flex ">
            <div className="flex-1">

              {/* BADGE */}
              <div className="flex mb-5">
                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                  <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                    {badgeText}
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-poppins font-medium text-[40px] leading-[1.23]">
                {title}
                <br />
                <span className="highlight relative z-9 font-semibold">
                  {highlightTitle}
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#525252] mt-5 max-w-md">
                {description}
              </p>

              {/* CTA BUTTON */}
              <Link href="/case-studies">
                <Button2 className="mt-6 p-[20px] hover:border-[#2B4C69] hover:border-2 hover:text-[#F4BE00] hover:bg-transparent text-[14px] cursor-pointer">
                  <span>{buttonText}</span>
                  <ArrowUpIcon className="rotate-45" />
                </Button2>
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-12 md:col-span-6 sticky top-0 h-screen overflow-y-auto no-scrollbar">
            {/* ✅ CaseStudiesCard handles mapping internally */}
            <CaseStudiesCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommonCasestudy;
