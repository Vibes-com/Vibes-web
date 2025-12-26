import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";

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

export default function CaseStudiesCard({ data }: CaseStudiesCardProps) {

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white mb-[70px] rounded-2xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full"
        >
          {/* Image */}
          <div className=" case-study-card-common border-1 border-gray-400 relative w-full h-[450px] rounded-xl overflow-hidden group">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-fill transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-90"
            />
            
          </div>

          {/* Title */}
          <h3 className="mt-5 text-[#1F1F1F] font-poppins font-semibold text-[28px]">
            {item.title}
          </h3>

          {/* Tags + Button */}
          <div className="flex items-center gap-3 mt-4 justify-between">
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
            <Link href={`/case-study/${item.slug}`}>
              <Button3 className="text-[#204667] cursor-pointer flex items-center gap-2 hover:text-[#F4BE00]">
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
