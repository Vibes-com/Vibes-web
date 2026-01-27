import AppDevelopment from "@/app/components/technologies/app-development/AppDevelopment";
import EcommDevelopment from "@/app/components/technologies/ecomm-development/EcommDevelopment";
import PmisDevelopment from "@/app/components/technologies/pmis-development/PmisDevelopment";
import WebDevelopment from "@/app/components/technologies/web-development/WebDevelopment";

import type { Metadata } from "next";

const techMetaMap: Record<string, Metadata> = {
  "website-development-company": {
    title: "Website Development Company | Web Designing & Shopify Development Services",
    description:
      "Leading website development company delivering web designing services, B2B custom websites, Shopify development, and expert web agency solutions.",
    alternates: {
      canonical: "https://www.vibescom.in/software-technology-services/website-development-company",
    },
    openGraph: {
      title: "Website Development Company | Web Designing & Shopify Development Services",
      description:
        "Leading website development company delivering web designing services, B2B custom websites, Shopify development, and expert web agency solutions.",
      url: "https://www.vibescom.in/software-technology-services/website-development-company",
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
      title: "Website Development Company | Web Designing & Shopify Development Services",
      description:
        "Leading website development company delivering web designing services, B2B custom websites, Shopify development, and expert web agency solutions.",
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
    publisher: "Vibes Communications"
  },

  "mobile-app-development-company": {
    title: "Mobile App Development Company | Best App Development Agencies",
    description:
      "Leading mobile app development company delivering Android, iOS, and B2C & D2C app solutions. Partner with one of the best app development agencies.",
    alternates: {
      canonical: "https://www.vibescom.in/software-technology-services/mobile-app-development-company",
    },
    openGraph: {
      title: "Mobile App Development Company | Best App Development Agencies",
      description:
        "Leading mobile app development company delivering Android, iOS, and B2C & D2C app solutions. Partner with one of the best app development agencies.",
      url: "https://www.vibescom.in/software-technology-services/mobile-app-development-company",
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
      title: "Mobile App Development Company | Best App Development Agencies",
      description:
        "Leading mobile app development company delivering Android, iOS, and B2C & D2C app solutions.",
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

  "ecommerce-development-company": {
    title: "Ecommerce Development Company | Custom Ecommerce Website Experts",
    description:
      "Leading B2C ecommerce development company delivering custom ecommerce website development services. Trusted ecommerce development agency for scalable growth.",
    alternates: {
      canonical: "https://www.vibescom.in/software-technology-services/ecommerce-development-company",
    },
    openGraph: {
      title: "Ecommerce Development Company | Custom Ecommerce Website Experts",
      description:
        "Leading B2C ecommerce development company delivering custom ecommerce website development services. Trusted ecommerce development agency for scalable growth.",
      url: "https://www.vibescom.in/software-technology-services/ecommerce-development-company",
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
      title: "Ecommerce Development Company | Custom Ecommerce Website Experts",
      description:
        "Leading B2C ecommerce development company delivering custom ecommerce website development services.",
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

  "project-management-information-system": {
    title: "Project Management Information System | PMIS Project Management Solutions",
    description:
      "Learn about Project Management Information System (PMIS). Discover how PMIS project management information system improves planning, tracking, and control.",
    alternates: {
      canonical: "https://www.vibescom.in/software-technology-services/project-management-information-system",
    },
    openGraph: {
      title: "Project Management Information System | PMIS Project Management Solutions",
      description:
        "Learn about Project Management Information System (PMIS). Discover how PMIS project management information system improves planning, tracking, and control.",
      url: "https://www.vibescom.in/software-technology-services/project-management-information-system",
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
      title: "Project Management Information System | PMIS Project Management Solutions",
      description:
        "Learn about Project Management Information System (PMIS). Discover how PMIS project management information system improves planning, tracking, and control.",
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

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  return (
    techMetaMap[slug] ?? {
      title: "Technology Services | Vibes Communications",
      description:
        "Explore technology solutions including web development, mobile app development, ecommerce, and PMIS by Vibes Communications.",
    }
  );
}


type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (slug === "website-development-company") return <WebDevelopment />;
  if (slug === "mobile-app-development-company") return <AppDevelopment />;
  if (slug === "ecommerce-development-company") return <EcommDevelopment />;
  if (slug === "project-management-information-system") return <PmisDevelopment />;

  return null;
};

export default page;
