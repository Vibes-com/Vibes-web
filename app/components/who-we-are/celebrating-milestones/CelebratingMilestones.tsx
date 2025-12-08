"use client";

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
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
                className="absolute"
            >
                <ul>{dots}</ul>
            </div>
        ),

        customPaging: () => (
            <div className="w-[10px] h-[10px] bg-[#bdbdbd] rounded-full"></div>
        ),
    };

    const slides = [
        {
            title: "From Ideas to Action",
            desc: "How Vibes Creates Eco-Smart Branding & Marketing.",
            img: "/assests/img/about/From-Ideas-Eco-Smart.png"
        },
        {
            title: "From Ideas to Action",
            desc: "How Vibes Creates Eco-Smart Branding & Marketing.",
            img: "/assests/img/about/From-Ideas-Eco-Smart.png"
        },
        {
            title: "From Vision to Impact",
            desc: "How Vibes Powers Brands with Creativity & Innovation.",
            img: "/assests/img/about/From-Ideas-Eco-Smart.png"
        },
        {
            title: "From Ideas to Action",
            desc: "How Vibes Creates Eco-Smart Branding & Marketing.",
            img: "/assests/img/about/From-Ideas-Eco-Smart.png"
        }
    ];

    return (
        <div className="celebrating-milestones-wrapper section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6">
                        <div>
                            <h3 className="text-[42px] md:text-[54px] leading-tight font-semibold text-white">
                                Celebrating Milestones
                            </h3>

                            <p className="text-white text-[16px] leading-relaxed mt-4">
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
                                            className="relative bg-white p-6 rounded-xl shadow-md flex items-center gap-6 h-[170px] transition-all duration-500 milestone-card border-l-[8px] border-l-[#F4BE00]"
                                        >
                                            {/* Image */}
                                            <img src={item.img} className="w-25 h-25 object-contain" />

                                            {/* Text */}
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
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
