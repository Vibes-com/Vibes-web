
import JobTabs from '@/app/components/careers/JobTabs/JobTabs'
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/assests/img/career/career-banner.jpg"
        title={
          <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
            Where Careers Take Shape:
            <br />
            <span className=" hero-highlight relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
              Growth at Vibes
            </span>
          </h1>
        }
        description="An environment that nurtures talent, encourages innovation, and supports long-term professional growth."
      />
      <JobTabs />
    </div>
  )
}

export default page