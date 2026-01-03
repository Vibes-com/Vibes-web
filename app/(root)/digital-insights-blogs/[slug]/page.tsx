import { Metadata } from "next";
import BlogClient from "./blog-detail";
import { blogApiUrls } from "@/app/constants/apiUrls";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog",
      description: "Blog details",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = blogApiUrls.getSingleBlog.replace(/^\/|\/$/g, "");
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
      title: "Blog",
      description: "Blog details",
    };
  }

  const json = await res.json();
  const blog = json?.data;
  const meta_description = blog?.page_description.match(/content="([^"]*)"/)?.[1];
  return {
    title: blog?.page_title || blog?.blog_title || "Blog",
    description: blog?.meta_description || blog?.blog_slug || "",
    openGraph: {
      title: blog?.page_title || blog?.blog_title,
      description: meta_description
    },
  };
}

/* SERVER → CLIENT */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <BlogClient slug={slug} />;
}
