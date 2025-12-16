import Image from "next/image";
import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description:
            "Vibes builds secure, personalised, and fully custom-coded websites designed to adapt as the brands grow. From sleek interfaces to powerful back-end systems, every web experience is crafted for performance, scalability, and seamless user journeys.",

        bgImage: "/assests/img/technology-details/web-devlopment-bg.png",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",

        tags: [
            "UI/UX Design",
            "Website Development",
            "CMS Development",
            "AI Tool Integration",
            "Website Enhancement",
            "Annual Maintenance (AMC)",
        ],

        url: "/technology/web-development",
    },

    {
        title: "Mobile App Development",
        description:
            "Vibes creates high-performing Android and iOS apps built to solve real problems and deliver measurable value. With secure architecture, custom code, and adaptive design, every app is engineered for seamless usability and long-term scalability.",

        bgImage: "/assests/img/technology-details/mobile-app-development-bg.jpg",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",

        tags: ["Android App Development", "iOS App Development"],

        url: "/technology/app-development"
    },

    {
        title: "E-commerce Development",
        description:
            "Vibes creates secure, custom eCommerce platforms that convert better and scale faster. With audience-focused design, smart tech like Next.js, React, Shopify, and WooCommerce, building seamless B2B and B2C experiences that drive measurable growth.",

        bgImage: "/assests/img/technology-details/ecommerce-development-bg.jpg",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",

        tags: [
            "Next.js / React",
            "Node.js",
            "Shopify",
            "WooCommerce",
            "B2B E-commerce",
            "B2C E-commerce",
        ],
         url: "/technology/ecomm-development",
    },

    {
        title: "Project Monitoring Information Systems",
        description:
            "PMIS streamlines project tracking with smart dashboards for tasks, approvals, finances, and completion. It enhances workflows through portal upgrades, intuitive user flow, mobile app integration, and seamless CRM development and integration.",

        bgImage: "/assests/img/technology-details/project-monitoring-system-bg.png",
        hoverBgImage: "/assests/img/technology-details/tech-cards-bg.png",

        tags: [
            "Dashboard Design",
            "Mobile App Integration",
            "User Flow & Architecture",
            "CRM Development",
            "Website Enhancement",
        ],
         url: "/technology/pmis-development",
    },
];

const TechSolutions = () => {
    return (
        <div className="tech-solution-wrapper section-gap">
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
                        Service Highlights
                    </span>
                </div>
            </div>
            <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                Vibes’ Smart <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Tech Solutions</span>

            </h3>
            <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
                Explore Vibes’ complete suite of technology services- Web and App development, custom CRM platforms, UI/UX, and high-performance digital systems built for scalable growth.
            </p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-6">


                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="group relative w-full overflow-hidden h-[392px]
            bg-[#466E59]/85  border border-white/10 
         shadow-lg transition-all duration-500 group-hover:text-[#454545]"
                    >

                        {/* -------- DEFAULT BACKGROUND IMAGE -------- */}
                        <Image
                            src={service.bgImage}
                            alt="bg" priority unoptimized
                            fill
                            className="absolute inset-0 object-cover opacity-20
              transition-opacity duration-500 group-hover:opacity-0"
                        />

                        {/* -------- HOVER BACKGROUND IMAGE -------- */}
                        <Image
                            src={service.hoverBgImage}
                            alt="hover-bg" priority unoptimized
                            fill
                            className="absolute inset-0 object-cover opacity-0
              transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* -------- CONTENT -------- */}
                        <div className="relative z-10 px-4 py-10 flex flex-col h-full">

                            <h3 className="font-poppins font-semibold text-[22px] tracking-normal text-[#FFFFFF] group-hover:text-[#454545] ">{service.title}</h3>

                            {/* TAGS → FADE OUT */}
                            <div className="mt-6 flex flex-wrap gap-3
              transition-all duration-300 group-hover:hidden group-hover:translate-x-5">
                                {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-2 rounded-full font-poppins font-medium text-[10px] leading-none tracking-normal border border-[#FFFFFF]/50 backdrop-blur-sm text-[#FFFFFF] bg-[#FFFFFF]/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* PARAGRAPH + BUTTON SLIDE IN */}
                            <div
                                className="mt-4 transition-all duration-500 opacity-0 translate-x-10
                group-hover:opacity-100 group-hover:translate-x-0"
                            >
                                <p className="font-poppins font-medium text-[12px]  tracking-normal text-[#737373]">{service.description}</p>

                                <Button2 className="mt-5 p-[20px] hover:text-[#F4BE00] bg-transparent  text-[#204667] text-[16px]">
                                   <Link href={service.url}><span>View More</span></Link>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button2>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TechSolutions;
