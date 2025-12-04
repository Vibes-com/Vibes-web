"use client";
import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import TeamMembers from "../teammember/teammember";

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

            <div className="container mx-auto">

                <div className="max-w-7xl mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-12">


                    {/* Left Content */}
                    <div className="flex-1">

                        <div className="flex justify-start mb-5">
                            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                    Key Performance Insights
                                </span>
                            </div>
                        </div>
                        <h3 className="font-poppins font-semibold text-[40px] leading-[1.23] tracking-norma]">
                            One Team.One Dream.<br />
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Together for Tomorrow.</span>
                        </h3>

                        <p className="text-[#525252] mt-5 max-w-md">
                            Built on true partnership, the journey becomes a unified force merging strategy,
                            technology, and creativity to shape what comes next.
                        </p>

                        <Button2 className="mt-5 p-[20px]">
                            <span>Discover Who We Are</span>
                            <ArrowUpIcon className="transform rotate-45" />
                        </Button2>
                    </div>

                    {/* Right Logo */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/assests/img/home/one-team-img.png"
                            alt="Team Dream"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Cards */}
                <div
                    className="max-w-7xl mx-auto px-5 lg:px-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    onMouseEnter={() => setShowTeam(true)}
                >

                    {/* Card 1 */}
                    <div className="p-8 one-team-card">
                        <h3 className="font-semibold text-[20px] leading-[123%] mb-3">One Team</h3>
                        <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                            Your challenges, your goals, and your ambition become the foundation...
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 one-team-card">
                        <h3 className="font-semibold text-[20px] leading-[123%] mb-3">One Dream</h3>
                        <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                            Your challenges, your goals, and your ambition become the foundation...
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 one-team-card">
                        <h3 className="font-semibold text-[20px] leading-[123%] mb-3">Together for Tomorrow</h3>
                        <p className="font-poppins font-normal text-[14px] leading-[130%] text-[#191919DB]">
                            We turn that vision into a roadmap powered by insight and innovation.
                        </p>
                    </div>

                </div>
            </div>

            <div className={`team-animate ${showTeam ? "show" : ""}`}>
                {showTeam && <TeamMembers />}
            </div>

        </section>
    );
};

export default TeamDreamSection;
