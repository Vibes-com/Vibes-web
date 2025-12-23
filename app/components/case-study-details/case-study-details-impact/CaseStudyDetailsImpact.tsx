import React from "react";

const CaseStudyDetailsImpact = () => {
    return (
        <section className="w-full bg-[#FFFDF7] relative overflow-hidden section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center gap-12">


                    <div className="col-span-12 lg:col-span-7">


                        <div className="flex-1">
                            <div className="mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        Impact
                                    </span>
                                </div>
                            </div>
                            <h3 className=" mb-3 font-poppins font-medium text-[65px] leading-[1.23] tracking-norma]">What We<br />
                                did for<br />
                                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[1.23] tracking-normal">Tomorrow’s India</span>
                            </h3>


                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-5">
                        <ul className="space-y-6 text-[#AEAEAE] font-poppins font-medium text-[35px] leading-[123%] tracking-normal">
                            {[
                                "Branding",
                                "Campaign Strategy",
                                "Meta Ads",
                                "Google Ads",
                                "YouTube Ads",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['–'] before:text-[#AEAEAE]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default CaseStudyDetailsImpact;
