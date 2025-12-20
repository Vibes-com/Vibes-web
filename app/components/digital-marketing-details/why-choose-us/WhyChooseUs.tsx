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

const WhyChooseUs: React.FC = () => {
    return (
        <section className="relative w-full bg-[#EEF4EF] py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 items-center">

                    <div className="col-span-5">

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

export default WhyChooseUs;
