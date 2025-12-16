"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function VerticalSlickMilestones() {
    const settings: import("react-slick").Settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        swipeToSlide: true,
        arrows: false,
        autoplay: false,
        speed: 600,

        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    right: "-30px",
                    top: "60%",
                    transform: "translateY(-50%)",
                }}
                className="absolute"
            >
                <ul>{dots}</ul>
            </div>
        ),

        customPaging: () => (
            <div className="w-[15px] h-[15px] rounded-full"></div>
        ),
    };

    const slides = [
        {
            title: "From Ideas to Action",
            desc: " How Vibes Creates Eco-Smart Branding & Marketing.",
            img: "/assests/img/about/From-Ideas-Eco-Smart.png"
        },
        {
            title: "On to the Path of Sustainability",
            desc: " Forward-thinking digital solutions for a shared and innovative vision.",
            img: "/assests/img/about/Together-Tomorrow.png"
        },
        {
            title: "From Vision to Impact",
            desc: " How Vibes Powers Brands with Creativity, Digital Strategy & Tech Innovation.",
            img: "/assests/img/about/Vision-Impact.png"
        },
        {
            title: "From Vision to Impact",
            desc: " How Vibes Powers Brands with Creativity, Digital Strategy & Tech Innovation.",
            img: "/assests/img/about/Vision-Impact.png"
        },
    ];

    return (
        <div className="celebrating-milestones-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6">
                        <div>
                            <div className="flex justify-start mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        Milestones
                                    </span>
                                </div>
                            </div>
                            <h2 className="font-poppins font-semibold text-[55px] leading-[123%] tracking-[0] text-[#FFFFFF]">
                                Celebrating
                            </h2>
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[55px] leading-[123%] tracking-[0] text-[#FFFFFF]">Milestones</span>

                            <p className="font-poppins font-normal text-[16px] leading-[130%] tracking-[0] text-[#FFFFFFDB] mt-5">
                                How Vibes Has Transformed Visions into Reality
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="relative overflow-hidden ml-auto pr-16">
                            <Slider {...settings}>

                                {slides.map((item, i) => (
                                    <div key={i} className="py-3">
                                        <div
                                            className="relative bg-white p-4 rounded-xl shadow-md flex items-center gap-6 h-[170px] transition-all duration-500 milestone-card border-l-[8px] border-l-[#F4BE00]"
                                        >
                                            {/* Image */}
                                            <img src={item.img} className="w-25 h-25 object-contain" />

                                            {/* Text */}
                                            <div>
                                                <h3 className="text-[#2b3332] font-semibold text-[18px] leading-[123%]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#707070] font-normal text-[14px] leading-[130%] tracking-[0] mt-1">{item.desc}</p>
                                            </div>
                                            <div className="quote-container absolute top-6 right-6">
                                                <Image
                                                    src="/assests/img/about/quote-img.png"
                                                    alt="quote image" priority unoptimized
                                                    width={23}
                                                    height={23}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
