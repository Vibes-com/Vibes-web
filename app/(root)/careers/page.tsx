
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
          Get your Business streamlined for success.
          <br />
          <span className="relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
            Growth in Vibes
          </span>
        </h1>
      }
      description="We’re ready to turn ideas into meaningful digital experiences—let’s connect and build something impactful together."
    />
      <JobTabs/>
    </div>
  )
}

export default page