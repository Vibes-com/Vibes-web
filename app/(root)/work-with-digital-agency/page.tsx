
import JobTabs from '@/app/components/careers/JobTabs/JobTabs'
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Vibes Communications | Build Your Future With Us",

  description:
    "Join Vibes Communications and grow your career in branding, digital marketing, and technology with a team that values creativity and impact.",

  alternates: {
    canonical: "https://www.vibescom.in/work-with-digital-agency",
  },

  openGraph: {
    title: "Careers at Vibes Communications | Build Your Future With Us",
    description:
      "Join Vibes Communications and grow your career in branding, digital marketing, and technology with a team that values creativity and impact.",
    url: "https://www.vibescom.in/work-with-digital-agency",
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
    title: "Careers at Vibes Communications | Build Your Future With Us",
    description:
      "Join Vibes Communications and grow your career in branding, digital marketing, and technology with a team that values creativity and impact.",
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
      <HeroSection
        backgroundImage="/career/career-banner.jpg"
        title={
          <h1 className=" pt-15 hero-heading font-poppins font-normal text-[32px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] leading-[116%] capitalize text-white">
            Where Careers Take Shape:
            <br />
            <span className=" hero-heading hero-highlight relative z-10 w-fit font-poppins font-semibold text-[32px] sm:text-[65px] md:text-[65px] lg:text-[65px] xl:text-[65px] 2xl:text-[65px] leading-[116%] text-[#F4BE00]">
              Growth at Vibes
            </span>
          </h1>
        }
        description="An environment that nurtures talent, encourages innovation, and supports long-term professional growth."
      />
      <JobTabs />
    </div>
  )
}

export default page