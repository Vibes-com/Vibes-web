"use client";
import Image from "next/image";
import React from "react";

const coreValues = [
    {
        img: "/assests/img/about/shared-vision.png",
        title: "Shared Vision",
        desc: "Aligning goals to shape purposeful growth and tomorrow’s success.",
    },
    {
        img: "/assests/img/about/seamless-communication.png",
        title: "Seamless Communication",
        desc: "Building clarity and trust for stronger collaboration in the future.",
    },
    {
        img: "/assests/img/about/innovation-together.png",
        title: "Innovation Together",
        desc: "Co-creating ideas today that fuel opportunities for tomorrow.",
    },
    {
        img: "/assests/img/about/sustainable-impact.png",
        title: "Sustainable Impact",
        desc: "Delivering lasting solutions that inspire progress for generations ahead.",
    },
];

const CoreValues = () => {
    return (
        <div className="core-values-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-[42px] md:text-[54px] leading-tight font-semibold text-white">
                            Our Core Values,<br />Our Driving Force
                        </h2>

                        <p className="text-white text-[16px] leading-relaxed mt-4">
                            Our core values power every step we take fueling innovation,
                            shaping excellence, and driving us to create meaningful impact
                            for today and a better tomorrow.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {coreValues.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-xl p-6 border-b-[4px] border-b-[#F4BE00] hover:-translate-y-1 transition-all"
                            >
                                <div className="flex items-center justify-center h-[60px] w-[60] rounded-sm bg-[#F4BE00]">
                                    <Image
                                        src={item.img}
                                        alt={item.title} priority unoptimized
                                        width={35}
                                        height={35}
                                        className="object-contain"
                                    />
                                </div>

                                <p className="text-[16px] font-semibold text-gray-800 pt-3">
                                    {item.title}
                                </p>

                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoreValues;
