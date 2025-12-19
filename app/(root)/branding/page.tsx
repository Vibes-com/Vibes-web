"use client";
import OurBlogs from '@/app/components/blogs/blogs'
import BrandingCasestudies from '@/app/components/branding-details/branding-casestudies/BrandingCasestudies'
import BrandingDetailsHero from '@/app/components/branding-details/branding-details-hero/BrandingDetailsHero'
import BrandingDetailsServices from '@/app/components/branding-details/branding-details-services/BrandingDetailsServices'
import WhyChooseUs from '@/app/components/branding-details/why-choose-us/WhyChooseUs'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import React from 'react'
import { useRouter } from "next/navigation";



const page = () => {
  const router = useRouter();
  return (
    <div>
      <BrandingDetailsHero />
      <BrandingDetailsServices />
      <WhyChooseUs />
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