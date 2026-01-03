import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { caseStudyApiUrls } from "@/app/constants/apiUrls";


type PageProps = {
  params: Promise<{ slug: string }>;
};


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params; // ✅ required now

  if (!slug) {
    return {
      title: "Case Study",
      description: "Invalid case study",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = caseStudyApiUrls.getSingleCasestudy.replace(/^\/|\/$/g, "");
  const apiUrl = `${baseUrl}/${endpoint}/${slug}`;

  const res = await fetch(apiUrl, {
    method: 'GET', // Default is GET, but good to be explicit
    headers: {
      "VIBES-API-KEY": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
 
  if (!res.ok) {
    return {
      title: "Case Study",
      description: "Case study details",
    };
  }

  const json = await res.json();
  const caseStudy = json?.data;
  const meta_description = caseStudy?.page_description.match(/content="([^"]*)"/)?.[1];
  return {
    title: caseStudy?.page_title || caseStudy?.banner_heading || "Case Study",
    description: meta_description || caseStudy?.short_desc || "",
  };
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ unwrap promise
  return <ClientPage slug={slug} />;
}


// // "use client";
// import React, { use } from "react";
// import CaseStudyDetailsHero from "@/app/components/case-study-details/case-study-details-hero/CaseStudyDetailsHero";
// import CaseStudyDetailsAbout from "@/app/components/case-study-details/case-study-details-about/CaseStudyDetailsAbout";
// import CaseStudyDetailsBrief from "@/app/components/case-study-details/case-study-details-brief/CaseStudyDetailsBrief";
// import CaseStudyDetailsImpact from "@/app/components/case-study-details/case-study-details-impact/CaseStudyDetailsImpact";
// import CaseStudyDetailsBranding from "@/app/components/case-study-details/case-study-details-branding/CaseStudyDetailsBranding";
// import { useGetSingleCaseStudyQuery } from "@/app/redux/api/caseStudyApi";
// import { htmlToList } from "@/app/utils/htmlToList";



// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// const Page = ({ params }: PageProps) => {
//   const { slug } = use(params);

//   const { data, isLoading, isError } = useGetSingleCaseStudyQuery(slug);

//   if (isLoading) return <p className="py-20 text-center">Loading...</p>;
//   if (isError || !data?.data)
//     return <p className="py-20 text-center text-red-500">Failed to load case study</p>;

//   const caseStudy = data.data;

//   return (
//     <div>
//       {/* HERO */}
//       <CaseStudyDetailsHero
//         title={caseStudy.banner_heading?.split(" ")[0] || ""}
//         highlightTitle={caseStudy.banner_heading?.split(" ").slice(1).join(" ") || ""}
//         description={caseStudy.short_desc || ""}
//         backgroundImage={caseStudy.banner_image}
//         // align={caseStudy.align}
//       />

//       {/* ABOUT / CLIENT */}
//       <CaseStudyDetailsAbout
//         title="The Client"
//         imageSrc={caseStudy.left_side_page_image}
//         imageAlt={caseStudy.client_name}
//         points={htmlToList(caseStudy.the_client)}
//       />

//       {/* BRIEF + APPROACH */}
//       <CaseStudyDetailsBrief
//         leftBlock={{
//           badgeText: "BRIEF",
//           title: "Brief",
//           dotColor: "#466E59",
//           points: htmlToList(caseStudy.brief),
//         }}
//         rightBlock={{
//           badgeText: "OUR APPROACH",
//           title: "Our Approach",
//           dotColor: "#2F6F4E",
//           textColor: "#6B6B6B",
//           points: htmlToList(caseStudy.our_approach),
//         }}
//       />

//       {/* IMPACT */}
//       <CaseStudyDetailsImpact
//         titleLines={["What We", "Did For"]}
//         highlightText={caseStudy.client_name}
//         impactList={[
//           caseStudy.digital_marketing,
//           caseStudy.digital_strategy,
//           caseStudy.digital_leadgeneration,
//           caseStudy.digital_customer_relation,
//           caseStudy.digital_social_media,
//         ].filter(Boolean)}
//       />

//       {/* BRANDING / SLIDERS */}
//       <CaseStudyDetailsBranding
//         sections={[
//           {
//             title: "Branding",
//             images: caseStudy.banner_middle_imgage || [],
//             slidesPerView: 1,
//             paginationId: "case-study-pagination-1",
//             autoplay: true,
//           },
//           {
//             title: "Creative Display",
//             images: caseStudy.creative_display?.map(item => item.social_post) || [],
//             slidesPerView: 4,
//             paginationId: "case-study-pagination-2",
//           },
//         ]}
//       />
//     </div>
//   );
// };

// export default Page;
