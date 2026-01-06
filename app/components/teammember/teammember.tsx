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
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            speed={1000}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 24,
              },
            }}
            className="team-swiper"
          >
            {members.map((m, index) => (
              <SwiperSlide key={m.member_id} className="px-4 member-card">
                <MemberCard m={m} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="
              swiper-button-prev-custom
              hidden md:flex
              absolute left-[-18px] sm:left-[-45px] md:left-[-21px] lg:left-[-45px] xl:left-[-45px] 2xl:left-[-45px] top-[55%] -translate-y-1/2 z-20
              p-2 border border-solid border-[#313131] cursor-pointer rounded-md bg-[#FFFFFFB0]
            "
          >
            <ArrowLeft size={26} />
          </button>
          <button
            className="
              swiper-button-next-custom
              hidden md:flex
              absolute right-[-18px] sm:right-[-45px] md:right-[-21px] lg:right-[-45px] xl:right-[-45px] 2xl:right-[-45px] top-[55%] -translate-y-1/2 z-20
              p-2 border border-solid border-[#313131] cursor-pointer rounded-md bg-[#FFFFFFB0]
            "
          >
            <ArrowRight size={26} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TeamMembers;
