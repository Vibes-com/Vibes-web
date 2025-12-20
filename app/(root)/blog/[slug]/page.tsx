"use client";

import React, { use } from "react";
import { useGetSingleBlogQuery } from "@/app/redux/api/blogApi";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const { data, isLoading, error } = useGetSingleBlogQuery(slug);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load blog</p>;

  const blog = data?.data;

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-6">
        {blog?.blog_title}
      </h1>

      {/* Blog Description (HTML) */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog?.blog_description || "",
        }}
      />
    </section>
  );
}

