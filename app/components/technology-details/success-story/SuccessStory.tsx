"use client";

export default function SuccessStory() {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-[#f3f6eb] to-[#e7efe3]">
            <div className="max-w-7xl mx-auto px-6 relative">

                {/* SVG CLIP PATH */}
                {/* <svg width="0" height="0">
                    <defs>
                        <clipPath id="centerCurve" clipPathUnits="objectBoundingBox">
                            <path
                                d="
                  M 0 0.12
                  Q 0.5 0.00 1 0.12
                  L 1 0.88
                  Q 0.5 1.00 0 0.88
                  Z
                "
                            />
                        </clipPath>
                    </defs>
                </svg> */}

                {/* BANNER */}
                <div className="box_top"></div>
                <div
                    className=" curve-box relative bg-gradient-to-r from-[#4f7c63] via-[#4a755f] to-[#4f7c63]
                     px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
                    style={{ clipPath: "url(#centerCurve)" }}
                >
                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#f5c400]">
                            Your Success Story Starts Here
                        </h2>

                        <p className="mt-4 text-lg md:text-xl text-white/90">
                            Creating digital value that powers your journey
                        </p>
                    </div>

                    {/* RIGHT CTA */}
                    <div className="relative flex items-center gap-6 z-10">
                        {/* DOTTED ARROW */}
                        <svg
                            width="120"
                            height="60"
                            viewBox="0 0 120 60"
                            fill="none"
                            className="hidden md:block"
                        >
                            <path
                                d="M2 30 C30 5, 60 55, 90 30"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="4 6"
                            />
                            <path
                                d="M90 30 L82 24 M90 30 L82 36"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>

                        <button className="flex items-center gap-2 bg-white text-[#2f5f4a] px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 transition">
                            Get Started with Us
                            <span className="text-lg">↗</span>
                        </button>
                    </div>

                    {/* DOT PATTERN */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,#ffffff33_1px,transparent_0)] bg-[size:22px_22px]" />
                    </div>
                </div>
                <div className="box_bottom"></div>
            </div>
        </section>
    );
}
