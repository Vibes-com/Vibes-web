"use client";

import CaseStudiesListingHero from "@/app/components/casestudies/casestudies-listing-hero/CaseStudiesListingHero";
import CaseStudiesCard, {
  SingleCaseStudyCard,
} from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";
import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";

export default function Page() {
  const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error</p>;

  const cards: SingleCaseStudyCard[] =
    data?.data?.map((item) => ({
      id: item.id,
      img: item.thumbnail,
      title: item.client_name,
      slug: item.slug || item.client_slug,
      tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
      buttonText: "Inside The Project",
    })) || [];
    console.log(data)
  return (
    <div>
      <CaseStudiesListingHero />
      <section className="case-study-listing-wrapper section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudiesCard data={cards} />
          </div>
        </div>
      </section>
    </div>
  );
}
