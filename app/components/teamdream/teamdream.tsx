"use client";
import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import TeamMembers from "../teammember/teammember";
import SlideRight from "../animations/SlideRight";
import SlideLeft from "../animations/SlideLeft";
import SlideUp from "../animations/SlideUp";
import Link from "next/link";

const TeamDreamSection = () => {

    const [showTeam, setShowTeam] = useState(false);

    return (
        <section className="one-team-wrapper relative section-gap">

            <style jsx>{`
                .team-animate {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }
                .team-animate.show {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="max-w-7xl mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-12">


                    {/* Left Content */}
                    <div className="flex-1">
                        <SlideLeft delay={0.5}>
                            <div className="flex justify-start mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        ABOUT US
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-poppins font-medium text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-norma] cmn-heading">
                                Shaping Vision <br />
                                <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] leading-[1.23] tracking-normal cmn-heading">Accelerating Growth.</span>
                            </h3>

                            <p className="text-[#525252] mt-5 max-w-md">
                                Vibes has shaped brand evolution for 15+ years through 360° technology, branding, and digital excellence. A unified ecosystem fueling stronger identity, higher performance, and future-ready growth & driven by the spirit of One Team, One Dream, Together for Tomorrow.

                            </p>
                            <Link href="/about-us-together-for-tomorrow">
                                <Button2 className="mt-5 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] p-[20px] cursor-pointer hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent">
                                    <span>Discover Who We Are</span>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button2>
                            </Link>
                        </SlideLeft>
                    </div>

                    {/* Right Logo */}
                    <div className="flex-1 flex justify-center">
                        <SlideRight delay={0.5}>
                            <Image
                                src="/assests/img/home/one-team-img.png"
                                alt="Team Dream"
                                width={500}
                                height={500} priority unoptimized
                                className="object-contain"
                            />
                        </SlideRight>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div
                    className="max-w-7xl mx-auto px-5 lg:px-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <SlideRight delay={0.5}>
                        <div className="py-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 one-team-card bdr"
                            onMouseEnter={() => setShowTeam(true)}
                        >
                            <h3 className="font-semibold text-[20px] leading-[123%] mb-3">One Team</h3>
                            <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                                Vibes aligns purposefully, turning challenges, goals and ambitions into one clear, unified brand narrative.
                            </p>
                        </div>
                    </SlideRight>

                    {/* Card 2 */}
                    <SlideUp delay={0.5}>
                        <div className="py-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 one-team-card bdr">
                            <h3 className="font-semibold text-[20px] leading-[123%] mb-3">One Dream</h3>
                            <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                                A brand starts with a vision, insight, innovation and data that turn it into a clear measurable and achievable roadmap.
                            </p>
                        </div>
                    </SlideUp>

                    {/* Card 3 */}
                    <SlideLeft delay={0.5}>
                        <div className="py-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 one-team-card">
                            <h3 className="font-semibold text-[20px] leading-[123%] mb-3">Together for Tomorrow</h3>
                            <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                                Growth continues beyond every project, evolving so each step today strengthens the success of tomorrow.
                            </p>
                        </div>
                    </SlideLeft>

                </div>
            </div>

            <div className={`team-animate ${showTeam ? "show" : ""}`}>
                {showTeam && <TeamMembers />}
            </div>

        </section>
    );
};

export default TeamDreamSection;
