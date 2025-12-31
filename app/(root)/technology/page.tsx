"use client";

import React from "react";
import { useRouter } from "next/navigation";

import TechnologyDetailsHero from "@/app/components/technology-details/technology-details-hero/TechnologyDetailsHero";
import TechSolutions from "@/app/components/technology-details/tech-solutions/TechSolutions";
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import OurBlogs from "@/app/components/blogs/blogs";
import MarqueeTabsSlider from "@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider";
import CommonCasestudy from "@/app/components/common/CommonCasestudy/CommonCasestudy";

import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";
import { SingleCaseStudyCard } from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";

interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string;
}
const textcontent: blogContent = {
  title: 'Tech Ideas &',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Explore curated articles on emerging tech, smart solutions, and expert perspectives from<br /> Vibes built to inform, inspire, and accelerate digital growth.
    </>
  ),
  bgImage: '/assets/img/web-development/wd-services-bg.jpg'
};

const logos = [
  "/assests/img/technology-details/tech-logo-1.png",
  "/assests/img/technology-details/tech-logo-2.png",
  "/assests/img/technology-details/tech-logo-3.png",
  "/assests/img/technology-details/tech-logo-4.png",
  "/assests/img/technology-details/tech-logo-5.png",
  "/assests/img/technology-details/tech-logo-6.png",
  "/assests/img/technology-details/tech-logo-7.png",
  "/assests/img/technology-details/tech-logo-8.png",
  "/assests/img/technology-details/tech-logo-9.png",
  "/assests/img/technology-details/tech-logo-10.png",
  "/assests/img/technology-details/tech-logo-11.png",
  "/assests/img/technology-details/tech-logo-12.png",
];

const tabs = ["healthcare", "education", "realestate", "entertainment", "government"];

export default function Page() {
  const router = useRouter();

  // ✅ RTK QUERY
  const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

  // ✅ MAP API RESPONSE → CARD TYPE
  const cards: SingleCaseStudyCard[] =
    data?.data?.map((item) => ({
      id: item.id,
      img: item.thumbnail,
      title: item.client_name,
      slug: item.slug || item.client_slug,
      tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
      buttonText: "Inside The Project",
    })) || [];

  return (
    <div>
      <TechnologyDetailsHero />
      <TechSolutions />

      {/* CASE STUDIES SECTION */}
      {isLoading && (
        <p className="text-center py-10 text-gray-500">
          Loading case studies...
        </p>
      )}

      {isError && (
        <p className="text-center py-10 text-red-500">
          Failed to load case studies
        </p>
      )}

      {!isLoading && !isError && cards.length > 0 && (
        <CommonCasestudy
          badgeText="CASE STUDIES"
          title="Code that Delivers"
          highlightTitle="Real Impact"
          description="Explore real technology success stories where Vibes turns complex challenges into measurable outcomes, delivering smarter, scalable digital solutions."
          buttonText="Dive Into Success Stories"
          cards={cards}
          bgImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        />
      )}

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
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact-us")}
      />
    </div>
  );
}
