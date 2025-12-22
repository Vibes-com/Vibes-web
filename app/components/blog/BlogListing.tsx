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

  const LatestBlog = filteredBlogs[0]
  const LatestBlogList = filteredBlogs.slice(0,4)

  return (
    <>
      <section className="  px-4 pb-7 pt-32 grad-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7">
    
              <Link
                key={LatestBlog.blog_id}
                href={`/blog/${LatestBlog.blog_slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={LatestBlog.blog_thumb_image}
                    alt={LatestBlog.blog_title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                      {LatestBlog.blog_title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:col-span-5  p-4">
              <h2 className="text-3xl font-600 text-white text-start mb-5 border-b-2 border-white pb-3">Latest Blog</h2>
                <ul>
                  {LatestBlogList.map((blog) => (
                    <Link
                        key={blog.blog_id}
                        href={`/blog/${blog.blog_slug}`}
                        className="group"
                      >
                    <li className="mb-2">
                      
                      <div className="flex flex-row">
                        <figure className="w-24 mr-3">
                          <img
                            src={blog.blog_thumb_image}
                            alt={blog.blog_title}
                            className="w-full border-2 rounded-md"
                          />
                        </figure>
                        <h3 className="text-l flex-1 font-semibold mb-2 text-white flex items-center">
                          {blog.blog_title}
                        </h3>
                      </div>
                  </li>
                    </Link>
                ))}
                
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-12 pt-12 border-t-2 border-gray-200">
        <h2 className="text-4xl font-7 text-start mb-10">Popular</h2>
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
    </>
  );
}
