"use client";

import React from "react";
import CaseStudyDetailsHero from "@/app/components/case-study-details/case-study-details-hero/CaseStudyDetailsHero";
import CaseStudyDetailsAbout from "@/app/components/case-study-details/case-study-details-about/CaseStudyDetailsAbout";
import CaseStudyDetailsBrief from "@/app/components/case-study-details/case-study-details-brief/CaseStudyDetailsBrief";
import CaseStudyDetailsImpact from "@/app/components/case-study-details/case-study-details-impact/CaseStudyDetailsImpact";
import CaseStudyDetailsBranding from "@/app/components/case-study-details/case-study-details-branding/CaseStudyDetailsBranding";
import { useGetSingleCaseStudyQuery } from "@/app/redux/api/caseStudyApi";
import { htmlToList } from "@/app/utils/htmlToList";

type Props = {
  slug: string;
};

const ClientPage = ({ slug }: Props) => {
  const { data, isLoading, isError } = useGetSingleCaseStudyQuery(slug);
console.log("single case study data", data);
  if (isLoading) {
    return <p className="py-20 text-center">Loading...</p>;
  }

  if (isError || !data?.data) {
    return (
      <p className="py-20 text-center text-red-500">
        Failed to load case study
      </p>
    );
  }

  const caseStudy = data.data;

  return (
    <div>
      <CaseStudyDetailsHero
        title={caseStudy.banner_heading?.split(" ")[0] || ""}
        highlightTitle={
          caseStudy.banner_heading?.split(" ").slice(1).join(" ") || ""
        }
        description={caseStudy.short_desc || ""}
        backgroundImage={caseStudy.banner_image}
      />

      <CaseStudyDetailsAbout
        title="The Client"
        imageSrc={caseStudy.left_side_page_image}
        imageAlt={caseStudy.client_name}
        points={htmlToList(caseStudy.the_client)}
      />

      <CaseStudyDetailsBrief
        leftBlock={{
          badgeText: "BRIEF",
          title: "Brief",
          dotColor: "#466E59",
          points: htmlToList(caseStudy.brief),
        }}
        rightBlock={{
          badgeText: "OUR APPROACH",
          title: "Our Approach",
          dotColor: "#2F6F4E",
          textColor: "#6B6B6B",
          points: htmlToList(caseStudy.our_approach),
        }}
      />

      <CaseStudyDetailsImpact
        titleLines={["What We", "Did For"]}
        highlightText={caseStudy.client_name}
        impactList={[
          caseStudy.digital_marketing,
          caseStudy.digital_strategy,
          caseStudy.digital_leadgeneration,
          caseStudy.digital_customer_relation,
          caseStudy.digital_social_media,
        ].filter(Boolean)}
      />

      <CaseStudyDetailsBranding
        sections={[
          {
            title: "Branding",
            altTags: caseStudy.banner_image_names || [],
            images: caseStudy.banner_middle_imgage || [],
            slidesPerView: 1,
            paginationId: "case-study-pagination-1",
            autoplay: true,
          },
          {
            title: "Creative Display",
            altTags: caseStudy.banner_image_names || [],
            images:
              caseStudy.creative_display?.map(
                (item: any) => item.social_post
              ) || [],
            slidesPerView: 4,
            paginationId: "case-study-pagination-2",
          },
         
        ]}
      />
    </div>
  );
};

export default ClientPage;
