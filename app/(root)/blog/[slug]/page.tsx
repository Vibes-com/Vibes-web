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
    <section className="w-full">
      <div className="relative">
        <img className="w-full" src={blog?.banner_img} />
        {/* Blog Title */}
        <h1 className="text-5xl w-[80%] font-medium uppercase mb-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white z-10">
          {blog?.blog_title}
        </h1>
      </div>
      <div className="max-w-4xl mx-auto pb-20 pt-10 px-4 blog-content">
        <h2 className="!mt-0">Overview</h2>
        {/* Blog Description (HTML) */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog?.blog_description || "",
          }}
        />
      </div>
    </section>
  );
}

