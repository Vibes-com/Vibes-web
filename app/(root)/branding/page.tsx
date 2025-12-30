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

interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string,
  service:string
}
const textcontent: blogContent = {
  title: 'Branding',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Expert perspectives, trends, and strategic thinking that explore branding, <br />identity, and communication shaping how brands grow and stay relevant.
    </>
  ),
  bgImage: '/assets/img/web-development/wd-services-bg.jpg',
  service:'branding'
};

const page = () => {
  const router = useRouter();
  return (
    <div>
      <BrandingDetailsHero />
      <BrandingDetailsServices />
      <WhyChooseUs
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        badgeText="Why Choose Us?"
        heading="How We"
        highlightText="Elevate Your Brand"
        description="Combining strategy, creativity, and data-driven insights to build distinctive brands that stand out, connect meaningfully, and drive measurable business impact."
        centerText={`Branding,\nDone Right!`}
        slides={[
          {
            title: "Expertise",
            desc: "Deep branding expertise driven by strategy and proven frameworks aligned with long-term goals.",
          },
          {
            title: "Creativity",
            desc: "Purpose-driven creativity that transforms brand stories into clear, compelling, and visual  experiences.",
          },
          {
            title: "Data-Backed Insights",
            desc: "Decisions driven by market research, audience behaviour, and insights for measurable results.",
          },
          {
            title: "Industry Experience",
            desc: "Proven cross-industry experience enables adaptable branding solutions tailored to unique sector challenges.",
          },

        ]}
      />


      <BrandingCasestudies />
      <OurBlogs tData={textcontent} />
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