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
  service: string
}
const textcontent: blogContent = {
  title: 'Ideas, insights, and intelligent ',
  highlighttitle: "digital success.",
  Subtitle: (
    <>
      Expert perspectives, trends, and strategic thinking that explore branding, <br />identity, and communication shaping how brands grow and stay relevant.
    </>
  ),
  bgImage: '/technology-details/common-casestudy-bg.jpg',
  service: 'digital'
};


const PerformanceMarketing = () => {
  const router = useRouter();
  return (
    <div className="overflow-hidden">
      <HeroSection
        bgImage="/performance-marketing/performance-marketing-analytics-vibes-communications.jpg"
         mobileBgImage="/performance-marketing/performance-marketing-analytics-mobile-banner-vibes-communications.jpeg"
        title={
          <>
            PERFORMANCE <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[35px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">MARKETING </span>
          </>
        }
        description="Data-led digital campaigns focused on conversions, ROI, and scalable business growth across platforms."
      />
      <AboutSection
        badgeText="Overview"
        heading="Performance "
        highlightText="Advertising Solutions"
        description="Results-focused advertising strategies by a performance marketing agency, designed to generate high-quality leads, maximize reach, and drive measurable conversions across search and social platforms through precision targeting and data-backed optimization."
        mainImage="/performance-marketing/performance-marketing-agency-vibes-communications.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="performance-marketing-agency-vibes-communications"
        features={[
          {
            icon: "/digital-m-details/leads.png",
            title: <>Lead <br />Generation</>,
            alt: "Lead Generation",
            subtitle: ""
          },
          {
            icon: "/digital-m-details/meta-ads.png",
            title: <>Meta<br />Ads</>,
            alt: "Meta Ads",
            subtitle: ""
          },
          {
            icon: "/digital-m-details/google-ads.png",
            title: <>Google Ads</>,
            alt: "Google Ads",
            subtitle: ""
          },
          {
            icon: "/digital-m-details/linkedin-ads.png",
            title: <>LinkedIn<br />Ads</>,
            alt: "LinkedIn Ads",
            subtitle: ""
          },
        ]}
      />
      <WhyChooseUsSection
        badgeText="Growth Strategy"
        bgImage="/technology-details/common-casestudy-bg.jpg"
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
        backgroundImage="/web-development/wd-services-bg.jpg"
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
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />

    </div>
  )
}

export default PerformanceMarketing