import BrandCommunicationStrategy from "@/app/components/brandings/brand-communication-and-strategy/BrandCommunicationStrategy";
import BrandUpliftment from "@/app/components/brandings/brand-upliftment/BrandUpliftment";
import CorporateBranding from "@/app/components/brandings/corporate-branding/CorporateBranding";
import CompanyLogoDesign from "@/app/components/brandings/company-logo-design/CompanyLogoDesign";
import type { Metadata } from "next";

const metaMap: Record<string, Metadata> = {
  "corporate-branding": {
    title: "Corporate Branding Agency | Business & Corporate Branding Services Company",
    description:
      "Leading corporate branding agency offering expert branding services. We help businesses grow as a trusted branding services company and business branding company.",
  },

  "brand-upliftment": {
    title: "Rebrand Agency | Professional Rebranding Services & Design Solutions",
    description:
      "Expert rebrand agency offering strategic rebranding services and creative rebranding design to transform your brand identity and drive business growth.",

    alternates: {
      canonical: "https://www.vibescom.in/branding-agency/brand-upliftment",
    },

    openGraph: {
      title: "Rebrand Agency | Professional Rebranding Services & Design Solutions",
      description:
        "Expert rebrand agency offering strategic rebranding services and creative rebranding design to transform your brand identity and drive business growth.",
      url: "https://www.vibescom.in/branding-agency/brand-upliftment",
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
      title: "Rebrand Agency | Professional Rebranding Services & Design Solutions",
      description:
        "Expert rebrand agency offering strategic rebranding services and creative rebranding design to transform your brand identity and drive business growth.",
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
    title: "Brand Communication & Visual Identity | Branding and Communication Strategy",
    description:
      "Expert brand communication solutions with strong visual identity and branding and communication strategies that help businesses build trust, clarity, and growth.",

    alternates: {
      canonical: "https://www.vibescom.in/branding-agency/brand-communication-and-strategy",
    },

    openGraph: {
      title: "Brand Communication & Visual Identity | Branding and Communication Strategy",
      description:
        "Expert brand communication solutions with strong visual identity and branding and communication strategies that help businesses build trust, clarity, and growth.",
      url: "https://www.vibescom.in/branding-agency/brand-communication-and-strategy",
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
      title: "Brand Communication & Visual Identity | Branding and Communication Strategy",
      description:
        "Expert brand communication solutions with strong visual identity and branding and communication strategies that help businesses build trust, clarity, and growth.",
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

  "company-logo-design": {
    title: "Logo Maker & Logo Design | Company & Business Logo Design Services",
    description:
      "Professional logo maker offering creative logo design, company logo design, and business logo design services. Build your brand with a powerful business logo maker.",

    alternates: {
      canonical: "https://www.vibescom.in/branding-agency/company-logo-design",
    },

    openGraph: {
      title: "Logo Maker & Logo Design | Company & Business Logo Design Services",
      description:
        "Professional logo maker offering creative logo design, company logo design, and business logo design services. Build your brand with a powerful business logo maker.",
      url: "https://www.vibescom.in/branding-agency/company-logo-design",
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
      title: "Logo Maker & Logo Design | Company & Business Logo Design Services",
      description:
        "EProfessional logo maker offering creative logo design, company logo design, and business logo design services. Build your brand with a powerful business logo maker.",
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
  if (slug === "company-logo-design") {
    return <CompanyLogoDesign />;
  }

  return null;
};

export default page;