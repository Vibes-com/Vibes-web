"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { useGetAllTeamMembersQuery } from "@/app/redux/api/teamMembersApi";
import MemberCard from "./membercard";

const TeamMembers = () => {
  const { data, isLoading, isError } = useGetAllTeamMembersQuery();
  const [activeIndex, setActiveIndex] = useState(0);

  const members = data?.member_list ?? [];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: 1024,   // Tablet / small laptop
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 767,    // Mobile
      settings: {
        slidesToShow: 1,
        centerMode: false,
        arrows: false,
      },
    },
  ],
};

  if (isLoading) {
    return (
      <p className="text-center py-20 text-gray-500">
        Loading team members...
      </p>
    );
  }

  if (isError || members.length === 0) {
    return (
      <p className="text-center py-20 text-red-500">
        Failed to load team members
      </p>
    );
  }

  return (
    <div className="team-member-wrapper relative pt-15 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">

        <img
          src="/assests/img/home/bg-line.png"
          className="absolute top-45 w-full left-0"
          alt=""
        />

        <div className="relative max-w-7xl mx-auto px-4 pb-10">
          <Slider {...settings}>
            {members.map((m) => (
              <div key={m.member_id} className="px-4 member-card w-full">
            <div
              className="
                relative w-full max-w-full
                member-center px-8 pt-16 pb-10 rounded-xl shadow-xl
                bg-white text-[#2B3332]
                transition-all duration-500

                md:slick-center:scale-[1.15]
                md:slick-center:translate-y-6
                md:slick-center:bg-[#326E4F]
                md:slick-center:text-white
              "
            >
                  {/* Profile Image */}
                  <div
                    className="
                      absolute left-1/2 -top-14 -translate-x-1/2
                      transition-all duration-500
                      w-24 h-24
                      md:slick-center:w-32
                      md:slick-center:h-32
                    "
                  >
                    <div className="rounded-full overflow-hidden border-[6px] border-[#F4BE00] shadow-lg">
                      <img
                        src={m.member_image}
                        alt={`${m.member_fname} ${m.member_lname}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-center">
                    {m.member_fname} {m.member_lname}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-center mt-1 opacity-80 slick-center:text-yellow-200">
                    {m.member_role}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-center line-clamp-3">
                    {m.member_description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default TeamMembers;
