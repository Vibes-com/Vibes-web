// "use client";
import BlogListingHero from '@/app/components/blog/blog-listing-hero/BlogListingHero';
import BlogListing from '@/app/components/blog/BlogListing'
import AboutHero from '@/app/components/who-we-are/about-hero/AboutHero'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Insights & Blogs | Vibes Communications",

  description:
    "Digital Insights is the blog zone of Vibes Communications, focusing on digital trends and topics revolving around Search Engine Optimization, SMO, and Digital Transformation.",

  alternates: {
    canonical: "https://www.vibescom.in/digital-insights-blogs",
  },

  openGraph: {
    title: "Digital Insights & Blogs | Vibes Communications",
    description:
      "Digital Insights is the blog zone of Vibes Communications, focusing on digital trends and topics revolving around Search Engine Optimization, SMO, and Digital Transformation.",
    url: "https://www.vibescom.in/digital-insights-blogs",
    siteName: "Vibes Communications Pvt Ltd",
    images: [
      {
        url: "https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@vibescom",
    title: "Digital Insights & Blogs | Vibes Communications",
    description:
      "Digital Insights is the blog zone of Vibes Communications, focusing on digital trends and topics revolving around Search Engine Optimization, SMO, and Digital Transformation.",
    images: ["https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [{ name: "Vibes Communications" }],
  creator: "Vibes Communications",
  publisher: "Vibes Communications",
};

const page = () => {
    return (
        <div>
            <BlogListingHero />
            <BlogListing />
        </div>
    )
}

export default page
