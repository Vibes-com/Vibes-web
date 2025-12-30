"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import PerformanceMarketingHero from './performance-marketing-hero/PerformanceMarketingHero'
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseUsSection from "@/app/components/common/WhyChooseUsSection/WhyChooseUsSection";
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
import OurBlogs from '../../blogs/blogs';
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import HeroSection from '../../common/HeroSection/HeroSection';

interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string,
}
const textcontent: blogContent = {
  title: 'Ideas, insights, and intelligent ',
  highlighttitle: "digital success.",
  Subtitle: (
    <>
      Expert perspectives, trends, and strategic thinking that explore branding, <br />identity, and communication shaping how brands grow and stay relevant.
    </>
  ),
  bgImage: '/assests/img/technology-details/common-casestudy-bg.jpg'
};


const PerformanceMarketing = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/app-development/app-development-bannner.jpg"
        title={
          <>
            PERFORMANCE <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">MARKETING </span>
          </>
        }
        description="Data-led digital campaigns focused on conversions, ROI, and scalable business growth across platforms."
      />
      <AboutSection
        badgeText="Overview"
        heading="Performance "
        highlightText="Advertising Solutions"
        description="Results-focused advertising strategies designed to generate high-quality leads, maximize reach, and drive measurable conversions across search and social platforms with precision targeting and data-backed optimization."
        mainImage="/assests/img/performance-marketing/pm-overview-left-img.png"
        bgImage="/assests/img/web-development/wd-services-bg.jpg"

        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Lead <br />Generation</>,
            subtitle: ""
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Meta<br />Ads</>,
            subtitle: ""
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Google Ads</>,
            subtitle: ""
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>LinkedIn<br />Ads</>,
            subtitle: ""
          },
        ]}
      />
      <WhyChooseUsSection
        badgeText="Growth Strategy"
        bgImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            How Brands  <br />
            <span className="highlight relative w-fit z-9 font-semibold">Move Forward?</span>
          </>
        }
        description="Focused branding strategies designed to strengthen identity, build trust, and drive long-term progress."
        cards={[
          {
            title: "Mission-Driven Strategy",
            desc: " Marketing initiatives aligned closely with business objectives to ensure every campaign supports long-term growth.",
            dark: true,
          },
          {
            title: "Performance-First Approach",
            desc: "Every decision guided by data, focusing on conversions, ROI, and measurable outcomes rather than vanity metrics.",
            dark: false,
          },
          {
            title: "Smart Audience Targeting",
            desc: "Advanced segmentation and intent-based targeting to reach the right audience at the right stage of the funnel.",
            dark: false,
          },
          {
            title: "Transparent Performance Reporting",
            desc: "Clear, actionable reporting with complete visibility into spend, performance, and optimization insights.",
            dark: true,
          },
        ]}
      />
      <WhyChooseUs
        badgeText="WHAT SETS US APART  "
        backgroundImage="/assests/img/web-development/wd-services-bg.jpg"
        heading="Vibes Performance "
        highlightText="Advantage"
        description="A results-focused model blending strategy, data, creativity, and transparency to drive consistent growth"
        centerText={`Why Brands,\nTrust Vibes?`}
        slides={[
          {
            title: "Results-Driven Execution",
            desc: "Campaigns built around clear KPIs, conversions, and ROI, ensuring every marketing effort delivers measurable business impact.",
          },
          {
            title: "Data, Strategy & Creativity Combined",
            desc: "Performance insights, audience intelligence, and compelling creatives work together to maximize efficiency and scale.",
          },
          {
            title: "Complete Transparency & Accountability",
            desc: "Clear reporting, real-time performance tracking, and optimization insights provide full visibility into outcomes and spend.",
          },
          {
            title: "Results-Driven Execution",
            desc: "Campaigns built around clear KPIs, conversions, and ROI, ensuring every marketing effort delivers measurable business impact.",
          },

        ]}
      />

      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Turn Clicks Into Conversions"
        subtitle="High-impact performance strategies built to maximize ROI and accelerate results."
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default PerformanceMarketing