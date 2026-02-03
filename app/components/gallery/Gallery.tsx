"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import HeroSection from "../common/InnerPageHero/HeroSection";
import { useGetGalleryQuery } from "@/app/redux/api/galleryApi";


export default function Gallery() {
  const { data, isLoading, error } = useGetGalleryQuery();
   console.log("gallery data", data);
  // Bind Fancybox AFTER images are rendered
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: { display: ["close"] },
      dragToClose: true,
      infinite: true,
    } as any);

    return () => Fancybox.destroy();
  }, []);

  return (
    <div>
      {/* HERO */}
      <HeroSection
        backgroundImage="/culture/culture-banner.jpg"
        mobileBackgroundImage="/web-development/web-development-mobile.jpg"
        title={
          <h1 className="font-poppins font-normal hero-heading font-poppins  pt-15 text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] capitalize text-white">
            Inside the Culture That
            <br />
            <span className=" hero-heading hero-highlight relative z-10 font-poppins font-semibold text-[32px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] text-[#F4BE00]">
              Drives Vibes
            </span>
          </h1>
        }
        description=" A glimpse into everyday moments of collaboration, celebration, and team bonding that shape the spirit of Vibes."
      />

      {/* CONTENT */}
      <section className="pb-20 section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          {/* HEADER */}
          <div className="flex justify-center mb-5">
            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
              <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                Our Culture
              </span>
            </div>
          </div>

          <h3 className="text-center font-poppins font-medium text-[28px]  sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]">
            <span className=" relative w-fit highlight font-semibold">Beyond the</span> Desk
          </h3>

          <p className="text-[#707070] text-center max-w-2xl mx-auto mb-16 mt-5">
            Snapshots of teamwork, connection, and the people who bring energy and purpose beyond the workplace.
          </p>

          {/* STATES */}
          {isLoading && (
            <p className="text-center text-lg">Loading gallery...</p>
          )}

          {error && (
            <p className="text-center text-red-500">
              Failed to load gallery
            </p>
          )}

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gallery-group">
            {data?.gallery?.map((item) => (
              <a
                key={item.gallery_id}
                href={item.name}
                data-fancybox="gallery"
                className="relative overflow-hidden gallery-card shadow-lg"
              >
                <img
                  src={item.name}
                  alt={item?.image_alt || "gallery_image"}
                  width={600}
                  height={400}
                  className="w-full h-[260px] object-cover gallery-image shadow-lg shadow-gray-700/40"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
