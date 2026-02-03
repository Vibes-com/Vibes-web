// "use client";
import React from "react";
// import { useRouter } from "next/navigation";

import OurBlogs from "@/app/components/blogs/blogs";
import CommonCasestudy from "@/app/components/common/CommonCasestudy/CommonCasestudy";
import MarqueeTabsSlider from "@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider";
import DigitalMarketingDetailsHero from "@/app/components/digital-marketing-details/digital-marketing-hero/DigitalMarketingDetailsHero";
import DigitalMarketingSolutions from "@/app/components/digital-marketing-details/digital-marketing-solutions/DigitalMarketingSolutions";
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";

// import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";
import { SingleCaseStudyCard } from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";
import WhyChooseUsSection from "@/app/components/common/WhyChooseUsSection/WhyChooseUsSection";
import MarqueeStorySection, { SlideItem } from "@/app/components/common/MarqueeStorySection/MarqueeStorySection";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Trusted Digital Marketing Company & Consultant",

  description:
    "Expert digital marketing services by a leading digital marketing company. Get Google digital marketing solutions from an experienced digital marketing consultant to grow your business online.",

  alternates: {
    canonical: "https://www.vibescom.in/digital-marketing-services",
  },

  openGraph: {
    title: "Digital Marketing Services | Trusted Digital Marketing Company & Consultant",
    description:
      "Expert digital marketing services by a leading digital marketing company. Get Google digital marketing solutions from an experienced digital marketing consultant to grow your business online.",
    url: "https://www.vibescom.in/digital-marketing-services",
    siteName: "Vibes Communications Pvt Ltd",
    images: [
      {
        url: "https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@vibescom",
    title: "Digital Marketing Services | Trusted Digital Marketing Company & Consultant",
    description:
      "Expert digital marketing services by a leading digital marketing company. Get Google digital marketing solutions from an experienced digital marketing consultant to grow your business online.",
    images: ["https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [{ name: "Vibes Communications" }],
  creator: "Vibes Communications",
  publisher: "Vibes Communications",
};


interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string;
  service:string
}
const textcontent: blogContent = {
  title: 'Ideas, insights, and intelligent ',
  highlighttitle: "digital success.",
  Subtitle: (
    <>
      Insights focused on performance, visibility, and sustainable<br /> digital growth.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service:'digital'
};

const slides: SlideItem[] = [
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"home/brand launch services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch services-vibes communications.webp" },
      { 
        alt:"women listed marketing-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/women listed marketing-vibes communications.webp" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video2.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"performance marketing services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/performance marketing services- vibes communications.jpg" },
      { 
        alt:"legal advisory services -vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/legal advisory services -vibes communications.webp" },
    ],
  },
  {
    alt:"Tomorrows India",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video9.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"branding services - vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/branding services - vibes communications.jpg" },
      { 
        alt:"marketing for events -vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/marketing for events -vibes communications.webp" },
    ],
  },
  {
    alt:"Vibes Communications",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video6.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"hr consulting services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/hr consulting services-vibes communications.webp" },
      { 
        alt:"website Maintenance services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/website Maintenance services- vibes communications.jpg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video1.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"dental institute services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/dental institute services-vibes communications.jpg" },
      { 
        alt:"performance marketing-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/performance marketing-vibes communications.jpeg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video3.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"brand launch platform services- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch platform services- vibes communications.jpg" },
      { 
        alt:"corporate advisory services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/corporate advisory services-vibes communications.webp" },
    ],
  },
  {
    alt:"Vibes Communications One Team Dream",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video7.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"digital marketing for exhibition-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/digital marketing for exhibition-vibes communications.jpeg" },
      { 
        alt:"vibes communications- branding client",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/vibes communications- branding client.jpg" },
    ],
  },
  {
    alt:"Women Listed",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video4.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"marketing services for events-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/marketing services for events-vibes communications.webp" },
      { 
        alt:"brand launch platform- vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/brand launch platform- vibes communications.jpg" },
    ],
  },
   {
    alt:"Tomorrows India",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video5.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"digital marketing for events-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/digital marketing for events-vibes communications.webp" },
      { 
        alt:"webinar services-vibes communications",
        src: "https://d32ze5duxdubbq.cloudfront.net/assets/img/home/webinar services-vibes communications.webp" },
    ],
  },
];

const logos = [
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
  "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
];

const tabs = ["healthcare", "education", "realestate", "entertainment", "government"];

export default function Page() {
  // const router = useRouter();

  // // ✅ RTK QUERY
  // const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

  // // ✅ MAP API RESPONSE → CARD TYPE
  // const cards: SingleCaseStudyCard[] =
  //   data?.data?.map((item) => ({
  //     id: item.id,
  //     img: item.thumbnail,
  //     title: item.client_name,
  //     slug: item.slug || item.client_slug,
  //     tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
  //     buttonText: "View More",
  //   })) || [];

  return (
    <div className="overflow-hidden">
      <DigitalMarketingDetailsHero />
      <DigitalMarketingSolutions />
      <WhyChooseUsSection
        badgeText="Why Choose Us"
        bgImage="/technology-details/common-casestudy-bg.jpg"
        heading={
          <>
            A Smarter Way to <br />
            <span className="highlight w-fit relative z-9 font-semibold">Build Digital Brands</span>
          </>
        }
        description="Vibes applies a structured, insight-led digital marketing framework that aligns strategy, creativity, and performance."
        cards={[
          {
            title: "Strategic Alignment",
            desc: "Digital strategies aligned with business goals, market realities, and customer intent to drive measurable outcomes.",
            dark: true,
          },
          {
            title: "Audience Intelligence",
            desc: "Data-driven insights and behavioral analysis guide precise targeting, messaging, and channel selection.",
            dark: false,
          },
          {
            title: "Omnichannel Execution",
            desc: "Search, media, content, and social function as one integrated system to maximize performance and efficiency.",
            dark: false,
          },
          {
            title: "Performance Optimization",
            desc: "Continuous monitoring and refinement ensure relevance, scalability, and sustained digital growth.",
            dark: true,
          },
        ]}
      />
      <MarqueeStorySection
        badge="Work Showcase"
        title="That Drives Impact"
        highlightTitle="Digital Work"
        description="A showcase of strategic digital campaigns, performance marketing, and brand-building initiatives that deliver measurable results across industries."
        slides={slides}
        ctaText="Talk to us today"
        bgImage="/web-development/wd-services-bg.jpg"
      />

      {/* CASE STUDIES */}
      {/* {isLoading && (
        <p className="text-center py-10 text-gray-500">
          Loading case studies...
        </p>
      )}

      {isError && (
        <p className="text-center py-10 text-red-500">
          Failed to load case studies
        </p>
      )}

      {!isLoading && !isError && cards.length > 0 && ( */}
        <CommonCasestudy
          badgeText="CASE STUDIES"
          title="Campaigns That Create"
          highlightTitle="Real Impact"
          description="Discover how our digital marketing strategies turn insights into action and brands into market leaders."
          buttonText="Explore Case Studies"
          // cards={cards}
          bgImage="/technology-details/common-casestudy-bg.jpg"
        />
      {/* )} */}

      <OurBlogs tData={textcontent} />

      <MarqueeTabsSlider
        badgeText="Trusted Clients"
        highlightTitle="Esteemed"
        title="Clients"
        description="A curated showcase of visual work that shapes brand perception across channels."
        logos={logos}
        tabs={tabs}
        bgColor="#466E59"
      />

      <SuccessStory
        title="Let’s Build Something Powerful"
        subtitle="Scalable digital solutions tailored for you"
        buttonText="Talk to Experts"
        arrowImage="/technology-details/arrow.png"
        className="bg-black"
        // onButtonClick={() => router.push("/contact-for-digital-requirements")}
        btnlink="/contact-for-digital-requirements"
      />
    </div>
  );
}
