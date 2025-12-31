// "use client";
import HeroSection from '@/app/components/common/InnerPageHero/HeroSection';
import ContactForm from '@/app/components/contact-us/contact-form/ContactForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief Vibes on Your Digital Vision | Vibes Communications",

  description:
    "Brief your digital vision with Vibes Communications and leave the rest to us. Your trusted partner for website upliftment, SEO, social media, and lead generation services.",

  alternates: {
    canonical: "https://www.vibescom.in/contact-for-digital-requirements",
  },

  openGraph: {
    title: "Brief Vibes on Your Digital Vision | Vibes Communications",
    description:
      "Brief your digital vision with Vibes Communications and leave the rest to us. Your trusted partner for website upliftment, SEO, social media, and lead generation services.",
    url: "https://www.vibescom.in/contact-for-digital-requirements",
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
    title: "Brief Vibes on Your Digital Vision | Vibes Communications",
    description:
      "Brief your digital vision with Vibes Communications and leave the rest to us. Your trusted partner for website upliftment, SEO, social media, and lead generation services.",
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
        backgroundImage="/assests/img/contact/contact-us-bg.jpg"
        title={
          <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
            Connect. Collaborate.
            <br />
            <span className=" hero-highlight relative z-10 w-fit font-poppins font-semibold text-[65px] leading-[116%] text-[#F4BE00]">
              Create.
            </span>
          </h1>
        }
        description="A space to explore partnerships, projects, and meaningful digital possibilities."
      />
      <ContactForm />
    </div>
  )
}

export default page
