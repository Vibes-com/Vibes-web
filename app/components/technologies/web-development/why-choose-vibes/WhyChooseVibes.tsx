"use client";
import Image from "next/image";

const items = [
    {
        title: "Insight-Led Execution",
        desc: "Smart decisions guide every build, ensuring each solution aligns with goals and delivers real impact.",
        icon: "/assets/img/why-vibes/insight.svg",
    },
    {
        title: "Future-Ready Architecture",
        desc: "Code is crafted for speed, stability, and effortless scaling as your business and demands grow.",
        icon: "/assets/img/why-vibes/architecture.svg",
    },
    {
        title: "Delivery You Can Count On",
        desc: "Timelines are honored with precision, ensuring every milestone is met without compromising quality.",
        icon: "/assets/img/why-vibes/delivery.svg",
    },
    {
        title: "Continuous Care & Support",
        desc: "Ongoing updates, fixes, and monitoring keep your digital systems secure, smooth, and high-performing.",
        icon: "/assets/img/why-vibes/support.svg",
    },
];

export default function WhyChooseVibes() {
    return (
        <section className="bg-[#FAF8F3] py-28">
            <div className="container mx-auto px-4">

                {/* HEADING */}
                <h2 className="text-center font-semibold text-[42px] text-[#2B2B2B]">
                    <span className="relative inline-block">
                        Choose Vibes.
                        <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#F4BE00]" />
                    </span>{" "}
                    Choose Certainty.
                </h2>

                <p className="mt-6 text-center max-w-3xl mx-auto text-[#6B6B6B]">
                    Vibes delivers high-performing, scalable, secure digital solutions—built
                    with precision, expertise, clear communication, and on-time delivery brands trust.
                </p>

                {/* WORKFLOW */}
                <div className="relative mt-24 hidden lg:block">

                    {/* SVG FLOW (BACKGROUND) */}
                    <svg
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-full z-0"
                        viewBox="0 0 1200 300"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="
                M20 150
                H280
                C320 150 320 60 360 60
                H520
                C550 60 560 240 600 240
                H760
                C800 240 800 150 840 150
                H1180
              "
                            stroke="#7FA58F"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>

                    {/* OUTER BORDER */}
                    <div className="relative z-10 rounded-[40px] grid grid-cols-4">

                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`
                  px-10 py-14 h-[360px]
                  flex flex-col items-center text-center
                  ${index !== 0 ? "" : ""}
                `}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={42}
                                    height={42}
                                    className="mb-6"
                                />

                                <h3 className="font-semibold text-[18px] text-[#2B2B2B] mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-[14px] leading-[160%] text-[#6B6B6B]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* MOBILE */}
                <div className="grid grid-cols-1 gap-6 mt-16 lg:hidden">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-[#7FA58F] rounded-[24px] px-8 py-10 text-center"
                        >
                            <Image src={item.icon} alt={item.title} width={42} height={42} className="mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
