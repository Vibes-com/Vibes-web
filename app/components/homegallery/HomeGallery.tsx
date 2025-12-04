import React from 'react'
import Image from "next/image";

const HomeGallery = () => {
  return (
    <section className="home-gallery-wrapper section-gap">

      <div className='container mx-auto'>
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
              Key Performance Insights
            </span>
          </div>
        </div>
        <h3 className=" text-center font-poppins font-semibold text-[40px] leading-[1.23] tracking-norma]">
          Good Vibes,<span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Great Moments</span>

        </h3>
        <p className="text-[#707070] font-normal text-[16px] leading-[130%] tracking-[0] text-center max-w-2xl mx-auto mb-16 mt-5">
          From branding basics to advanced digital insights, each blog captures how we learn, refine, decode trends, and interpret the world of brands.
        </p>
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
      </div>
    </section>
  )
}

export default HomeGallery