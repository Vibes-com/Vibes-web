"use client";

import CaseStudiesCard, {
  SingleCaseStudyCard,
} from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";
import { useGetAllCaseStudiesQuery } from "@/app/redux/api/caseStudyApi";

export default function Page() {
  const { data, isLoading, isError } = useGetAllCaseStudiesQuery();

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error</p>;

  // ✅ MAP API → CARD TYPE
  const cards: SingleCaseStudyCard[] =
    data?.data?.map((item) => ({
      id: item.id,
      img: item.thumbnail,
      title: item.client_name,
      slug: item.slug || item.client_slug, // 🔥 FIX HERE
      tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
      buttonText: "View More",
    })) || [];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <CaseStudiesCard data={cards} />
      </div>
    </section>
  );
}
