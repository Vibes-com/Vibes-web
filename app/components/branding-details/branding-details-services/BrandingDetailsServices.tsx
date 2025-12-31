import React from "react";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            "Building clear, consistent corporate brand identities that reflect strong values, strengthen credibility, and ensure alignment across all business touchpoints.",
        tags: [
            "Corporate Identity",
            "Personal Branding",
            "Brand Guidelines",
            "Employer Branding",
        ],
        url: "/branding-services/corporate-branding",
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
        url: "/branding-services/brand-upliftment",
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
        url: "/branding-services/corporate-branding",
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
        url: "/branding-services/brand-upliftment",
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
    },
];

const BrandingDetailsServices: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-2 py-4">
        {
            [1,2,3].map((_,index) => (
                <div key={index} className="mb-10">
                    <BrandingServiceCard service={Brandingservices[index]} />
                </div>
            ))
        }
        {/* <BrandingServiceCard service={services[0]} /> */}
        </div>
    //     <section className=" branding-services-wrapper w-full section-gap">
    //         <div className="flex justify-center mb-5">
    //             <div className="
    //     px-6 py-2 
    //     rounded-full 
    //     border border-[#F4BE00] 
    //     inline-flex items-center gap-2
    //   ">
    //                 <span
    //                     className="w-2 h-2 rounded-full bg-[#F4BE00]"
    //                 ></span>
    //                 <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
    //                     Services Highlight
    //                 </span>
    //             </div>
    //         </div>
    //         <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
    //             End-to-End <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Branding Solutions</span>

    //         </h3>
    //         <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
    //             Offering strategic branding solutions that transform business vision into clear, consistent brand identities across every customer touchpoint.
    //         </p>


    //         {
    //             services.map((item, index) => (
    //                 <div
    //                     key={index}
    //                     className="group transition-colors duration-300 hover:bg-[#E9F1EC]"
    //                 >
    //                     <div className="container mx-auto px-4 py-14">
    //                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    //                             <div className="lg:col-span-4">
    //                                 <h2 className="font-poppins font-semibold text-[32px] leading-[1.27] tracking-normal text-[#282828] mb-4">
    //                                     {item.title}
    //                                 </h2>

    //                                 <div className="flex flex-wrap gap-2 mb-5">
    //                                     {item.tags.map((tag, tagIndex) => (
    //                                         <span
    //                                             key={tagIndex}
    //                                             className="px-4 py-1 rounded-full bg-[#466E59] text-[#FFFFFF] font-poppins font-medium text-[12px] leading-[1.25] tracking-normal"
    //                                         >
    //                                             {tag}
    //                                         </span>
    //                                     ))}
    //                                 </div>

    //                             </div>
    //                             <div className="lg:col-span-5">

    //                                 <p className="text-[#737373] font-poppins font-medium text-[12px] leading-[1.23] tracking-normal max-w-[520px]">
    //                                     {item.description}
    //                                 </p>
    //                             </div>

    //                             <div className="lg:col-span-3 flex lg:justify-end">
    //                                 <Button2 className=" cursor-pointer transition-all duration-300 group-hover:translate-x-5 not-odd:mt-5 p-[20px]  hover:border-[#2B4C69] hover:bord[2px] hover:text-[#F4BE00] hover:bg-transparent text-[14px]">
    //                                     <Link href={item.url}><span>View More</span></Link>
    //                                     <ArrowUpIcon className="transform rotate-45" />
    //                                 </Button2>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </section >
    );
};

export default BrandingDetailsServices;




const BrandingServiceCard = ({ service }: any) => {
    return (
        <div className="group relative w-full  h-[278px] bg-[#466E59]/100 shadow-lg transition-all duration-500 rounded-lg hover:bg-[#FFFFFF]">

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
                className="absolute inset-0 object-cover opacity-5 transition-opacity duration-500 group-hover:opacity-0 rounded-lg"
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