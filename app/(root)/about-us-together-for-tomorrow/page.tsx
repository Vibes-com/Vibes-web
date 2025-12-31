import AboutHero from '@/app/components/who-we-are/about-hero/AboutHero'
import CelebratingMilestones from '@/app/components/who-we-are/celebrating-milestones/CelebratingMilestones'
import CoreValues from '@/app/components/who-we-are/core-values/CoreValues'
import MissionVision from '@/app/components/who-we-are/mission-vision/MissionVision'
import OurTeam from '@/app/components/who-we-are/our-team/OurTeam'
import TimelineJourney from '@/app/components/who-we-are/timeline-journey/TimelineJourney'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Brand Agency | IT Services Company | Delhi NCR",

  description:
    "Vibes Communications is a proven agency in the space of Digital Marketing, Brand & IT Services. SEO, SMO, Brand Positioning, Website & Customized Software Development are prime services of the company.",

  alternates: {
    canonical: "https://www.vibescom.in/about-us-together-for-tomorrow",
  },

  openGraph: {
    title: "Digital Marketing & Brand Agency | IT Services Company | Delhi NCR",
    description:
      "Vibes Communications is a proven agency in the space of Digital Marketing, Brand & IT Services. SEO, SMO, Brand Positioning, Website & Customized Software Development are prime services of the company.",
    url: "https://www.vibescom.in/about-us-together-for-tomorrow",
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
    title: "Digital Marketing & Brand Agency | IT Services Company | Delhi NCR",
    description:
      "Vibes Communications is a proven agency in the space of Digital Marketing, Brand & IT Services. SEO, SMO, Brand Positioning, Website & Customized Software Development are prime services of the company.",
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
            <AboutHero />
            <MissionVision />
            <CoreValues />
            <TimelineJourney />
            <CelebratingMilestones />
            <OurTeam />
        </div>
    )
}

export default page
