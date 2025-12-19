"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Fancybox, Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import HeroSection from "../common/InnerPageHero/HeroSection";

const images = [
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
   {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
   {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
  {
    src: "/assests/img/career/career-banner.jpg",
    thumb: "/assests/img/career/career-banner.jpg",
  },
];

export default function Gallery() {
 useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
        display: ["close"],
    },
    dragToClose: true,
    infinite: true,
    } as any);

    return () => Fancybox.destroy();
  }, []);
  return (
     
    <div>
       
        <HeroSection
      backgroundImage="/assests/img/culture/culture-banner.jpg"
      title={
        <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
          Get your Business streamlined for success.
          <br />
          <span className="relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
           Our Culture
          </span>
        </h1>
      }
      description="We’re ready to turn ideas into meaningful digital experiences—let’s connect and build something impactful together."
    />

     <div className="container mx-auto px-4 pt-20 pb-5">
        <div className="flex justify-center mb-5">
            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                    Our Culture
                </span>
            </div>
        </div>

        <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Brand Stories</span> in Motion

        </h3>
        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">A curated showcase of visual work that shapes brand perception across channels, including social campaigns, identity design, and custom website builds.</p>
    </div>
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <a
              key={index}
              href={img.src}
              data-fancybox="gallery"
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={img.thumb}
                alt="Gallery image"
                width={600}
                height={400}
                className="w-full h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
