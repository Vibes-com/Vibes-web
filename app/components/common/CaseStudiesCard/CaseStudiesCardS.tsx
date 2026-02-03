"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";
import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";
import { withImageBase } from "@/app/utils/image";
/* ---------------- TYPES ---------------- */

export interface SingleCaseStudyCard {
  id: string;
  img: string;
  title: string;
  slug: string;
  tags: string[];
  buttonText?: string;
}

interface CaseStudiesCardProps {
  data: SingleCaseStudyCard[];
}

/* ---------------- COMPONENT ---------------- */

export default function CaseStudiesCardS() {
const { data, isLoading, isError } = useGetAllCaseStudiesQuery();
const cardsc = data?.data.slice(0,5)
  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error</p>;
  const cards: SingleCaseStudyCard[] =
    cardsc?.map((item) => ({
      id: item.id,
      img: item.thumbnail,
      title: item.client_name,
      slug: item.slug || item.client_slug,
      tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
      buttonText: "Inside The Project",
    })) || [];
  return (
    <>
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white mb-[70px] rounded-2xl p-1 ps-2 pb-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full"
        >
          {/* Image */}
          <div className="case-study-card-common border border-gray-400 w-full rounded-xl overflow-hidden group">
                    <img
                     src={withImageBase(item.img)}
                      alt={item.title}
                      width={1500}
                      height={1000}
                      
                      className="h-full  object-fill transition-transform duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-90"
                    />
                  </div>

          {/* Title */}
          <h3 className="mt-5 text-[#1F1F1F] font-poppins font-semibol0d text-[20px] lg:text-[28px]">
            {item.title}
          </h3>

          {/* Tags + Button */}
          <div className="flex items-center gap-2 mt-4 justify-between">
            <div className="flex gap-3 case-study-tags-gap flex-wrap">
              {item.tags.map((tag) => (
                <span
                  key={`${item.id}-${tag}`}
                  className="px-3 py-2 rounded-full case-study-common-tags text-[14px] border border-[#BCBCBC]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View More Link */}
            <Link href={`/case-studies/${item?.title?.toLowerCase()?.replace(/\s+/g, '-')}/${item?.slug?.toLowerCase()}`}>
              <Button3 className="text-[#204667] cursor-pointer !p-1 flex items-center gap-2 hover:text-[#F4BE00]">
                <span>{item.buttonText || "View More"}</span>
                <ArrowUpIcon className="rotate-45" />
              </Button3>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
