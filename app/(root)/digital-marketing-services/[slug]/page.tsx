import CampaignManagement from "@/app/components/digitalmarketing/campaign-management/CampaignManagement";
import PerformanceMarketing from "@/app/components/digitalmarketing/performance-marketing/PerformanceMarketing";
import SearchEngineOptimization from "@/app/components/digitalmarketing/search-engine-optimization/SearchEngineOptimization";
import SocialMediaManagement from "@/app/components/digitalmarketing/social-media-management/SocialMediaManagement";
import { JSX } from "react";
import type { Metadata } from "next";



const metaMap: Record<string, Metadata> = {
  "campaign-management": {
    title: "Influencer Management Companies | Social Media & Campaign Experts",
    description:
      "Top influencer management companies offering expert social media influencer management services and campaign management solutions for brands.",
    alternates: {
      canonical: "https://www.vibescom.in/digital-marketing-services/campaign-management",
    },
    openGraph: {
      title: "Influencer Management Companies | Social Media & Campaign Experts",
      description:
        "Top influencer management companies offering expert social media influencer management services and campaign management solutions for brands.",
      url: "https://www.vibescom.in/digital-marketing-services/campaign-management",
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
      title: "Influencer Management Companies | Social Media & Campaign Experts",
      description:
        "Top influencer management companies offering expert social media influencer management services and campaign management solutions for brands.",
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

  "social-media-marketing-agency": {
    title: "Social Media Marketing Agency | SMM Marketing Agency & Social Media Services",
    description:
      "Top social media marketing agency delivering expert SMM services for B2B and B2C brands result-driven strategies that grow reach, engagement, and online impact.",
    alternates: {
      canonical: "https://www.vibescom.in/digital-marketing-services/social-media-marketing-agency",
    },
    openGraph: {
      title: "Social Media Marketing Agency | SMM Marketing Agency & Social Media Services",
      description:
        "Top social media marketing agency delivering expert SMM services for B2B and B2C brands result-driven strategies that grow reach, engagement, and online impact.",
      url: "https://www.vibescom.in/digital-marketing-services/social-media-marketing-agency",
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
      title: "Social Media Marketing Agency | SMM Marketing Agency & Social Media Services",
      description:
        "Top social media marketing agency delivering expert SMM services for B2B and B2C brands result-driven strategies that grow reach, engagement, and online impact.",
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

  "performance-marketing-agency": {
    title: "Performance Marketing Agency | ROI-Driven Digital Growth Experts",
    description:
      "Leading performance marketing agency delivering measurable growth through data-driven PPC, SEO, social media ads, and conversion optimization. Maximize your ROI today.",
    alternates: {
      canonical: "https://www.vibescom.in/digital-marketing-services/performance-marketing-agency",
    },
    openGraph: {
      title: "Performance Marketing Agency | ROI-Driven Digital Growth Experts",
      description:
        "Leading performance marketing agency delivering measurable growth through data-driven PPC, SEO, social media ads, and conversion optimization. Maximize your ROI today.",
      url: "https://www.vibescom.in/digital-marketing-services/performance-marketing-agency",
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
      title: "Performance Marketing Agency | ROI-Driven Digital Growth Experts",
      description:
        "Leading performance marketing agency delivering measurable growth through data-driven PPC, SEO, social media ads, and conversion optimization. Maximize your ROI today.",
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

  "search-optimization-services": {
    title: "SEO Optimization Service | Digital Marketing & SEO Agency",
    description:
      "Boost your online presence with expert SEO optimization service, search optimization services, digital marketing SEO, and trusted SEO agency solutions.",
    alternates: {
      canonical: "https://www.vibescom.in/digital-marketing-services/search-optimization-services",
    },
    openGraph: {
      title: "SEO Optimization Service | Digital Marketing & SEO Agency",
      description:
        "Boost your online presence with expert SEO optimization service, search optimization services, digital marketing SEO, and trusted SEO agency solutions.",
      url: "https://www.vibescom.in/digital-marketing-services/search-optimization-services",
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
      title: "SEO Optimization Service | Digital Marketing & SEO Agency",
      description:
        "Boost your online presence with expert SEO optimization service, search optimization services, digital marketing SEO, and trusted SEO agency solutions.",
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
  "social-media-marketing-agency": <SocialMediaManagement />,
  "performance-marketing-agency": <PerformanceMarketing />,
  "search-optimization-services": <SearchEngineOptimization />,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return componentMap[slug] ?? null;
};

export default page;