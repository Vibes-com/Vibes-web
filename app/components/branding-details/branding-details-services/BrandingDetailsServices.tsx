import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

type ServiceItem = {
    title: string;
    description: string;
    tags: string[];
    url: string;
    highlighted?: boolean;
};

const services: ServiceItem[] = [
    {
        title: "Corporate Branding",
        description:
            "PMIS streamlines project tracking with smart dashboards for tasks, approvals, finances, and completion. It enhances workflow.",
        tags: [
            "Corporate Identity",
            "Personal Branding",
            "Brand Guidelines",
            "Employer Branding",
        ],
        url: "/branding/corporate-branding",
        highlighted: true,
    },
    {
        title: "Brand Upliftment",
        description:
            "PMIS streamlines project tracking with smart dashboards for tasks, approvals, finances, and completion. It enhances workflow.",
        tags: [
            "Rebranding",
            "PR, Photoshoot & Videos",
            "Graphic Design",
        ],
        url: "/branding/brand-upliftment",
    },
    {
        title: "Brand Communication & Strategy",
        description:
            "PMIS streamlines project tracking with smart dashboards for tasks, approvals, finances, and completion. It enhances workflow.",
        tags: [
            "Logo Design",
            "Content Creation",
            "Storytelling",
            "Brand Positioning",
        ],
        url: "/branding/brand-communication-and-strategy",
    },
];

const BrandingDetailsServices: React.FC = () => {
    return (
        <section className=" branding-services-wrapper w-full section-gap">
            <div className="flex justify-center mb-5">
                <div className="
        px-6 py-2 
        rounded-full 
        border border-[#F4BE00] 
        inline-flex items-center gap-2
      ">
                    <span
                        className="w-2 h-2 rounded-full bg-[#F4BE00]"
                    ></span>
                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                        Services Highlight
                    </span>
                </div>
            </div>
            <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                End-to-End <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Branding Solutions</span>

            </h3>
            <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
                Offering strategic branding solutions that transform business vision into clear, consistent brand identities across every customer touchpoint.
            </p>
            {services.map((item, index) => (
                <div
                    key={index}>
                    <div className="container mx-auto px-4 py-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-4">
                                <h2 className="font-poppins font-semibold text-[32px] leading-[1.27] tracking-normal text-[#282828] mb-4">
                                    {item.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-4 py-1 rounded-full bg-[#466E59] text-[#FFFFFF] font-poppins font-medium text-[12px] leading-[1.25] tracking-normal"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                            <div className="lg:col-span-5">

                                <p className="text-[#737373] font-poppins font-medium text-[12px] leading-[1.23] tracking-normal max-w-[520px]">
                                    {item.description}
                                </p>
                            </div>

                            <div className="lg:col-span-3 flex lg:justify-end">
                                <Button2 className="mt-5 p-[20px]  hover:border-[#2B4C69] hover:bord[2px] hover:text-[#F4BE00] hover:bg-transparent text-[14px]">
                                    <Link href={item.url}><span>View More</span></Link>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default BrandingDetailsServices;
