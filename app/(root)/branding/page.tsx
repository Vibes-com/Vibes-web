"use client";
import OurBlogs from '@/app/components/blogs/blogs'
import BrandingCasestudies from '@/app/components/branding-details/branding-casestudies/BrandingCasestudies'
import BrandingDetailsHero from '@/app/components/branding-details/branding-details-hero/BrandingDetailsHero'
import BrandingDetailsServices from '@/app/components/branding-details/branding-details-services/BrandingDetailsServices'
// import WhyChooseUs from '@/app/components/branding-details/why-choose-us/WhyChooseUs'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import React from 'react'
import { useRouter } from "next/navigation";
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';



const page = () => {
  const router = useRouter();
  return (
    <div>
      <BrandingDetailsHero />
      <BrandingDetailsServices />
      <WhyChooseUs
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading="How We"
        highlightText="Elevate Your Brand"
        description="Combining strategy, creativity, and data-driven insights."
        centerText={`Branding,\nDone Right!`}
        slides={[
          {
        title: "Building Trust",
        desc: "New events or brands struggle to gain audience credibility.",
    },
    {
        title: "Unclear Messaging",
        desc: "Event benefits often fail to communicate value effectively.",
    },
    {
        title: "Quality Leads vs Clicks",
        desc: "Generating impactful leads, not just website traffic, is a challenge.",
    },
    {
        title: "Low Awareness",
        desc: "Even strong promotion efforts sometimes fail to reach the right audience.",
    },
    {
        title: "Targeting the Right Audience",
        desc: "Finding and engaging the ideal online participants remains difficult.",
    },
        ]}
      />

      <BrandingCasestudies />
      <OurBlogs />
      <SuccessStory
        title="Build the Brand You Imagine"
        subtitle=" Branding designed to create clarity, and long-term impact"
        buttonText="Get Started with Us"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default page