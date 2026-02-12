

import CaseStudiesListingHero from "@/app/components/casestudies/casestudies-listing-hero/CaseStudiesListingHero";
import CaseStudiesCard, {
  SingleCaseStudyCard,
} from "@/app/components/common/CaseStudiesCard/CaseStudiesCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real Growth Stories by Vibes Communications",

  description:
    "See how Vibes Communications drives measurable growth through branding, digital marketing, and software solutions across diverse industries.",

  alternates: {
    canonical: "https://www.vibescom.in/case-studies",
  },

  openGraph: {
    title: "Case Studies | Real Growth Stories by Vibes Communications",
    description:
      "See how Vibes Communications drives measurable growth through branding, digital marketing, and software solutions across diverse industries.",
    url: "https://www.vibescom.in/case-studies",
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
    title: "Case Studies | Real Growth Stories by Vibes Communications",
    description:
      "See how Vibes Communications drives measurable growth through branding, digital marketing, and software solutions across diverse industries.",
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

export default function Page() {
  return (
    <div>
      <CaseStudiesListingHero />
      
      <section className="case-study-listing-wrapper section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudiesCard />
          </div>
        </div>
      </section>
    </div>
  );
}
