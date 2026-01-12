import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { caseStudyApiUrls } from "@/app/constants/apiUrls";


type PageProps = {
  params: Promise<{ slug: string }>;
};


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params; // ✅ required now

  if (!slug) {
    return {
      title: "Case Study",
      description: "Invalid case study",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = caseStudyApiUrls.getSingleCasestudy.replace(/^\/|\/$/g, "");
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
      title: "Case Study",
      description: "Case study details",
    };
  }

  const json = await res.json();
  const caseStudy = json?.data;
  const meta_description = caseStudy?.page_description.match(/content="([^"]*)"/)?.[1];
  return {
    title: caseStudy?.page_title || caseStudy?.banner_heading || "Case Study",
    description: meta_description || caseStudy?.short_desc || "",
  };
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ unwrap promise
  return <ClientPage slug={slug} />;
}
