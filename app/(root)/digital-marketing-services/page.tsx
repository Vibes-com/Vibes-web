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
  title: "Digital Solutions and Digital Marketing Services | Vibes Communications",

  description:
    "Looking for digital solutions and digital marketing services? Vibes Communications is a leading digital company in Noida, India, delivering SEO, social media, and performance-driven marketing solutions.",

  alternates: {
    canonical: "https://www.vibescom.in/digital-marketing-services",
  },

  openGraph: {
    title: "Digital Solutions and Digital Marketing Services | Vibes Communications",
    description:
      "Looking for digital solutions and digital marketing services? Vibes Communications is a leading digital company in Noida, India, delivering SEO, social media, and performance-driven marketing solutions.",
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
    card: "summary",
    site: "@vibescom",
    title: "Digital Solutions and Digital Marketing Services | Vibes Communications",
    description:
      "Looking for digital solutions and digital marketing services? Vibes Communications is a leading digital company in Noida, India, delivering SEO, social media, and performance-driven marketing solutions.",
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
        alt:"Tomorrows India",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img4.webp" },
      { 
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img1.webp" },
    ],
  },
  {
    alt:"Women Listed Bazar",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video2.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"Ligo Group",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image18.jpg" },
      { 
        alt:"Kapgrow",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img14.webp" },
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
        alt:"BFE",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image19.jpg" },
      { 
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img6.webp" },
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
        alt:"Kapgrow",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img7.webp" },
      { 
        alt:"FADS World Congress",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image17.jpg" },
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
        alt:"City Dental Institute",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image20.jpg" },
      { 
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img10.webp" },
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
        alt:"Tomorrows India",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image26.jpg" },
      { 
        alt:"Kapgrow",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img12.webp" },
    ],
  },
  {
    alt:"Vibes 1 Team Dream",
    type: "video",
    src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-video7.mp4",
  },
  {
    alt:"",
    type: "images",
    images: [
      { 
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img13.webp" },
      { 
        alt:"BFE",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image21.jpg" },
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
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img16.webp" },
      { 
        alt:"Tomorrows India",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-image25.jpg" },
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
        alt:"Women Listed",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img2.webp" },
      { 
        alt:"Kapgrow",
        src: "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/event-img3.webp" },
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
