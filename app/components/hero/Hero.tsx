"use client";
// import React from "react";
import { useGetAllBannersQuery } from "@/app/redux/api/bannerApi";

const BANNER_LIMIT = 1;

const Hero = () => {
  const { data, isLoading, isError } = useGetAllBannersQuery();

  const banners = data?.banners || [];

  if (isLoading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading banner...
      </p>
    );
  }

  if (isError || !banners.length) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load banner
      </p>
    );
  }

  const heroBanners = banners
  // .sort((a: any, b: any) => Number(a.show_order) - Number(b.show_order))
  // .slice(0, BANNER_LIMIT);

  return (
    <div className=" w-full aspect-video overflow-hidden hero-video">
      {heroBanners.map((item: any, index: number) => (
        <div key={index} className="absolute inset-0 pt-[87px] sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
          {item.banner_type === "video" ? (
            <video
              className="w-full object-contain sm:object-cover lg:object-cover xl:object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={item.poster}
           
            >
              <source src={item.banner} type="video/mp4"  />
            </video>
          ) : (
            <img
              src={item.banner}
              alt={item.image_alt || "Hero Banner"}
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Hero;
