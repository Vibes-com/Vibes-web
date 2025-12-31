"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/app/redux/api/blogApi";
import { titleCase } from "title-case";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
    
    const services = Array.from(
      new Set(blogs.map((blog: any) => blog.blog_service))
    );


  const LatestBlog = blogs[0]
  const LatestBlogList = blogs.slice(0, 4)

  return (
    <>
      <section className="blog-listing-wrapper section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7">

              <Link
                key={LatestBlog.blog_id}
                href={`/digital-insights-blogs/${LatestBlog.blog_slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={LatestBlog.blog_thumb_image}
                    alt={LatestBlog.blog_title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />

                  <div className="p-6">
                    <h3 className="text-[#1F1F1F] font-poppins font-semibold text-[28px] mb-2 line-clamp-2">
                      {LatestBlog.blog_title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:col-span-5  p-4">
              <h2 className="text-[#1F1F1F] font-poppins font-semibold text-[28px] text-start mb-5 border-b-3 border-[#F4BE00] pb-3">Latest Blog</h2>
              <ul>
                {LatestBlogList.map((blog) => (
                  <Link
                    key={blog.blog_id}
                    href={`/digital-insights-blogs/${blog.blog_slug}`}
                    className="group"
                  >
                    <li className="mb-2">

                      <div className="flex flex-row">
                        <figure className="w-24 mr-3">
                          <img
                            src={blog.blog_thumb_image}
                            alt={blog.blog_title}
                            className="w-full border-1 border-[#F4BE00] rounded-md"
                          />
                        </figure>
                        <h3 className="text-l flex-1  mb-2 text-[#1F1F1F] font-poppins font-semibold flex items-center">
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

      <div className="border-t-2 border-[#FFFFFF] blog-listig-bottom-wrapper section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex justify-between">
            <h2 className="text-[#1F1F1F] font-poppins font-semibold text-[28px] text-start mb-10">Popular</h2>
             <Select
              value={selectedFilter}
              onValueChange={(value) => setSelectedFilter(value)}
            >
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Filter by service" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Services</SelectLabel> */}

                  {/* ALL OPTION */}
                  <SelectItem value="All">All</SelectItem>

                  {/* DYNAMIC OPTIONS */}
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {titleCase(service)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog: any) => (
              <Link
                key={blog.blog_id}
                href={`/digital-insights-blogs/${blog.blog_slug}`}
                className="group"
              >
                <div className="bg-white h-[410px] rounded-1xl shadow-md hover:shadow-xl transition">
                  <img
                    src={blog.blog_thumb_image}
                    alt={blog.blog_title}
                    className="w-full h-56 object-cover rounded-t-1xl"
                  />

                  <div className="p-6">
                    <h3 className="text-[#1F1F1F] font-poppins font-semibold text-[20px] mb-1 line-clamp-2">
                      {blog.blog_title}
                    </h3>
                    <p className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-[#636060] mb-2">{blog.created_on}</p>
                    <p className="text-[#525252] line-clamp-3 text-[14px]">
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
        </div>
      </div>
    </>
  );
}
