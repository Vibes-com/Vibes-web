"use client";

import Link from "next/link";
import React from "react";

const AboutHero: React.FC = () => {
    return (
        <div className="about-hero-wrapper flex items-center h-[90vh]">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 text-white">
                        <h1 className="text-[55px] font-semibold leading-tight">
                            Shaping <br /> Tomorrow’s Digital <br /> Success
                        </h1>

                        <p className="mt-6 text-lg md:text-xl opacity-90">
                            We blend creativity, technology, and strategy to craft impactful digital
                            journeys that drive growth, build trust, and create lasting value.
                        </p>

                        <div className="mt-6 flex gap-4 text-yellow-400 font-semibold text-lg">
                            <Link href="/innovate" className="hover:text-white transition">
                                Innovate
                            </Link>

                            <span className="text-white/70">|</span>

                            <Link href="/deliver" className="hover:text-white transition">
                                Deliver
                            </Link>

                            <span className="text-white/70">|</span>

                            <Link href="/sustain" className="hover:text-white transition">
                                Sustain
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-span-6"></div>
                </div>
            </div>
        </div >
    );
};

export default AboutHero;
