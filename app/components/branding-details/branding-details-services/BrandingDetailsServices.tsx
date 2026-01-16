import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {withImageBase} from "@/app/utils/image";

type ServiceItem = {
    title: string;
    description: string;
    tags: string[];
    url: string;
    highlighted?: boolean;
    icon?: string;
    bgImage?: string;

};

const services: ServiceItem[] = [
    {
        title: "Corporate Branding",
        description:
            "Building clear, consistent corporate brand identities that reflect strong values, strengthen credibility, and ensure alignment across all business touchpoints.",
        tags: [
            "Corporate Identity",
            "Personal Branding",
            "Brand Guidelines",
            "Employer Branding",
        ],
        url: "/branding-services/corporate-branding",
        highlighted: true,
        bgImage: "/assests/img/digital-m-details/dm-bg-1.jpeg"
    },
    {
        title: "Brand Upliftment",
        description:
            " Refreshing and elevating existing brands through strategic design and storytelling to improve relevance, consistency, and market perception.",
        tags: [
            "Rebranding",
            "PR, Photoshoot & Videos",
            "Graphic Design",
        ],
        url: "/branding-services/brand-upliftment",
        bgImage: "/assests/img/digital-m-details/dm-bg-2.jpeg"
    },
    {
        title: "Brand Communication & Strategy",
        description:
            " Developing  structured brand strategies and communication frameworks that align messaging, tone, and positioning with business goals.",
        tags: [
            "Logo Design",
            "Content Creation",
            "Storytelling",
            "Brand Positioning",
        ],
        url: "/branding-services/brand-communication-and-strategy",
        bgImage: "/assests/img/digital-m-details/dm-bg-3.jpeg"
    },
];
const Brandingservices: ServiceItem[] = [
    {
        title: "Corporate Branding",
        description:
            "Building clear, consistent corporate brand identities that reflect strong values, strengthen credibility, and ensure alignment across all business touchpoints.",
        tags: [
            "Corporate Identity",
            "Personal Branding",
            "Brand Guidelines",
            "Employer Branding",
        ],
        icon: "/branding-details/carporate-icon.png",
        url: "/branding-agency/corporate-branding",
        highlighted: true,
    },
    {
        title: "Brand Upliftment",
        description:
            " Refreshing and elevating existing brands through strategic design and storytelling to improve relevance, consistency, and market perception.",
        tags: [
            "Rebranding",
            "PR, Photoshoot & Videos",
            "Graphic Design",
        ],
        icon: "/branding-details/carporate-icon.png",
        url: "/branding-agency/brand-upliftment",
    },
    {
        title: "Brand Communication & Strategy",
        description:
            " Developing  structured brand strategies and communication frameworks that align messaging, tone, and positioning with business goals.",
        tags: [
            "Logo Design",
            "Content Creation",
            "Storytelling",
            "Brand Positioning"
        ],
        icon: "/branding-details/carporate-icon.png",
        url: "/branding-agency/brand-communication-and-strategy",
    },
];

const BrandingDetailsServices: React.FC = () => {
    return (
        <div className="branding-services-wrapper section-gap overflow-hidden">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8 ">
                <div className="grid grid-cols-12 gap-6 items-center">

                    {/* Left Column */}
                    <div className="col-span-12  lg:col-span-5">
                        <div className="flex  mb-5">
                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                                <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                                    Services Highlight
                                </span>
                            </div>
                        </div>

                        <h3 className=" font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]">End-to-End<br />
                            <span className=" relative w-fit highlight z-9 font-semibold">Branding Solutions</span>
                        </h3>

                        <p className="text-[#707070]  max-w-2xl mx-auto mb-16 mt-5">
                            Offering strategic branding solutions that transform business vision into clear, consistent brand identities across every customer touchpoint.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-12  lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">

                            {[1, 2, 3].map((_, index) => (
                                <div
                                    key={index}
                                    className={
                                        index === 0
                                            ? "sm:col-span-2 flex  justify-center"
                                            : ""
                                    }
                                >
                                    <BrandingServiceCard service={Brandingservices[index]} />
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};




export default BrandingDetailsServices;




const BrandingServiceCard = ({ service }: any) => {
    return (
        <div className="border-b-6 border-transparent hover:border-[#204667] transition-colors duration-300 group relative w-[100%] lg:w-[340px]  h-[278px] bg-[#466E59]/100 shadow-lg transition-all duration-500 rounded-lg hover:bg-[#FFFFFF]">

            {/* ICON */}
            <div
                className="group brnd-icon absolute -top-7  right-[-8px] w-18 h-18 z-10 rounded-full flex items-center justify-center transition bg-[#FFFFFF] lg:group-hover:bg-[#F4BE00]
border-[7px] border-[#ffffff]">
                <img
                   src={withImageBase(service.icon)}
                    alt="service icon"
                    width={30}
                    height={30}
                    className="invert-1 transition-all duration-300 lg:group-hover:invert"
                />
            </div>

            {/* DEFAULT BG */}
            {/* <img
                src={service.bgImage}
                alt="bg"
                fill
                
                className="absolute inset-0 object-cover opacity-5 transition-opacity duration-500 group-hover:opacity-0 rounded-lg"
            /> */}


            {/* CONTENT */}
            <div className="relative z-10 px-4 py-11 flex flex-col h-full">
                <h3 className="font-poppins font-semibold text-[18px] lg:text-[22px] text-white lg:group-hover:text-[#454545]">
                    {service.title}
                </h3>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-3 transition-all duration-300 lg:group-hover:hidden">
                    {service.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-2 rounded-full font-poppins font-medium text-[10px] border border-white/50 text-white bg-white/20 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                        <Button2 className="mt-5 p-[20px] block lg:hidden cursor-pointer bg-transparent flex justify-start text-[#FFFFFF] hover:text-[#F4BE00]">
                        <Link href={service.url}>
                            <span  className=" text-[16px] lg:text-[18px]">View More</span>
                        </Link>
                        <ArrowUpIcon className="rotate-45" />
                    </Button2>
                {/* DESCRIPTION */}
                <div className="mt-4 transition-all duration-500 opacity-0 translate-x-10 lg:group-hover:opacity-100 lg:group-hover:translate-x-0">
                    <p className="font-poppins font-medium text-[12px] text-[#737373]">
                        {service.description}
                    </p>

                    <Button2 className="mt-5 p-[20px]  cursor-pointer bg-transparent text-[#204667] hover:text-[#F4BE00]">
                        <Link href={service.url}>
                            <span>View More</span>
                        </Link>
                        <ArrowUpIcon className="rotate-45" />
                    </Button2>
                </div>
            </div>
        </div>
    );
};