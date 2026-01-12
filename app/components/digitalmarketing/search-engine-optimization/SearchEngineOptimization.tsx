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
  title: 'SEO Insights & ',
  highlighttitle: "Blogs",
  Subtitle: (
    <>
      Practical perspectives on evolving search algorithms, AI-driven SEO,<br /> content performance, and organic growth strategies.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service: 'digital'
};


const SearchEngineOptimization = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/search-engine-optimization/seo-banner.jpg"
        title={
          <>
            Search Engine <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[33px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Optimization</span>
          </>
        }
        description="Strategic SEO built to improve discoverability, search performance, and long-term digital authority across competitive landscapes."
      />
      <AboutSection
        badgeText="SEO Services"
        heading="Comprehensive SEO Built for "
        highlightText="Sustainable Results"
        description="Data-driven optimization frameworks designed to strengthen rankings, improve site health, and convert organic visibility into business impact."
        mainImage="/digital-m-details/seo-left-img.png"
        bgImage="/web-development/wd-services-bg.jpg"
        alt="SEO Services"
        features={[
          {
            icon: "/digital-m-details/on-page-seo.png",
            title: <>On-Page SEO</>,
            alt: "On-Page SEO",
            subtitle: "Content, structure, and metadata optimization aligned with search intent to enhance relevance, readability, and ranking performance."
          },
          {
            icon: "/digital-m-details/off-page-seo.png",
            title: <>Off-Page SEO</>,
            alt: "Off-Page SEO",
            subtitle: "Authority-building strategies focused on credible backlinks, digital PR, and brand trust signals that strengthen domain strength."
          },

          {
            icon: "/digital-m-details/technical-seo.png",
            title: <>Technical SEO</>,
            alt: "Technical SEO",
            subtitle: "Performance-led optimization ensures crawlability, site speed, mobile readiness, and indexing efficiency for search engines."
          },
          {
            icon: "/digital-m-details/ai.png",
            title: <>LLM Integrations (AI-Led Optimization)</>,
            alt: "LLM Integrations (AI-Led Optimization)",
            subtitle: "Search strategies adapted for AI-powered discovery, optimizing content for large language models and next-generation search experiences."
          },
          {
            icon: "/digital-m-details/keyword.png",
            title: <>Keyword Strategy</>,
            alt: "Keyword Strategy",
            subtitle: "Intent-based keyword frameworks that balance search volume, competition, and conversion potential for sustained organic growth"
          },
        ]}
      />
      <WhyChooseUs
        badgeText="Why Choose Us?"
        backgroundImage="/technology-details/common-casestudy-bg.jpg"
        heading=" Vibes Search "
        highlightText="Visibility Advantage"
        description="Data-backed SEO strategies focused on sustainable rankings, traffic quality, and long-term growth."
        centerText={`Why Brands,\nTrust Vibes?`}
        slides={[
          {
            title: "Intent-Focused Keyword Strategy",
            desc: "Search strategies built around user intent, relevance, and conversion potential—not just rankings.",
          },
          {
            title: "Technical, Content & Authority Alignment",
            desc: "On-page optimization, technical SEO, and content authority work together for holistic performance.",
          },
          {
            title: "Transparent Tracking & Measurable Growth",
            desc: " Clear SEO reporting, ranking visibility, and traffic insights ensure accountability and steady progress.",
          },
          {
            title: "Intent-Focused Keyword Strategy",
            desc: "Search strategies built around user intent, relevance, and conversion potential—not just rankings.",
          },

        ]}
      />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Stronger Rankings Start With Smarter SEO"
        subtitle=" Identify gaps, unlock opportunities, and build search visibility that delivers consistent results."
        buttonText="Let’s Connect"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />

    </div>
  )
}

export default SearchEngineOptimization