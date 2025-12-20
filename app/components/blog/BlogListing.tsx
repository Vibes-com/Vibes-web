import React, { useState } from "react";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/app/redux/api/blogApi";

export default function BlogListing() {
  const { data, error, isLoading } = useGetAllBlogsQuery();
  const [selectedFilter, setSelectedFilter] = useState("All");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs</p>;

  const blogs = data?.blog_list ?? [];

  const filteredBlogs =
    selectedFilter === "All"
      ? blogs
      : blogs.filter((blog: any) => blog.blog_service === selectedFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog: any) => (
          <Link
            key={blog.blog_id}
            href={`/blog/${blog.blog_slug}`}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src={blog.blog_thumb_image}
                alt={blog.blog_title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.blog_title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.blog_small_description ||
                    blog.blog_description
                      .replace(/<[^>]*>/g, "")
                      .substring(0, 200)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
