import React from 'react'
import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import SlideUp from '../animations/SlideUp';

const HomeGallery = () => {
  return (
    <section className="home-gallery-wrapper section-gap">

      <div className="container mx-auto mb-5">
        <div className="flex justify-center mb-5">
          <div className="
        px-6 py-2 
        rounded-full 
        border border-[#F4BE00] 
        inline-flex items-center gap-2
      ">
            <span
              className="w-2 h-2 rounded-full bg-[#F4BE00]"
            ></span>
            <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
              Gallery
            </span>
          </div>
        </div>
        <h3 className=" text-center font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
          Good Vibes, <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Great Moments</span>

        </h3>
        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
          Memories that capture energy, teamwork, and the spirit of creating together.
        </p>
        <SlideUp delay={0.5}>
        <div className="wrapper w-80 mt-5">
          <div>
            <Image
              src="/assests/img/home/home-gallery-img-1.jpg"
              alt="Gallery Image 1"
              width={400}
              height={400}
            />
          </div>

          <div>
            <Image
              src="/assests/img/home/home-gallery-img-2.jpg"
              alt="Gallery Image 2"
              width={400}
              height={400}
            />
          </div>

          <div>
            <Image
              src="/assests/img/home/home-gallery-img-3.jpg"
              alt="Gallery Image 3"
              width={400}
              height={400}
            />
          </div>

          <div>
            <Image
              src="/assests/img/home/home-gallery-img-4.png"
              alt="Gallery Image 4"
              width={400}
              height={400}
            />
          </div>

          <div>
            <Image
              src="/assests/img/home/home-gallery-img-5.jpg"
              alt="Gallery Image 5"
              width={400}
              height={400}
            />
          </div>

          <div>
            <Image
              src="/assests/img/home/home-gallery-img-6.jpg"
              alt="Gallery Image 6"
              width={400}
              height={400}
            />
          </div>
        </div>
        </SlideUp>
        <div className="text-center mt-12">
          <Button2 className="mt-5 p-[20px] hover:border-[#2B4C69] hover:border-[2px] hover:text-[#F4BE00] hover:bg-transparent">
            <span>Peek Behind the Magic</span>
            <ArrowUpIcon className="transform rotate-45" />
          </Button2>
        </div>
      </div>
    </section>
  )
}

export default HomeGallery