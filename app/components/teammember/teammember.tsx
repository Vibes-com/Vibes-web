"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "lucide-react";

const TeamMembers = () => {
    const members = [
        {
            name: "Avaneendra Mishra",
            role: "Director",
            img: "/assests/img/home/avi-sir.jpg",
            desc: `"A spark of bright ideas, a dash of idealism, a bucket full of positivity..."`,
        },
        {
            name: "Kajal Gupta",
            role: "Mentor & Business Partner",
            img: "/assests/img/home/kajal-mam.jpg",
            desc: `"The person that keeps us together, the genius with the best ideas..."`,
        },
        {
            name: "Uphar Shiwam",
            role: "Deputy Manager (Technology)",
            img: "/assests/img/home/uphar-sir.jpg",
            desc: `"The driving force who keeps every program running seamlessly..."`,
        },
        {
            name: "New Member",
            role: "Senior Developer",
            img: "/assests/img/home/avi-sir.jpg",
            desc: `"A visionary tech expert who drives innovation and ensures smooth performance."`,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        // autoplay: true,
        autoplaySpeed: 2500,
        speed: 600,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true } },
        ],
    };

    return (
        <section className="team-member-wrapper relative pt-15  overflow-hidden">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

                <img
                    src="/assests/img/home/bg-line.png"
                    className="absolute top-45 w-full left-0 "
                    alt=""
                />

                {/* <div className="text-center relative z-10 mb-16">
                    <h3 className="font-poppins font-medium text-[48px] leading-[123%] tracking-normal">Team <span className="highlight relative z-9 w-fit">Members</span></h3>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Working as one team to build a greener tomorrow working as one team to build a greener tomorrow.
                    </p>
                </div> */}

                <div className="relative max-w-7xl mx-auto px-4 pb-10">
                    <Slider {...settings}>
                        {members.map((m, index) => (
                            <div key={index} className="px-4 member-card">
                                <div
                                    className="
                                    relative member-center px-8 pt-16 pb-10 rounded-xl shadow-xl bg-white text-[#2B3332]
                                    transition-all duration-500
                                    slick-center:scale-[1.15]
                                    slick-center:translate-y-6
                                    slick-center:bg-[#326E4F]
                                    slick-center:text-white
                                "
                                >
                                    <div
                                        className="
                                        absolute left-1/2 -top-14 -translate-x-1/2
                                        transition-all duration-500
                                        w-24 h-24 slick-center:w-32 slick-center:h-32
                                    "
                                    >
                                        <div className="rounded-full overflow-hidden border-[6px] border border-[#F4BE00] shadow-lg">
                                            <img
                                                src={m.img}
                                                alt={m.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-center">
                                        {m.name}
                                    </h3>

                                    <p className="text-xs text-center mt-1 opacity-80 slick-center:text-yellow-200">
                                        {m.role}
                                    </p>

                                    <p className="mt-4 text-sm leading-relaxed text-center">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default TeamMembers;

/* ---------------- CUSTOM ARROWS ---------------- */

const NextArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute right-[-45px] top-[55%] -translate-y-1/2 z-20
            p-2 border border-solid border-[#313131] cursor-pointer rounded-md bg-[#FFFFFFB0]
        "
    >
        <ArrowRight size={26} />
    </button>
);

const PrevArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute left-[-45px] top-[55%] -translate-y-1/2 z-20
            p-2 border border-solid border-[#313131]  cursor-pointer rounded-md bg-[#FFFFFFB0]
        "
    >
        <ArrowLeft size={26} />
    </button>
);
