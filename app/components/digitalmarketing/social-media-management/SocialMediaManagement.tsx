"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import OurBlogs from '../../blogs/blogs';
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import HeroSection from '../../common/HeroSection/HeroSection';
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';

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
      Insights, trends, and expert perspectives on social media strategy,<br /> content performance, and digital brand growth.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service: 'digital'
};

const SocialMediaManagement = () => {
  const router = useRouter();
  return (
    <div className="overflow-hidden">
      <HeroSection
        bgImage="/digital-m-details/social-media-management-vibes-communications.jpg"
         mobileBgImage="/digital-m-details/social-media-management-mobile-banner-vibes-communications.jpeg"
        title={
          <>
            Social Media <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[35px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Management</span>
          </>
        }
        description="Strategic social media management designed to shape perception, strengthen engagement, and create consistent brand value across platforms."
      />
      <AboutSection
        badgeText="Services"
        heading="Strategic Social Media "
        highlightText="Services"
        description=" End-to-end social media marketing services focused on planning, storytelling, and performance crafted to align brand objectives with evolving audience behaviour."
        mainImage="/digital-m-details/Social-media-management-vibes-communications.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="Social-media-management-vibes-communications"
        features={[
          {
            icon: "/digital-m-details/copy-writing.png",
            title: <>Content Creation & Planning</>,
            alt: "Content Creation & Planning",
            subtitle: "Purpose-driven content calendars, platform-specific creatives, and messaging frameworks built to maintain consistency, relevance, and long-term brand recall delivered by a results-focused social media agency."
          },
          {
            icon: "/digital-m-details/b2b.png",
            title: <>B2B Social Media Management</>,
            alt: "B2B Social Media Management",
            subtitle: "Professional, insight-driven social strategies led by an experienced smm marketing agency, positioning brands as industry leaders, strengthening credibility, and supporting sustainable business growth."
          },

          {
            icon: "/digital-m-details/b2c.png",
            title: <>B2C Social Media Management</>,
            alt: "B2C Social Media Management",
            subtitle: "Engaging, trend-responsive social storytelling designed to increase visibility, build community, and drive meaningful consumer interaction powered by a performance-led social media marketing agency."
          },
        ]}
      />
      <WhyChooseUs
        badgeText="Why Choose Us?"
        backgroundImage="/technology-details/common-casestudy-bg.jpg"
        heading=" Vibes Social Growth "
        highlightText="Framework"
        description=" Purpose-driven social strategies built to engage audiences and strengthen brand relevance."
        centerText={`Why Brands,\nTrust Vibes?`}
        slides={[
          {
            title: "Content with Clear Intent",
            desc: " Every post, reel, and story aligns with brand goals—engagement, community building, or lead generation.",
          },
          {
            title: "Platform-Specific Strategy",
            desc: "Customized content and formats optimized for each social platform to maximize reach and interaction.",
          },
          {
            title: "Insights, Analytics & Consistency",
            desc: "Performance-driven content calendars, analytics-led refinements, and consistent brand voice across channels.",
          },
          {
            title: "Content with Clear Intent",
            desc: " Every post, reel, and story aligns with brand goals—engagement, community building, or lead generation.",
          },

        ]}
      />

      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Elevate Your Social Presence"
        subtitle="Create a social media presence that reflects brand value, clarity, and consistency across every platform"
        buttonText="Let’s Connect"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />

    </div>
  )
}

export default SocialMediaManagement