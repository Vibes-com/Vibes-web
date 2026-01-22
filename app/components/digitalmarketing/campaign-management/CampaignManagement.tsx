"use client";
import React from 'react'
import { useRouter } from "next/navigation";
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
      Explore thought leadership, trends, and proven strategies behind<br /> successful influencer and event-led campaigns shaping modern brand communication.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service: 'digital'
};

const CampaignManagement = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/campaign-management/compaign-banner.jpg"
        title={
          <>
            Campaign <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Management</span>
          </>
        }
        description="End-to-end campaign management that transforms strategy into action, ensuring consistent execution, measurable reach, and lasting brand impact across digital and on-ground platforms positioning Vibes as a reliable campaign management agency for brands seeking results."
      />
      <AboutSection
        badgeText="Services"
        heading="Campaign Execution That "
        highlightText="Drives Engagement"
        description=" From audience discovery to on-ground activation, campaigns are designed, managed, and optimized to deliver visibility, relevance, and results across multiple touchpoints."
        mainImage="/digital-m-details/compaign-left-img.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="Campaign Managemnt"
        features={[
          {
            icon: "/digital-m-details/influencer.png",
            title: <>Influencer Marketing</>,
            alt: "Influencer Marketing",
            subtitle: "Strategic influencer collaborations powered by deep industry relationships with leading influencer management companies, amplifying brand narratives through credible voices, targeted communities, and performance-driven partnerships aligned with campaign goals."
          },
          {
            icon: "/digital-m-details/marketing-plan.png",
            title: <>Event Marketing</>,
            alt: "Event Marketing",
            subtitle: "Concept-to-closure event execution that creates immersive brand experiences, drives audience participation, and strengthens brand recall through seamless planning and promotion."
          },

        ]}
      />

      <WhyChooseUs
        badgeText="Why Choose Us?"
        backgroundImage="/technology-details/common-casestudy-bg.jpg"
        heading="Vibes Campaign "
        highlightText="Excellence"
        description=" Strategic, insight-led campaigns designed for reach, relevance, and measurable outcomes."
        centerText={`Why Brands,\nTrust Vibes?`}
        slides={[
          {
            title: "Performance-Led Campaign Design",
            desc: "Campaigns planned around defined objectives, audience intent, and conversion metrics to deliver tangible results.",
          },
          {
            title: "Integrated Planning & Execution",
            desc: " Media strategy, creative direction, and execution aligned across platforms for consistent brand impact supported by collaborations with select social media influencer management companies.",
          },
          {
            title: "Continuous Optimization & Reporting",
            desc: " Live tracking, performance reviews, and data-backed optimizations ensure efficiency throughout the campaign lifecycle.",
          },
          {
            title: "Performance-Led Campaign Design",
            desc: "Campaigns planned around defined objectives, audience intent, and conversion metrics to deliver tangible results.",
          },

        ]}
      />


      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Plan Your Campaign"
        subtitle="Build campaigns that connect, engage, and perform across every channel."
        buttonText="Let’s Connect"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />

    </div>
  )
}

export default CampaignManagement