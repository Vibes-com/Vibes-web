"use client";

import React, { use } from "react";
import Image from "next/image";
import { useGetSingleCaseStudyQuery } from "@/app/redux/api/caseStudyApi";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const { data, isLoading, isError } = useGetSingleCaseStudyQuery(slug);

  if (isLoading) return <p className="py-10 text-center">Loading...</p>;
  if (isError) return <p className="py-10 text-center text-red-500">Error loading case study</p>;

  const caseStudy = data?.data;

  if (!caseStudy) return null;

  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-16">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        {caseStudy.client_name}
      </h1>

      {/* IMAGE */}
      {caseStudy.banner_image && (
        <div className="relative w-full h-[400px] mb-10">
          <Image
            src={caseStudy.banner_image}
            alt={caseStudy.client_name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      {/* CONTENT */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: caseStudy.description }}
      />

      {/* TAGS */}
      {caseStudy.tags && (
        <div className="flex flex-wrap gap-3 mt-8">
          {caseStudy.tags.split(",").map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
