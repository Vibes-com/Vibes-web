import CampaignManagement from "@/app/components/digitalmarketing/campaign-management/CampaignManagement";
import PerformanceMarketing from "@/app/components/digitalmarketing/performance-marketing/PerformanceMarketing";
import SearchEngineOptimization from "@/app/components/digitalmarketing/search-engine-optimization/SearchEngineOptimization";
import SocialMediaManagement from "@/app/components/digitalmarketing/social-media-management/SocialMediaManagement";
import { JSX } from "react";
import type { Metadata } from "next";

const metaMap: Record<string, Metadata> = {
  "campaign-management": {
    title: "Campaign Management Agency in India | Vibes Communications",

  description:
    "Vibes Communications is a leading campaign management agency in India, offering creative campaign strategies to achieve desired results and measurable business outcomes.",

  alternates: {
    canonical: "https://www.vibescom.in/campaign-management-agency-india",
  },

  openGraph: {
    title: "Campaign Management Agency in India | Vibes Communications",
    description:
      "Vibes Communications is a leading campaign management agency in India, offering creative campaign strategies to achieve desired results and measurable business outcomes.",
    url: "https://www.vibescom.in/campaign-management-agency-india",
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
    title: "Campaign Management Agency in India | Vibes Communications",
    description:
      "Vibes Communications is a leading campaign management agency in India, offering creative campaign strategies to achieve desired results.",
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
  },

  "social-media-management": {
    title: "Social Media Marketing Agency in Delhi NCR | Call Experts",

  description:
    "If you are searching for the best social media marketing agency in Delhi NCR to boost your business’s online presence, connect with our experts at Vibes Communications.",

  alternates: {
    canonical: "https://www.vibescom.in/social-media-marketing-agency-delhi-ncr",
  },

  openGraph: {
    title: "Social Media Marketing Agency in Delhi NCR | Call Experts",
    description:
      "If you are searching for the best social media marketing agency in Delhi NCR to boost your business’s online presence, connect with our experts at Vibes Communications.",
    url: "https://www.vibescom.in/social-media-marketing-agency-delhi-ncr",
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
    title: "Social Media Marketing Agency in Delhi NCR | Call Experts",
    description:
      "If you are searching for the best social media marketing agency in Delhi NCR to boost your business’s online presence, connect with our experts at Vibes Communications.",
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
  },

  "performance-marketing": {
    title: "Performance Marketing Services | Vibes Communications",
    description:
      "Data-driven performance marketing services focused on ROI, conversions, and business growth.",
  },

  "search-engine-optimization": {
     title: "Best SEO Agency in Noida | Free Website Audit & Consultation",

  description:
    "Vibes Communications is the best SEO agency in Noida, Delhi NCR, helping businesses achieve faster keyword rankings and quality website traffic in minimum time. Call us now for a free audit.",

  alternates: {
    canonical: "https://www.vibescom.in/seo-agency-noida",
  },

  openGraph: {
    title: "Best SEO Agency in Noida | Free Website Audit & Consultation",
    description:
      "Vibes Communications is the best SEO agency in Noida, Delhi NCR, helping businesses achieve faster keyword rankings and quality website traffic in minimum time. Call us now for a free audit.",
    url: "https://www.vibescom.in/seo-agency-noida",
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
    title: "Best SEO Agency in Noida | Free Website Audit & Consultation",
    description:
      "Vibes Communications is the best SEO agency in Noida, delivering fast keyword rankings and quality traffic. Get a free website audit today.",
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
  },
};

const defaultMeta: Metadata = {
  title: "Digital Marketing Services | Vibes Communications",
  description:
    "Explore digital marketing services including SEO, social media, performance marketing, and campaign management.",
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  return metaMap[slug] ?? defaultMeta;
}

const componentMap: Record<string, JSX.Element> = {
  "campaign-management": <CampaignManagement />,
  "social-media-management": <SocialMediaManagement />,
  "performance-marketing": <PerformanceMarketing />,
  "search-engine-optimization": <SearchEngineOptimization />,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return componentMap[slug] ?? null;
};

export default page;
