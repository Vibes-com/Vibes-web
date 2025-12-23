"use client";

import React from "react";
import { useRouter } from "next/navigation";

import OurBlogs from "@/app/components/blogs/blogs";
import CommonCasestudy from "@/app/components/common/CommonCasestudy/CommonCasestudy";
import MarqueeTabsSlider from "@/app/components/common/MarqueeTabsSlider/MarqueeTabsSlider";
import DigitalMarketingDetailsHero from "@/app/components/digital-marketing-details/digital-marketing-hero/DigitalMarketingDetailsHero";
import DigitalMarketingSolutions from "@/app/components/digital-marketing-details/digital-marketing-solutions/DigitalMarketingSolutions";
import WhyChooseUs from "@/app/components/digital-marketing-details/why-choose-us/WhyChooseUs";
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";

import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";
import { SingleCaseStudyCard } from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";

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
      buttonText: "View More",
    })) || [];

  return (
    <div>
      <DigitalMarketingDetailsHero />
      <DigitalMarketingSolutions />
      <WhyChooseUs />

      {/* CASE STUDIES */}
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
          title="Campaigns That Create"
          highlightTitle="Real Impact"
          description="Discover how our digital marketing strategies turn insights into action and brands into market leaders."
          buttonText="Explore Case Studies"
          cards={cards}
          bgColor="#dfe8dd"
        />
      )}

      <OurBlogs />

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
        onButtonClick={() => router.push("/contact")}
      />
    </div>
  );
}
