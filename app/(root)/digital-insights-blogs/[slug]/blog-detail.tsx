"use client";

import { useGetSingleBlogQuery } from "@/app/redux/api/blogApi";
import BlogShareButtons from "@/app/components/blog/blog-share-btn/BlogShareBtn";

type Props = {
  slug: string;
};

export default function BlogClient({ slug }: Props) {
  const { data, isLoading, error } = useGetSingleBlogQuery(slug);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load blog</p>;

  const blog = data?.data;

  return (
    <section className="w-full">
      <div className="relative">
        <img src={blog?.banner_img} alt={blog?.blog_title} className="w-full" />

        <h1 className="text-5xl w-[80%] font-medium uppercase mb-6 absolute 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        p-4 text-center text-white z-10">
          {blog?.blog_title}
        </h1>
      </div>

      <div className="blog-content-wrapper section-gap"> 
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 blog-content">
        <BlogShareButtons />
        <h2 className=" flex justify-center font-poppins !font-bold !text-[50px] leading-[116%] tracking-normal pb-10 capitalize items-center gap-1 "> <span className="!text-[#1F1F1F] !text-[50px]">–</span> OVERVIEW <span className="!text-[#1F1F1F] !text-[50px]">–</span> </h2>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog?.blog_description || "",
          }}
        />
      </div>
      </div>
    </section>
  );
}
