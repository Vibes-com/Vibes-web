import React from 'react'

const CaseStudyDetailsBrief = () => {
    return (
        <section className="w-full bg-[#DEE9E1] section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 gap-14 items-center">


                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex-1">
                            <div className="mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        BRIEF
                                    </span>
                                </div>
                            </div>
                            <h3 className=" mb-3 font-poppins font-medium text-[48px] leading-[1.23] tracking-norma]">
                                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Brief</span>
                            </h3>


                        </div>
                        <div className="space-y-6 max-w-[520px]">
                            {[
                                "Tomorrow’s India is India’s finest multi-segmented brand coverage platform.",
                                "Solves the problem of scattered information by unifying diverse industries into one ecosystem.",
                                "Covers multiple segments: automobiles, culture, events, arts & entertainment, technology, beauty, wellness, lifestyle, and more.",
                                "Serves as a bridge between consumers and businesses, enabling stronger communication and engagement.",
                                "Curates dispersed updates into insightful, streamlined content for easier discovery.",
                                "Positions itself as the go-to destination for what’s new, upcoming, and transformative across industries.",
                            ].map((text, index) => (
                                <div key={index} className="flex items-start gap-4">

                                    <div className="mt-2 w-4 h-4 rounded-full border-2 border-[#466E59] flex items-center justify-center flex-shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-[#466E59]"></span>
                                    </div>


                                    <p className="text-[#575757DB] text-base leading-[26px] font-poppins font-normal tracking-normal">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex-1">
                            <div className="mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        OUR APPROACH
                                    </span>
                                </div>
                            </div>
                            <h3 className=" mb-3 font-poppins font-medium text-[48px] leading-[1.23] tracking-norma]">
                                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Our Approach</span>
                            </h3>


                        </div>
                        <div className="space-y-6 max-w-[520px]">
                            {[
                                "Tomorrow’s India is India’s finest multi-segmented brand coverage platform.",
                                "Solves the problem of scattered information by unifying diverse industries into one ecosystem.",
                                "Covers multiple segments: automobiles, culture, events, arts & entertainment, technology, beauty, wellness, lifestyle, and more.",
                                "Serves as a bridge between consumers and businesses, enabling stronger communication and engagement.",
                                "Curates dispersed updates into insightful, streamlined content for easier discovery.",
                                "Positions itself as the go-to destination for what’s new, upcoming, and transformative across industries.",
                            ].map((text, index) => (
                                <div key={index} className="flex items-start gap-4">

                                    <div className="mt-2 w-4 h-4 rounded-full border-2 border-[#2F6F4E] flex items-center justify-center flex-shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-[#2F6F4E]"></span>
                                    </div>


                                    <p className="text-[#6B6B6B] text-base leading-[26px]">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudyDetailsBrief