import Gallery from '@/app/components/gallery/Gallery'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture | People, Ideas & Innovation at Vibes",

  description:
    "Experience the culture at Vibes Communications where creativity, collaboration, and innovation come together to build meaningful brands and solutions.",

  alternates: {
    canonical: "https://www.vibescom.in/case-studies",
  },

  openGraph: {
    title: "Our Culture | People, Ideas & Innovation at Vibes",
    description:
      "Experience the culture at Vibes Communications where creativity, collaboration, and innovation come together to build meaningful brands and solutions.",
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
    title: "Our Culture | People, Ideas & Innovation at Vibes",
    description:
      "Experience the culture at Vibes Communications where creativity, collaboration, and innovation come together to build meaningful brands and solutions.",
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
        <Gallery/>
    </div>
  )
}

export default page