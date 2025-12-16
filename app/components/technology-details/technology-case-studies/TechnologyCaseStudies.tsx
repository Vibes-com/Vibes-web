import { title } from 'process'
import React from 'react'
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import CaseStudiesCard from '../../common/CaseStudiesCard/CaseStudiesCard'

const cards = [
    {
        id: 1,
        img: "/assests/img/home/interio-heaven-img.jpg",
        title: "interio heaven",
        buttonText: "view more",
        tags: [
            "Branding", "Creative", "Product Design",
        ],

    },
    {
        id: 2,
        img: "/assests/img/home/tomarrow-india-img.jpg",
        title: "interio heaven",
        buttonText: "view more",
        tags: [
            "Branding", "Creative", "Product Design",
        ],

    },
    {
        id: 3,
        img: "/assests/img/home/mahakumbh-img.png",
        title: "interio heaven",
        buttonText: "view more",
        tags: [
            "Branding", "Creative", "Product Design",
        ],

    }
];

const TechnologyCaseStudies = () => {
    return (
        <div className="technology-casestudies-wrapper section-gap bg-[#dfe8dd]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8 ">
                <div className="grid grid-cols-12 relative">
                    <div className="col-span-6 sticky top-0 h-screen flex items-center ">
                        <div className="flex-1 ">

                            <div className="flex justify-start mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        CASE STUDIES
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                                Code that Delivers  <br />
                                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Real Impact</span>
                            </h3>

                            <p className="text-[#525252] mt-5 max-w-md">
                                Explore real technology success stories where Vibes turns complex challenges into measurable outcomes, delivering smarter, scalable digital solutions.
                            </p>

                            <Button2 className="mt-5 p-[20px]  hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent text-[14px]">
                                <span>Dive Into Success Stories</span>
                                <ArrowUpIcon className="transform rotate-45" />
                            </Button2>

                        </div>

                    </div>
                    <div className="col-span-6 sticky top-0 h-screen overflow-y-auto no-scrollbar">
                        <div >
                            <CaseStudiesCard data={cards} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCaseStudies
