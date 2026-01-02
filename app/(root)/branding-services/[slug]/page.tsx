import BrandCommunicationStrategy from "@/app/components/brandings/brand-communication-and-strategy/BrandCommunicationStrategy";
import BrandUpliftment from "@/app/components/brandings/brand-upliftment/BrandUpliftment";
import CorporateBranding from "@/app/components/brandings/corporate-branding/CorporateBranding";
import type { Metadata } from "next";

const metaMap: Record<string, Metadata> = {
  "corporate-branding": {
    title: "Corporate Branding Services | Vibes Communications",
    description:
      "Build a strong corporate brand identity with Vibes Communications. Strategic branding solutions designed for long-term impact.",
  },

  "brand-upliftment": {
    title: "Brand Makeover Magic: Air India's Upliftment Journey",

  description:
    "Experience brand transformation through Air India's journey. Discover the magic of upliftment with Vibes Communications, a leading branding agency in Delhi NCR.",

  alternates: {
    canonical: "https://www.vibescom.in/brand-upliftment",
  },

  openGraph: {
    title: "Brand Makeover Magic: Air India's Upliftment Journey",
    description:
      "Experience brand transformation through Air India's journey. Discover the magic of upliftment with Vibes Communications, a leading branding agency in Delhi NCR.",
    url: "https://www.vibescom.in/brand-upliftment",
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
    title: "Brand Makeover Magic: Air India's Upliftment Journey",
    description:
      "Experience brand transformation through Air India's journey. Discover the magic of upliftment with Vibes Communications, a leading branding agency in Delhi NCR.",
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

  "brand-communication-and-strategy": {
    title: "Strategic Communication by Vibes to Transform Brands",

  description:
    "Master the art of brand communication inspired by Apple. Emotions, storytelling, and lasting impressions—Vibes Communications, your storytellers of success.",

  alternates: {
    canonical: "https://www.vibescom.in/brand-communication",
  },

  openGraph: {
    title: "Strategic Communication by Vibes to Transform Brands",
    description:
      "Master the art of brand communication inspired by Apple. Emotions, storytelling, and lasting impressions—Vibes Communications, your storytellers of success.",
    url: "https://www.vibescom.in/brand-communication",
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
    title: "Strategic Communication by Vibes to Transform Brands",
    description:
      "Master the art of brand communication inspired by Apple. Emotions, storytelling, and lasting impressions—Vibes Communications, your storytellers of success.",
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
  }
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  return metaMap[slug] ?? {
    title: "Branding Services | Vibes Communications",
    description:
      "Explore branding services including corporate branding, brand upliftment, and brand communication.",
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (slug === "corporate-branding") {
    return <CorporateBranding />;
  }

  if (slug === "brand-upliftment") {
    return <BrandUpliftment />;
  }

  if (slug === "brand-communication-and-strategy") {
    return <BrandCommunicationStrategy />;
  }

  return null;
};

export default page;
