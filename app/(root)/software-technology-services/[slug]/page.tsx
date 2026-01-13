import AppDevelopment from "@/app/components/technologies/app-development/AppDevelopment";
import EcommDevelopment from "@/app/components/technologies/ecomm-development/EcommDevelopment";
import PmisDevelopment from "@/app/components/technologies/pmis-development/PmisDevelopment";
import WebDevelopment from "@/app/components/technologies/web-development/WebDevelopment";

import type { Metadata } from "next";

const techMetaMap: Record<string, Metadata> = {
  "web-development": {
    title: "Best Website Development Company in Noida | Avail Quotes",
    
      description:
        "Vibes Communications is a leading website design and development company in Noida, India, serving clients across Delhi/NCR, Gurgaon, Jaipur, Lucknow, Chandigarh, and international markets.",
    
      alternates: {
        canonical: "https://www.vibescom.in/website-development-company-noida",
      },
    
      openGraph: {
        title: "Best Website Development Company in Noida | Avail Quotes",
        description:
          "If you are searching for the best website development company in Noida for custom and creative website development services, Vibes Communications is the right fit for you.",
        url: "https://www.vibescom.in/website-development-company-noida",
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
        title: "Best Website Development Company in Noida | Avail Quotes",
        description:
          "If you are searching for the best website development company in Noida for custom and creative website development services, Vibes Communications is the right fit for you.",
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

  "app-development": {
    title: "Top Mobile App Company in Delhi NCR | Best App Solutions",

  description:
    "Vibes Communications is a top mobile application development company in Delhi NCR, offering the best mobile app development solutions. Call our experts now!",

  alternates: {
    canonical: "https://www.vibescom.in/mobile-app-company-delhi-ncr",
  },

  openGraph: {
    title: "Top Mobile App Company in Delhi NCR | Best App Solutions",
    description:
      "Vibes Communications is a top mobile application development company in Delhi NCR, offering the best mobile app development solutions. Call our experts now!",
    url: "https://www.vibescom.in/mobile-app-company-delhi-ncr",
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
    title: "Top Mobile App Company in Delhi NCR | Best App Solutions",
    description:
      "Vibes Communications is a top mobile application development company in Delhi NCR, offering the best mobile app development solutions.",
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

  "ecomm-development": {
    title: "Ecommerce Web Development Company in Noida | Vibes Communications",

  description:
    "Vibes Communications is a leading ecommerce development company in Noida. From website design to digital marketing, we help connect your business with potential customers.",

  alternates: {
    canonical: "https://www.vibescom.in/ecommerce-development-company-in-noida",
  },

  openGraph: {
    title: "Ecommerce Web Development Company in Noida | Vibes Communications",
    description:
      "Vibes Communications is a leading ecommerce development company in Noida. From website design to digital marketing, we help connect your business with potential customers.",
    url: "https://www.vibescom.in/ecommerce-development-company-in-noida",
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
    title: "Ecommerce Web Development Company in Noida | Vibes Communications",
    description:
      "Vibes Communications is a leading ecommerce development company in Noida, offering end-to-end ecommerce website solutions.",
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

  "pmis-development": {
    title: "Project Management Information System | PMIS Tool",

  description:
    "If you are seeking a project management tool to assess, track, and monitor your company’s development, Vibes Communications can create a custom PMIS solution tailored to your needs.",

  alternates: {
    canonical: "https://www.vibescom.in/project-management-information-system",
  },

  openGraph: {
    title: "Project Management Information System | PMIS Tool",
    description:
      "If you are seeking a project management tool to assess, track, and monitor your company’s development, Vibes Communications can create a custom PMIS solution tailored to your needs.",
    url: "https://www.vibescom.in/project-management-information-system",
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
    title: "Project Management Information System | PMIS Tool",
    description:
      "If you are seeking a project management tool to assess, track, and monitor your company’s development, Vibes Communications can create a custom PMIS solution tailored to your needs.",
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
