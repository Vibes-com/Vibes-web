"use client";
import OurBlogs from '@/app/components/blogs/blogs'
import BrandingCasestudies from '@/app/components/branding-details/branding-casestudies/BrandingCasestudies'
import BrandingDetailsHero from '@/app/components/branding-details/branding-details-hero/BrandingDetailsHero'
import BrandingDetailsServices from '@/app/components/branding-details/branding-details-services/BrandingDetailsServices'
// import WhyChooseUs from '@/app/components/branding-details/why-choose-us/WhyChooseUs'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import React from 'react'
import { useRouter } from "next/navigation";
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Best Branding Services Agency | Vibes Communications",

//   description:
//     "Vibes Communications offers end-to-end branding services including brand creation, brand communication, and brand promotion to build a strong and positive market presence.",

//   alternates: {
//     canonical: "https://www.vibescom.in/branding-services",
//   },

//   openGraph: {
//     title: "Manage Your Brand with Brand Management Services | Vibes Communications",
//     description:
//       "Vibes Communications offers services in brand creation, brand communication, and brand promotion. Consult us today for professional brand management services.",
//     url: "https://www.vibescom.in/branding-services",
//     siteName: "Vibes Communications Pvt Ltd",
//     images: [
//       {
//         url: "https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary",
//     site: "@vibescom",
//     title: "Manage Your Brand with Brand Management Services | Vibes Communications",
//     description:
//       "Vibes Communications offers services in brand creation, brand communication, and brand promotion. Consult us today for professional brand management services.",
//     images: ["https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },

//   authors: [{ name: "Vibes Communications" }],
//   creator: "Vibes Communications",
//   publisher: "Vibes Communications",
// };

interface blogContent {
  title: string;
  Subtitle: React.ReactNode;
  bgImage?: string;
  highlighttitle: string,
  service: string
}
const textcontent: blogContent = {
  title: 'Branding',
  highlighttitle: "Insights",
  Subtitle: (
    <>
      Expert perspectives, trends, and strategic thinking that explore branding, <br />identity, and communication shaping how brands grow and stay relevant.
    </>
  ),
  bgImage: '/assets/img/web-development/wd-services-bg.jpg',
  service: 'branding'
};

const page = () => {
  const router = useRouter();
  return (
    <div>
      <BrandingDetailsHero />
      <BrandingDetailsServices />
      <WhyChooseUs
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        badgeText="Why Choose Us?"
        heading="How We"
        highlightText="Elevate Your Brand"
        description="Combining strategy, creativity, and data-driven insights to build distinctive brands that stand out, connect meaningfully, and drive measurable business impact."
        centerText={`Branding,\nDone Right!`}
        slides={[
          {
            title: "Expertise",
            desc: "Deep branding expertise driven by strategy and proven frameworks aligned with long-term goals.",
          },
          {
            title: "Creativity",
            desc: "Purpose-driven creativity that transforms brand stories into clear, compelling, and visual  experiences.",
          },
          {
            title: "Data-Backed Insights",
            desc: "Decisions driven by market research, audience behaviour, and insights for measurable results.",
          },
          {
            title: "Industry Experience",
            desc: "Proven cross-industry experience enables adaptable branding solutions tailored to unique sector challenges.",
          },

        ]}
      />


      <BrandingCasestudies />
      <OurBlogs tData={textcontent} />
      <SuccessStory
        title="Build the Brand You Imagine"
        subtitle=" Branding designed to create clarity, and long-term impact"
        buttonText="Get Started with Us"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact-for-digital-requirements")}
      />
    </div>
  )
}

export default page