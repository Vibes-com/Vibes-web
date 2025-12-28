"use client";

import Image from "next/image";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Campaign Management",
        description:
            "Vibes builds secure, personalised, and fully custom-coded websites designed to adapt as the brands grow.",
        bgImage: "/assests/img/technology-details/web-devlopment-bg.png",
        icon: "/assests/img/digital-m-details/digital-solution-icon-1.png",
        tags: [
            "Influencer Marketing",
            "Event Marketing",
        ],
        url: "/digital-marketing/campaign-management",
    },
    {
        title: "Performance Marketing",
        description:
            "Vibes creates high-performing Android and iOS apps built to solve real problems.",
        bgImage: "/assests/img/technology-details/mobile-app-development-bg.jpg",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",
        icon: "/assests/img/digital-m-details/digital-solution-icon-2.png",
        tags: ["Lead Generation", "Meta Ads", "Google Ads", "LinkedIn Ads"],
        url: "/digital-marketing/performance-marketing",
    },
    {
        title: "Social Media Management ",
        description:
            "Vibes creates secure, custom eCommerce platforms that convert better and scale faster.",
        bgImage: "/assests/img/technology-details/ecommerce-development-bg.jpg",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",
        icon: "/assests/img/digital-m-details/digital-solution-icon-3.png",
        tags: ["Content Creation & Planning", "B2B: LinkedIn Management", "B2C: LinkedIn Management"],
        url: "/digital-marketing/social-media-management",
    },
    {
        title: "Search Engine Optimization",
        description:
            "PMIS streamlines project tracking with smart dashboards and integrations.",
        bgImage: "/assests/img/technology-details/project-monitoring-system-bg.png",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",
        icon: "/assests/img/digital-m-details/digital-solution-icon-4.png",
        tags: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "LLM", "Keyword Strategy"],
        url: "/digital-marketing/search-engine-optimization",
    },
];

const DigitalMarketingSolutions = () => {
    return (
        <div className="digital-solution-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                        <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                            Services Highlight
                        </span>
                    </div>
                </div>

                <h3 className="text-center font-poppins font-medium text-[40px]">Digital <span className=" relative w-fit highlight z-9 font-semibold">Marketing Solutions</span>
                </h3>

                <p className="text-[#707070] text-center max-w-2xl mx-auto mb-16 mt-5">
                    Practical, data-driven digital marketing services focused on real outcomes strong visibility, quality leads, higher engagement, and consistent business growth
                </p>


                {/* GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">

                    {/* LEFT CARDS */}
                    <div className="flex flex-col gap-5 ">
                        {services.slice(0, 2).map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </div>

                    <div className="relative w-full h-[582px]  overflow-hidden shadow-xl ">
                        <Image
                            src="/assests/img/digital-m-details/digital-solutions-middle-img.png"
                            alt="Technology Showcase"
                            fill
                            className="object-fill "
                            priority
                            unoptimized
                        />
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="flex flex-col gap-5">
                        {services.slice(2, 4).map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ service }: any) => {
    return (
        <div className="group relative w-full  h-[278px] bg-[#466E59]/85 shadow-lg transition-all duration-500 rounded-lg hover:bg-[#FFFFFF]">

            {/* ICON */}
            <div
                className="group absolute -top-4 right-[-8px] w-18 h-18 z-10 rounded-full flex items-center justify-center transition bg-[#FFFFFF] group-hover:bg-[rgb(70,110,89)]
border-[7px] border-[#ffffff]">
                <Image
                    src={service.icon}
                    alt="service icon"
                    width={30}
                    height={30}
                    className="invert-1 transition-all duration-300 group-hover:invert"
                />
            </div>

            {/* DEFAULT BG */}
            <Image
                src={service.bgImage}
                alt="bg"
                fill
                unoptimized
                className="absolute inset-0 object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-0 rounded-lg"
            />


            {/* CONTENT */}
            <div className="relative z-10 px-4 py-10 flex flex-col h-full">
                <h3 className="font-poppins font-semibold text-[22px] text-white group-hover:text-[#454545]">
                    {service.title}
                </h3>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-3 transition-all duration-300 group-hover:hidden">
                    {service.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-2 rounded-full font-poppins font-medium text-[10px] border border-white/50 text-white bg-white/20 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* DESCRIPTION */}
                <div className="mt-4 transition-all duration-500 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0">
                    <p className="font-poppins font-medium text-[12px] text-[#737373]">
                        {service.description}
                    </p>

                    <Button2 className="mt-5 p-[20px] bg-transparent text-[#204667] hover:text-[#F4BE00]">
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

export default DigitalMarketingSolutions;
