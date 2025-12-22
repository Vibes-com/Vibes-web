import React from "react";

const cards = [
    {
        title: "Strategic Alignment",
        desc: "Digital strategies aligned with business goals, market realities, and customer intent to drive measurable outcomes.",
        dark: true,
    },
    {
        title: "Audience Intelligence",
        desc: "Data-driven insights and behavioral analysis guide precise targeting, messaging, and channel selection.",
        dark: false,
    },
    {
        title: "Omnichannel Execution",
        desc: "Search, media, content, and social function as one integrated system to maximize performance and efficiency.",
        dark: false,
    },
    {
        title: "Performance Optimization",
        desc: "Continuous monitoring and refinement ensure relevance, scalability, and sustained digital growth.",
        dark: true,
    },
];

const CarporateBrandingSolution: React.FC = () => {
    return (
        <section className="relative w-full bg-[#EEF4EF] py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 items-center">

                    <div className="col-span-5">
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex-1">
                                <div className="flex justify-start mb-5">

                                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                        <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                            Why Choose Us
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                                    A Smarter Way to  <br /><span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Build Digital Brands</span>
                                </h3>

                                <p className="text-[#525252] mt-5 ">
                                    Vibes applies a structured, insight-led digital marketing framework that aligns strategy, creativity, and performance. Every decision is driven by data, audience behavior, and clear business objectives.

                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`h-[233px] rounded-2xl p-7 shadow-md transition-all duration-300
                  ${card.dark
                                            ? "bg-[#4E6F5C] text-white"
                                            : "bg-white text-[#1F2D27]"
                                        }
                `}
                                >
                                    <h3
                                        className={`font-poppins font-semibold text-[21px] leading-[100%] tracking-normal mb-4 ${card.dark ? "text-[#FFFFFF]" : "text-[#373737]"
                                            }`}
                                    >
                                        {card.title}
                                    </h3>

                                    <p
                                        className={`font-poppins font-medium text-[16px] leading-[145%] tracking-normal ${card.dark ? "text-[#FFFFFFA6]" : "text-[#585858A6]"
                                            }`}
                                    >
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default CarporateBrandingSolution;
