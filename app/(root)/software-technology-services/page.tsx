// "use client";

import React from "react";
// import { useRouter } from "next/navigation";

import TechnologyDetailsHero from "@/app/components/technology-details/technology-details-hero/TechnologyDetailsHero";
import TechSolutions from "@/app/components/technology-details/tech-solutions/TechSolutions";
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import OurBlogs from "@/app/components/blogs/blogs";
import MarqueeTabsSlider from "@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider";
import CommonCasestudy from "@/app/components/common/CommonCasestudy/CommonCasestudy";



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Technology Solutions Services | Vibes Communications",

  description:
    "Vibes Communications provides you with a team of technology experts to handle your business challenges and deliver scalable, high-performance digital solutions.",

  alternates: {
    canonical: "https://www.vibescom.in/technology-services",
  },

  openGraph: {
    title: "Best Technology Solutions Services | Vibes Communications",
    description:
      "Vibes Communications provides you with a team of technology experts to handle your business challenges and deliver scalable, high-performance digital solutions.",
    url: "https://www.vibescom.in/technology-services",
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
    title: "Best Technology Solutions Services | Vibes Communications",
    description:
      "Vibes Communications provides you with a team of technology experts to handle your business challenges and deliver scalable, high-performance digital solutions.",
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
  service: string;
}
const textcontent: blogContent = {
  title: 'Tech Ideas &',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Explore curated articles on emerging tech, smart solutions, and expert perspectives from<br /> Vibes built to inform, inspire, and accelerate digital growth.
    </>
  ),
  bgImage: '/web-development/wd-services-bg.jpg',
  service: 'technology'
};

const logos = [
  "/technology-details/tech-logo-1.png",
  "/technology-details/tech-logo-2.png",
  "/technology-details/tech-logo-3.png",
  "/technology-details/tech-logo-4.png",
  "/technology-details/tech-logo-5.png",
  "/technology-details/tech-logo-6.png",
  "/technology-details/tech-logo-7.png",
  "/technology-details/tech-logo-8.png",
  "/technology-details/tech-logo-9.png",
  "/technology-details/tech-logo-10.png",
  "/technology-details/tech-logo-11.png",
  "/technology-details/tech-logo-12.png",
];

const tabs = ["healthcare", "education", "realestate", "entertainment", "government"];

export default function Page() {
  // const router = useRouter();

  

  return (
    <div className="overflow-hidden">
      <TechnologyDetailsHero />
      <TechSolutions />

      {/* CASE STUDIES SECTION */}
      {/* {isLoading && (
        <p className="text-center py-10 text-gray-500">
          Loading case studies...
        </p>
      )}

      {isError && (
        <p className="text-center py-10 text-red-500">
          Failed to load case studies
        </p>
      )} */}

      
        <CommonCasestudy
          badgeText="CASE STUDIES"
          title="Code that Delivers"
          highlightTitle="Real Impact"
          description="Explore real technology success stories where Vibes turns complex challenges into measurable outcomes, delivering smarter, scalable digital solutions."
          buttonText="Dive Into Success Stories"
          bgImage="/technology-details/common-casestudy-bg.jpg"
        />
      

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
